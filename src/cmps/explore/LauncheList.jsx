import React from 'react'

import { LaunchePreview } from './LaunchePreview.jsx'

export class LauncheList extends React.Component {
    state = {
        currPage: 1,
        filterdLaunches: null,
        itemsInPage: 5,
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
        let goToPage
        switch (ev.type) {
            case 'change':
                // console.log(ev.target.value)
                goToPage = ev.target.value
                
                break;
            case 'click':
                
                goToPage = (ev.target.name === 'next') ? currPage + 1 : currPage - 1
                break;
        
            default:
                break;
        }
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
                break;

            default:
                break;
        }
        this.setState((prevState) => ({ ...prevState, currPage: 1 }))
        this.loadLaunches(filterBy)
    }

    getPageOptions = () => {
        const { maxPage } = this.state
        let pageOptions = []
        for (let i = 1; i <= maxPage; i++) {
            pageOptions.push(i)
        }
        return pageOptions
    }

    render() {
        const { currPage, filterdLaunches, itemsInPage } = this.state
        const pageOptions = this.getPageOptions()
        let pageLaunches
        if (filterdLaunches) {
            pageLaunches = filterdLaunches.filter((launche, idx) => {
                if (idx < currPage * itemsInPage && idx >= currPage * itemsInPage - itemsInPage) return launche

            });
        }

        return (
            <React.Fragment>
                <div className="action-container">

                    <div className="filter-container">

                        <label htmlFor="filter">Filter by:</label>
                        <select name="filter" id="filter" onChange={(ev) => this.hendleFilterBy(ev)}>
                            <option value="all">All</option>
                            <option value="succeed">Succeed</option>
                            <option value="failed">Failed</option>
                        </select>
                    </div>
                    <div className="paginate-container">

                        <label htmlFor="paginate">Page: </label>
                        <select name="paginate" id="paginate" onChange={(ev) => this.hendlePaginate(ev)}>
                            {pageOptions &&
                                pageOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}

                        </select>
                    </div>
                </div>

                <section className="launche-list card-grid">
                    {!pageLaunches && <h1>Loading...</h1>}

                    {pageLaunches && pageLaunches.map(launche => <LaunchePreview key={launche.id} launche={launche} />)}
                </section>
                <div className="full">
                    <div className="paginate-bar main-container">
                        <button name='previous' onClick={(ev) => this.hendlePaginate(ev)}>↩ previous</button>
                        <p>Page: {currPage}</p>
                        <button name='next' onClick={(ev) => this.hendlePaginate(ev)}>next ↪</button>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}