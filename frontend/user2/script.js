//alert('hello, Javascript')
//  http://localhost:3001/users

let tr = ''
let id =  4 
let OneUser = ''
let url = 'http://localhost:3001/users'

async function getUsers(){
    try{
        const response = await fetch(url)
        const users = await response.json()
        //console.log(data)
        // output
        if(users){
            
            for(let user of users){
                tr += `
                    <tr>
                        <td>${user.id} </td>
                        <td>${user.name} </td>
                        <td>${user.email} </td>
                        <td>${user.city} </td>
                    </tr>
                `
            }
            document.querySelector('#tbody').innerHTML = tr
        }else{
            console.log(users)
        }
    }catch(error){
        console.log(error)
    }
}
getUsers()
function getOneUser(){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        OneUser += `
            <p>${data.name}</p>
        `
        //renderResults.textContent = JSON.stringify(data)
        document.querySelector('main').innerHTML = OneUser
    }).catch(error => console.log(error))
}
getOneUser()