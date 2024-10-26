const formName = document.getElementById('nameForm')
const form = document.getElementById('formCreate')

let createForm = (file) => {
    formName.innerHTML = file.name
    form.innerHTML = ''
    file.fields.forEach(item => {
        let div = document.createElement('div')
        let input = document.createElement('input')
        if(item.label){
            let label = document.createElement('label')
            label.innerHTML = item.label
            div.append(label)
        }
        if(item.input.required){
            input.setAttribute('required', item.input.required)
        }
        if(item.input.type === 'technology'){
            input = document.createElement('select')
            item.input.technologies.forEach(tech => {
                let option = document.createElement('option')
                option.innerHTML = tech
                input.append(option)
            })
        }

        if(item.input.placeholder){
            input.setAttribute('placeholder', item.input.placeholder)
        }
        if(item.input.type !== 'technology'){
            input.setAttribute('type', item.input.type)
        }

        div.append(input)
        form.append(div)
    })
}

function readFile(input) {
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        createForm(JSON.parse(String(reader.result)))
    };

    reader.onerror = function() {
        console.log(reader.error);
    };

}


