$(function() {
    console.log("hi"); 
    $('#beautySubmitPost').click(handleSubmit);
    test(); 
});

const handleSubmit = async function(event) {
    event.preventDefault();

    console.log($(`#postContent`).val())

    let jwt = localStorage.getItem('jwt'); 
    
    let status = await axios({
        method: "get",
        url: "http://localhost:3000/account/status",
        headers: {
            Authorization: "Bearer " + jwt
        }
    });

    console.log(status); 
    console.log(status.data.user.name); 
    
  
    let username = status.data.user.name; 
    let content = $(`#postContent`).val(); 

   
    let r = axios.post('http://localhost:3000/private/beauty', {
        data: {
            name: username,
            data: content
        }, type: "merge"}, 
        {headers: {Authorization: "Bearer " + jwt}},);
    
    r.then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
   

    console.log(r)
}
async function test() {
    let jwt = localStorage.getItem('jwt'); 
    const result = await axios({
        method: 'get',
        url: 'http://localhost:3000/private/beauty',
        headers: {
            Authorization: "Bearer " + jwt
        },
      });
    console.log(result.data.result.length)
}
