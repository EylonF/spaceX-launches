const axios = require('axios').default;

export async function getLaunches() {
    try {
        let entities = JSON.parse(localStorage.getItem('launchesDB'))
        if (!entities) {
            const response = await axios.get('https://api.spacexdata.com/v4/launches');
            console.log('from axios', response.data);
            localStorage.setItem('launchesDB', JSON.stringify(response.data))
            entities = response.data
        }
        return entities

    } catch (error) {
        console.error(error);
    }
}

export async function getLauncheById(launcheId) {
    const launches = await getLaunches()
    const launche = launches.find(launche => launche.id === launcheId)
    return launche
}
