//fetch api structure
// fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
//    return response.json()
// }).then((data)=>{
//     console.log(data)
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// fetch('https://dummy-json.mock.beeceptor.com/posts',{   // yaha Server ka url past liya kiya yani post krny k liye
//     method:'POST',
//     headers:{
//         'Content-Type' : 'application/json',
//     },
//     body:JSON.stringify({
//         name:'ali',
//         age:22,
//     })
// })


//fetch_api.html wali js file
const button= document.getElementById('loadbtn')
const userList=document.getElementById('users')

button.addEventListener('click',()=>{
    fetch('https://dummy-json.mock.beeceptor.com/continents').then((Response)=>{
        return Response.json()
    }).then((users)=>{
        userList.innerHTML=''
        users.forEach((user)=>{
            userList.innerHTML+=`<li>${user.name}<li>`
        })
    }).catch((err)=>{
        console.log('error',err)
    })
})