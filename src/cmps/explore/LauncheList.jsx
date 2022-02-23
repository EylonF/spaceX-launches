import React from 'react'

import { LaunchePreview } from './LaunchePreview.jsx'

export class LauncheList extends React.Component {
    state = {
        currPage: 1,
        filterdLaunches: null,
        itemsInPage: 20,
        maxPage: null
    }

    componentDidMount() {
        this.loadLaunches()
    }


    loadLaunches = (filterBy = null) => {
        const { itemsInPage } = this.state
        let filterdLaunches
        if (filterBy) {
            filterdLaunches = this.props.launches.filter((launche) => {
                switch (filterBy) {
                    case 'succeed':
                        if (launche.success) return launche
                        break;

                    case 'failed':
                        if (!launche.success) return launche
                        break;
                    default:
                        break;
                }
            });

        } else {
            filterdLaunches = this.props.launches
        }

        const maxPage = Math.ceil(filterdLaunches.length / itemsInPage)
        this.setState((prevState) => ({ ...prevState, filterdLaunches, maxPage }))

    }

    hendlePaginate = (ev) => {
        const { currPage, maxPage } = this.state
        let goToPage = (ev.target.name === 'next') ? currPage + 1 : currPage - 1
        if (!goToPage || goToPage > maxPage) return

        this.setState((prevState) => ({ ...prevState, currPage: goToPage }))
    }

    hendleFilterBy = (ev) => {
        const { selectedIndex } = ev.target.options
        let filterBy
        switch (selectedIndex) {
            case 0:
                filterBy = null
                break;
            case 1:
                filterBy = 'succeed'
                break;
            case 2:
                filterBy = 'failed'
                this.setState((prevState) => ({ ...prevState, currPage: 1 }))
                break;

            default:
                break;
        }
        this.loadLaunches(filterBy)
    }

    render() {
        const { currPage, filterdLaunches,itemsInPage } = this.state
        let pageLaunches
        if (filterdLaunches) {
            pageLaunches = filterdLaunches.filter((launche, idx) => {
                if (idx < currPage * itemsInPage && idx >= currPage * itemsInPage - itemsInPage) return launche

            });
        }

        return (
            <React.Fragment>
                <div className="filterBy">

                    <label htmlFor="filterBy">Filter by:</label>
                    <select name="filterBy" id="filterBy" onChange={(ev) => this.hendleFilterBy(ev)}>
                        <option value="all">All</option>
                        <option value="succeed">Succeed</option>
                        <option value="failed">Failed</option>
                    </select>
                </div>
                <section className="launche-list card-grid">
                    {!pageLaunches && <h1>Loading...</h1>}

                    {pageLaunches && pageLaunches.map(launche => <LaunchePreview key={launche.id} launche={launche} />)}
                </section>
                <div className="full">
                    <div className="paginate main-container">
                        <button name='previous' onClick={(ev) => this.hendlePaginate(ev)}>↩ previous</button>
                        <p>Page: {currPage}</p>
                        <button name='next' onClick={(ev) => this.hendlePaginate(ev)}>next ↪</button>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}