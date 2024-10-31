const formName = document.getElementById('nameForm')
const form = document.getElementById('formCreate')
const btn = document.getElementById('btn')

btn.onclick = e => {
    resetForm(e)
}

let resetForm = (event) => {
    event.preventDefault()
    form.innerHTML = '';
    let file = document.getElementById('file-selector');
    file.value = null;
    formName.innerHTML = '';
}

let createForm = (file) => {

    formName.innerHTML = file.name
    form.innerHTML = ''
    btn.classList.remove('d-none')
    file.fields.forEach(item => {
        let div = document.createElement('div')
        div.classList.add('d-flex', 'flex-column')

        let input = document.createElement('input')
        input.classList.add('form-control')

        function createLabel(){
            if(item.label){
                let label = document.createElement('label')
                label.innerHTML = item.label
                div.append(label)
                label.classList.add('form-label')
            }
        }

        createLabel()

        function createDataList(){
            let datalist = document.createElement('datalist')
            datalist.setAttribute('id', 'colors')
            input.setAttribute('list', 'colors')
            input.setAttribute('type', 'color')
            input.classList.add('form-control', 'form-control-color')
            item.input.colors.forEach(color => {
                let option = document.createElement('option')
                option.setAttribute('value', color)
                datalist.append(option)
            })
            div.append(datalist);
        }

        switch (item.input.type) {
            case 'technology':
                input = document.createElement('select')
                input.classList.add('form-select')
                item.input.technologies.forEach(tech => {
                    let option = document.createElement('option')
                    option.innerHTML = tech
                    input.append(option)
                });
                break;

            case 'checkbox':
                input.classList.add('form-check-input');
                break;

            case 'textarea':
                input = document.createElement('textarea')
                input.classList.add('form-control');
                break;

            case 'color':
                createDataList()
                break;
            default:
                input.setAttribute('type', item.input.type)

        }

        if(item.input.required || item.input['required:'])
            input.setAttribute('required', 'true');

        if(item.input.multiple)
            input.setAttribute('multiple', item.input.multiple)

        if(item.input.placeholder)
            input.setAttribute('placeholder', item.input.placeholder)

        if(item.input.filetype){
            let newFileType=  item.input.filetype.map(filetype => {
                return '.' + filetype
            })
            input.setAttribute('accept', newFileType.join(', '))
        }


        div.append(input)
        form.append(div)

    })

    if (file.references){
        let div = document.createElement('div')
        file.references.forEach(reference => {
            let text_without_ref = reference['text without ref']
            let text = reference.text
            let href = reference.ref

            if(reference.input){
                let input = document.createElement('input')
                input.setAttribute('type', 'checkbox')
                div.append(input)
            }
            else{
                let link = document.createElement('a')
                if(text_without_ref){
                    div.append(text_without_ref)
                }
                link.innerHTML = text
                link.setAttribute('href', href)
                div.append(link)
                div.classList.add('d-flex', 'gap-1')

            }
            form.append(div)
        })
    }

    if(file.buttons){
        let div = document.createElement('div')
        file.buttons.forEach(button => {
            let btn = document.createElement('button')
            btn.innerHTML = button.text
            btn.classList.add('btn', 'btn-info', 'text-white')
            div.classList.add('d-flex', 'gap-4')
            div.append(btn)
        })
        form.append(div)
    }

}

function readFile(input) {
    let file = input.files[0];
    if (!file) return;

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        createForm(JSON.parse(String(reader.result)))
    };

    reader.onerror = function() {
        console.log(reader.error);
    };

}




