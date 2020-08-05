const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.element.message.value

socket.emit('sendMessage', message)
})


// document.querySelector('#message-form', function (e) {

//     mess.addEventListener('submit', (e) => {
//     e.preventDefault()
//     })

//     const message = document.querySelector('input').value

//     socket.emit('sendMessage', message)
// })