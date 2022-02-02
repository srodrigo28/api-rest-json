const url = "http://localhost:3001/users"
/*** 
axios({
    method: 'get',
    url: url,
  })
    .then(function (response) {
      console.log(response.data)
});
*/
/*** */
const newUser = {
    name: "User test",
    email: "user@gmail.com",
    city: "Trindade"
}
const UserUpdated = {
    name: "User master",
    email: "user20@gmail.com",
    city: "New York"
}
function getUser(){
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    }).catch(error => console.log(error))
}
//getUser()

function getOneUser(){
    axios.get(`${url}/4`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    }).catch(error => console.log(error))
}
getOneUser()

function addNew(){
    axios.post(url, newUser)   
    .then(response => {
        //alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//addNew();

function UpdateUser(){
    axios.put(`${url}/5`, UserUpdated)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}
//UpdateUser()

function deleteUser(){
    axios.delete(`${url}/7`)
    .then( response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}
//deleteUser()