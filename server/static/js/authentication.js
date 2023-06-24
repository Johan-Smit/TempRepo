const identityProviderUrl = "https://aqri6bnma6.us-east-1.awsapprunner.com";
//const identityProviderUrl = "http://localhost:8081";

async function login(username, password) {
    
    let config = {
        withCredentials: true
    }
    
    const data = {
        "username": username,
        "password": password
    }

    const authResult = await axios.post(
        identityProviderUrl + "/authenticate",
        data,
        config
    );

    console.log(authResult)

    if (authResult.data.message == "Success") {
        location.href = "/";
    }
}

async function register(username, password) {

}

function loginExecute() {
    const un = document.getElementById("loginUsername").value;
    const pw = document.getElementById("loginPassword").value;

    login(un, pw);
}