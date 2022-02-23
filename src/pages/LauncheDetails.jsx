import React from 'react'
import { launcheService } from '../services/launche.service.js'
import { utilService } from '../services/util.service.js'



export class LauncheDetails extends React.Component {
    state = {
        launche: null,
    }

    componentDidMount() {
        const { launcheId } = this.props.match.params
        this.loadLaunche(launcheId)
    }

    loadLaunche = async (launcheId) => {
        const launche = await launcheService.getLauncheById(launcheId)
        console.log(launche)
        this.setState({ launche })
    }

    render() {
        const { launche } = this.state

        if (!launche) return <h1>Loading...</h1>
        const launcheDate = utilService.getDateFromTimeStemp(launche.date_unix)
        return (
            <section className="launche-details main-container page">
                <div className="info-container">

                <div className="launche-info">
                    <h1>{launche.name}</h1>
                    <h2>flight number: {launche.flight_number}</h2>
                    <h4>
                        <span className="launche-date">{launcheDate}</span>
                        <span className="dot">•</span>
                        <span className="launche-status">{launche.success ? 'succeed' : 'failed'}</span>
                    </h4>
                    <p className="launche-status">{launche.details}</p>
                </div>
                <img src={launche.links.patch.large} alt="" />
                </div>

            </section>
        )
    }
}

