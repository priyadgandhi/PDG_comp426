$(function() {
    console.log("hi"); 
    $('#log-in').click(handleLogin);
});

const handleLogin = async function(event) {
    event.preventDefault();

    let result = await axios({
        method: "post",
        url: "http://localhost:3000/account/login",
        data: {
            name: "" + $(`#usernameval`).val() + "",
            pass: "" + $(`#passwordval`).val() + ""
        }
    });

    localStorage.setItem('jwt', result.data.jwt); 
    
    let request = axios.get('http://localhost:3000/account/status', 
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }
    );

    request.then(response => {
        console.log(response.data);
        window.location.href = "http://localhost:3001/loggedin.html"
    }).catch(error => {
        alert(error);
    });
    
}
