const formCal = document.querySelector('#formCal')
const inputCal = document.querySelector('#inputCal')
const btns = document.querySelectorAll('.btn-cal')
const btnOp = document.querySelectorAll('.op')
formCal.addEventListener('submit', (e) => {
    e.preventDefault()
})

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        let value = `${btns[i].dataset.btn}`
        try {
            if (value === 'delete') {
                inputCal.value = `${inputCal.value.substring(0, inputCal.value.length - 1)}`            
            } else if (btns[i].dataset.btn === '0' && inputCal.value.length === 0) {
                console.log('Number');
            } else if (btns[i].dataset.btn === '0' && inputCal.value[inputCal.value.length - 1] === '+') {
                inputCal.value = `${inputCal.value + value + ',' }`
            } else if (btns[i].dataset.btn === '0' && inputCal.value[inputCal.value.length - 1] === '-') {
                inputCal.value = `${inputCal.value + value + ',' }`
            } else if (btns[i].dataset.btn === '0' && inputCal.value[inputCal.value.length - 1] === '/') {
                inputCal.value = `${inputCal.value + value + ',' }`
            } else if (btns[i].dataset.btn === '0' && inputCal.value[inputCal.value.length - 1] === '*') {
                inputCal.value = `${inputCal.value + value + ',' }`
            } else if (btns[i].dataset.btn === ',' && inputCal.value[inputCal.value.length - 1] === ',') {
                console.log('Number');
            } else if (btns[i].dataset.btn === ',' && inputCal.value.length === 0) {
                inputCal.value = '0,'
            } else if (btns[i].dataset.btn === ',' && inputCal.value[inputCal.value.length - 1] === '+') {
                inputCal.value = `${inputCal.value + '0,'}`
            } else if (btns[i].dataset.btn === ',' && inputCal.value[inputCal.value.length - 1] === '-') {
                inputCal.value = `${inputCal.value + '0,'}`
            } else if (btns[i].dataset.btn === ',' && inputCal.value[inputCal.value.length - 1] === '/') {
                inputCal.value = `${inputCal.value + '0,'}`
            } else if (btns[i].dataset.btn === ',' && inputCal.value[inputCal.value.length - 1] === '*') {
                inputCal.value = `${inputCal.value + '0,'}`
            } else if (btns[i].dataset.btn === 'result') {
                if (inputCal.value === '') {
                    inputCal.value = 'Type Op'
                    return
                }
                let result = eval(inputCal.value.replaceAll(',', '.'))
                inputCal.value = result
            } else {
                inputCal.value = `${inputCal.value + value}`
            }
        } catch (error) {
            console.log(error);
            inputCal.value = 'Error'
        }
    })
}

for (let j = 0; j < btnOp.length; j++) {
    btnOp[j].addEventListener('click', () => {
        let opValue =  `${btnOp[j].dataset.btn}`
        if (inputCal.value === '') {
            inputCal.value = ''
        } else if (inputCal.value[inputCal.value.length - 1] === '+' || inputCal.value[inputCal.value.length - 1] === '-' || inputCal.value[inputCal.value.length - 1] === '*' || inputCal.value[inputCal.value.length - 1] === '/') {
            console.log('Invalid');
        } else {
            inputCal.value = `${inputCal.value + opValue}`
        }
    })
}
