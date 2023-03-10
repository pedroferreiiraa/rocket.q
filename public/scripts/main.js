import  Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botoes que existe com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
// adicionar a escuta de click nos botoes
  button.addEventListener('click', handleClick)
}) 



const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener("click", (event) => handleClick(event, false))
})

  function handleClick(event, check = true) {
    // Previnindo padrão do form
    event.preventDefault();

    const slug = check ? "check" : "delete"
    //Pegando o id da room
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    // Pegando o formulário para persistir os dados
    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)







    modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir essa pergunta"
    modalDescription.innerHTML = check ? "Deseja marcar como lida?" : "Tem certeza que deseja excluir essa pergunta?"
    modalButton.innerHTML = check ? "Marcar como lida" : "Excluir pergunta"
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    // Abrir modal
    modal.open()
  }