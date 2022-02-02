const url = "http://localhost:3001/users/"
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
function getUser(){
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    }).catch(error => console.log(error))
}
getUser()

function addNew(){
    axios.post(url, newUser)   
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}
addNew();