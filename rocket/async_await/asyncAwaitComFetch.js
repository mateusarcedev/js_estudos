// fetch('https://api.github.com/users/mateusarcedev')
// .then( response => response.json())
// .then( data => fetch(data.repos_url))
// .then( res => res.json())
// .then( d => console.log(d  + '👍'))
// .catch( err => console.log(err))

async function start() {
    try {
        const response = await fetch('https://api.github.com/users/mateusarcedev')
        const user = await response.json()
        const reposResponse = await fetch(user.repos_url)
        const repos = await reposResponse.json()
        console.log(repos + ' 👌')
    }
    catch (e) {
        console.log(e)
    }
}

// Outro modo de fazer

async function start2() {
    const url = 'https://api.github.com/users/mateusarcedev'
    const user = await fetch(url).then( r => r.json())
    const repos = await fetch(user.repos_url).then(r => r.json())
    console.log(repos)
}

start()
start2().catch(e => console.log(e))