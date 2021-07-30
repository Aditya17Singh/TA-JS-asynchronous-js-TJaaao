const userName = [
    'Aditya17Singh',
    'prank7',
    'getify',
    'piranha',
    'gaearon'
]

const usernamePromise = Promise.all(userName.map((user) => {
    console.log(user)
   return fetch(`https://api.github.com/users/${user}`).then((res) => res.json())
}))
.then(user => {
    user.forEach((elm) => console.log(elm.followers))
})