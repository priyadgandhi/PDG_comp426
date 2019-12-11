$(function() {
    console.log("hi"); 
    $('#sign-up').click(handleCreateAccount);
});

const handleCreateAccount = async function(event) {
    console.log("hello")
    if ($.trim($(`#usernameval`).val()) == "" || $.trim($(`#nameval`).val()) == "" || $.trim($(`#schoolval`).val()) == "" || $.trim($(`#majorval`).val()) == "" || $.trim($(`#passwordval`).val()) == "") {
        if (!document.getElementById("fillAllFieldsWarning")) {
        $(`#inputFields`).append(`<h5 id = "fillAllFieldsWarning" style = "color: red"> **Must fill out all fields!** </h5>`); 
        }
    } else {
        event.preventDefault();
        let response = axios.post('http://localhost:3000/account/create', {
            name: "" + $(`#usernameval`).val() + "",
            pass: "" + $(`#passwordval`).val() + "",
            data: {
                fullname: "" + $(`#nameval`).val() + "",
                school: "" + $(`#schoolval`).val() + "",
                major: "" + $(`#majorval`).val() + "",
                account_type: "user"
            }
        });

        response.then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

        window.location.href = "http://localhost:3001/login.html"
    }
}
