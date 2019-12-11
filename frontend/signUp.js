$(function() {
    console.log("hi"); 
    $('#sign-up').click(handleCreateAccount);
});

const handleCreateAccount = async function(event) {
    console.log("hello")
    //go back to index.html with proper permissions or throw error/alert message

    event.preventDefault();

    console.log($(`#passwordval`).val())
    /*
    await axios({
        method: "post",
        url: "http://localhost:3000/account/create",
        //withCredentials: false,
        data: {
            first: $(`#fname`).val(),
            last: $(`#lname`).val(),
            username: $(`#uname`).val(),
            password: $(`#pswrd`).val(),
            account_type: "user"
        }
    });
*/
    let r = axios.post('http://localhost:3000/account/create', {
        name: "" + $(`#usernameval`).val() + "",
        pass: "" + $(`#passwordval`).val() + "",
        data: {
            name: "" + $(`#nameval`).val() + "",
            account_type: "user"
        }
    });

    r.then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    });

    //window.location.href = "http://localhost:3001/login.html"

    //window.location = "index.html"

}
