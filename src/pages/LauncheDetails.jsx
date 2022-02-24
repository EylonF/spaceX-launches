import React from 'react'
import YouTube from 'react-youtube';

import { launcheService } from '../services/launche.service.js'
import { utilService } from '../services/util.service.js'



export class LauncheDetails extends React.Component {
    state = {
        launche: null,
        innerWidth: null,
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions)
        this.updateDimensions()
        const { launcheId } = this.props.match.params
        this.loadLaunche(launcheId)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions)
    }

    updateDimensions = () => {
        const { innerWidth } = window
        this.setState((prevState) => ({ ...prevState, innerWidth }))
    }

    loadLaunche = async (launcheId) => {
        const launche = await launcheService.getLauncheById(launcheId)
        console.log(launche)
        this.setState({ launche })
    }

    render() {
        const { launche, innerWidth } = this.state
        // playerWidth = (innerWidth<700)?'340':'640'
        const opts = {
            height: (innerWidth<800)?'220':'390',
            width: (innerWidth<800)?'340':'640',
            playerVars: {
                autoplay: 0,
            },
        }

        if (!launche) return <h1>Loading...</h1>
        const launcheDate = utilService.getDateFromTimeStemp(launche.date_unix)
        return (
            <section className="launche-details main-container page">
                <div className="details-container">

                    <div className="launche-info">
                        <div className="info-header-container">
                            <div>
                                <h1>{launche.name}</h1>
                                <h2>flight number: {launche.flight_number}</h2>
                                <h4>
                                    <span className="launche-date">{launcheDate}</span>
                                    <span className="dot">•</span>
                                    <span className="launche-status">{launche.success ? 'succeed' : 'failed'}</span>
                                </h4>
                            </div>
                        </div>
                        <p className="launche-status">{launche.details}</p>
                            <img src={launche.links.patch.large} alt="" />
                    </div>
                    <div className="youtube-container">
                        <YouTube videoId={launche.links.youtube_id} opts={opts} />

                    </div>
                </div>

            </section>
        )
    }
}

