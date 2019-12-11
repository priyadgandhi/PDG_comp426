$(function() {
    console.log("hi"); 
    $('#log-in').click(handleLogin);
});

const handleLogin = async function(event) {
    
    event.preventDefault();

   // console.log($(`#uname-signIn`).val())

    let r = await axios({
        method: "post",
        url: "http://localhost:3000/account/login",
        data: {
            name: "" + $(`#usernameval`).val() + "",
            pass: "" + $(`#passwordval`).val() + ""
        }
    });

    /*
    let r = axios.post('http://localhost:3000/account/login', {
        name: "" + $(`#uname-signIn`).val() + "",
        pass: "" + $(`#pswrd-signIn`).val() + ""
    });*/

    console.log(r)
    localStorage.setItem('jwt', r.data.jwt); 

/*
    r.then(response => {
        console.log(response.data);
        window.jwt = response.data.jwt
    }).catch(error => {
        alert(error);
    });*/

    
    let req = axios.get('http://localhost:3000/account/status', 
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }
    );

    req.then(response => {
        console.log(response.data);
        window.location.href = "http://localhost:3001/loggedin.html"

        //document.getElementById("sign_in").remove()
        //document.getElementById("sign_out").style.visibility = "show";
    }).catch(error => {
        alert(error);
    });
    
}
