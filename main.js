const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btn = document.querySelector('#btnCalcular')
const p = document.querySelector('#result')
const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const calc = Number(input1.value) + Number(input2.value)
  p.innerHTML = calc
})
