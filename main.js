const inputPrice = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btnCount = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const costSpan = document.querySelector('.cost')


const resultSplit = () => {
    if(inputPrice.value == '' || inputPeople.value == '' || tip.value == '') {
        error.textContent = 'Uzupełnij wszystkie pola'
        costInfo.style.display = 'none'
    } else {
        calculateBill()
    }
    
}

const calculateBill = () => {
    const price = parseFloat(inputPrice.value)
    const people = parseInt(inputPeople.value)
    const newTip = parseFloat(tip.value)
    const score = (price + (price * newTip)) / people
    costInfo.style.display = 'block'
    error.textContent = ''
    costSpan.textContent = score.toFixed(2)

}

btnCount.addEventListener('click', resultSplit)