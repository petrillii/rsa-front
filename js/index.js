const URLAPI = "https://localhost:7018/RSA/";

function signIn(element){
    element.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value,
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`${URLAPI}login`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

function signUp(element){
    element.preventDefault()
    console.log( document.getElementById("email-signup").value)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "name": document.getElementById("name-signup").value,
        "password": document.getElementById("password-signup").value,
        "email": document.getElementById("email-signup").value,
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`${URLAPI}signup`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}