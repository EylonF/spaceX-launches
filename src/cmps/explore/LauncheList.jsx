import React from 'react'

import {LaunchePreview} from './LaunchePreview.jsx'

export class LauncheList extends React.Component {
    state = {
        currPage: 1,
        filterdLaunches:null
    }

    componentDidMount() {
        const filterdLaunches = this.props.launches.filter((launche, idx) => {
            if (idx < 20) return launche
            
        });
        this.setState({ filterdLaunches })
    }

    render() {
        const { filterdLaunches } = this.state
        return (
            <section className="launche-list card-grid">
                {!filterdLaunches && <h1>Loading...</h1>}

                {/* {filterdLaunches && filterdLaunches.map(launche => <h2 key={launche.id}>{launche.name}</h2>)} */}
                {filterdLaunches && filterdLaunches.map(launche => <LaunchePreview key={launche.id} launche={launche} />)}
            </section>
        )
    }
}