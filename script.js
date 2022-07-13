//let's get some data first (we're gonna use fetch api)
let APIurl = 'https://jsonplaceholder.typicode.com/users'

//lets grab some HTML Elements
const userCards = document.querySelector('.user-cards')
const inputField = document.querySelector('#searchBar')

//Fetching data from API
fetch(APIurl).then(response => {
   return response.json()
})
.then(data => {
    data.forEach(user => {
        let card = document.createElement('div')
        let cardHeader = document.createElement('div')
        let cardBody = document.createElement('div')
        card.classList.add('card')
        cardHeader.classList.add('card-header')
        cardBody.classList.add('card-body')

        cardHeader.innerText = user.name
        cardBody.innerText = user.email

        //appending user into the userCards
        card.appendChild(cardHeader)
        card.appendChild(cardBody)
        userCards.appendChild(card)
    })  
})


//Filtering with name
inputField.addEventListener('keyup', (e) => {
    let key = e.target.value

    let nameBox = document.querySelectorAll('.card')
    nameBox.forEach(userName => {
        let name = userName.textContent
        if(name.includes(key)){
            userName.classList.remove('hide-card')
        }else{
            userName.classList.add('hide-card')
        }
    })
})

