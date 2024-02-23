const url = "http://localhost:3000/api"

const headers = {
    "Content-Type": "application/json; charset=UTF-8"
}

const newUser = {
    name: "Erik Thurler",
    city: "Rio de janeiro",
    avatar: "https://picsum.photos/200/300"
}

const updatedUser = {
    name: "Fulano Tal",
    city: "São Paulo",
    avatar: "https://picsum.photos/200/300"
}


function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApi.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(url + "/" + id)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: headers
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
    fetch(url + "/" + id, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: headers
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

function deleteUser(id) {
    fetch(url + "/" + id, {
        method:"DELETE",
        headers: headers
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}


getUsers()
getUser(1)
// addUser(newUser)
// updateUser(updatedUser,7)
deleteUser(5)
