const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/account"
});
async function newAcc(){
    event.preventDefault();
    let userName = $('#userName-sign-up').val();
    let pass = $('#pass-sign-up').val();
    let name = $('#name-sign-up').val();
    let x = axios.post('http://localhost:3000/account/create', {
        name: userName,
        pass: pass,
        data: {
            other: name,
        }
    });
    x.then(response => {
        console.log(response.data);
        let z = axios.post('http://localhost:3000/account/login',
        {
            name: userName,
            pass: pass
        });
        z.then(response => {
            console.log("in")
             let jwt = response.data.jwt;
             localStorage.setItem('jwt', jwt);
             localStorage.setItem('user', response.data.name);
             window.location.href = "you.html";
        }).catch(error => {
            console.log(error);  
        })
    }).catch(error => {
        console.log(error);
    });
}
loginFunc = async function(event){
    event.preventDefault();
    let userName = $('#userName-log-in').val();
    let pass = $('#pass-log-in').val();
    let jwt;

    let x = axios.post('http://localhost:3000/account/login',
    {
        name: userName,
        pass: pass
    });

    x.then(response => {
        jwt = response.data.jwt;
        localStorage.setItem('jwt', jwt);
        localStorage.setItem('user', response.data.name)
        console.log(response.data);
        let y = axios.get('http://localhost:3000/user',
        {
            headers: { "Authorization": "Bearer " + jwt }
        });
        y.then(response => {
            console.log(response.data);
            if(!response.data.result.includes("logs")){
                let z = axios.post('http://localhost:3000/user/logs', {    
                    data: {logs: []}
                },
                {
                    headers: { "Authorization": "Bearer " + jwt }
                });
                z.then(result => {
                    console.log(result.data);
                }).catch(err => {
                    console.log(err);
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }).catch(error => {
        console.log(error);
    });
}
logOut = function(event){
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
}
