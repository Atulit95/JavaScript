function SetUsername(username){
    // Complex DB Calls
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const xyz = new createUser("xyz", "example.com", "123")
console.log(xyz);