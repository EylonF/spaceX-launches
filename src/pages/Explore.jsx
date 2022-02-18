import React from 'react'
import { getLaunches } from '../services/axios.service.js'
import { LauncheList } from '../cmps/explore/LauncheList.jsx'



export class Explore extends React.Component {
    state = {
        launches: null
    }

    componentDidMount() {
        this.scrollUp();
        this.onGetLaunches();
    }
    scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    onGetLaunches = async () => {
        const launches = await getLaunches()
        this.setState({ launches })
    }

    render() {
        const { launches } = this.state

        // if (!launches) return <h1>Loading...</h1>
        return (
            <section className="explore-page main-container page">
                <h1>spaceX launches </h1>
                {!launches && <h1>Loading...</h1>}
                {launches && <LauncheList launches={launches}/>}

            </section>
        )
    }
}

