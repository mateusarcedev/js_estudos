import { get } from 'axios';

async function fetchRepos() {
    try {
        const user = await get('https://api.github.com/users/mateusarcedev')
        const repos = await get(user.data.repos_url)
        console.log(repos.data)
    } catch (e) {
        console.log(e)
    }
}

fetchRepos()