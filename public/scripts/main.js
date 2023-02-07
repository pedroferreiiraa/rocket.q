import  Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botoes que existe com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
// adicionar a escuta de click nos botoes
  button.addEventListener('click', event => {
    // Abrir o modal
    modal.open()
  })
}) 



const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => {
    modal.open()
  })
})