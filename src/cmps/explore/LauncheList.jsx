import React from "react";

import { LaunchePreview } from "./LaunchePreview.jsx";
import { InputSelect } from "../InputSelect.jsx";

export class LauncheList extends React.Component {
  state = {
    currPage: 1,
    filterdLaunches: null,
    itemsInPage: 20,
    maxPage: null,
  };

  componentDidMount() {
    this.loadLaunches();
  }

  loadLaunches = (filterBy = null) => {
    const { itemsInPage } = this.state;
    let filterdLaunches;
    if (filterBy) {
      filterdLaunches = this.props.launches.filter((launche) => {
        switch (filterBy) {
          case "all":
            return launche;
            break;
          case "succeed":
            if (launche.success) return launche;
            break;

          case "failed":
            if (!launche.success && !launche.upcoming) return launche;
            break;
          case "upcoming":
            if (launche.upcoming) return launche;
            break;
          default:
            break;
        }
      });
    } else {
      filterdLaunches = this.props.launches;
    }

    const maxPage = Math.ceil(filterdLaunches.length / itemsInPage);
    this.setState((prevState) => ({ ...prevState, filterdLaunches, maxPage }));
  };

  hendlePaginate = (ev) => {
    const { currPage, maxPage } = this.state;
    let goToPage;
    switch (ev.type) {
      case "change":
        // console.log(ev.target.value)
        goToPage = ev.target.value;

        break;
      case "click":
        goToPage = ev.target.name === "next" ? currPage + 1 : currPage - 1;
        break;

      default:
        break;
    }
    if (!goToPage || goToPage > maxPage) return;

    this.setState((prevState) => ({ ...prevState, currPage: goToPage }));
  };

  hendleFilterBy = (filterBy) => {
    this.setState((prevState) => ({ ...prevState, currPage: 1 }));
    this.loadLaunches(filterBy);
  };

  getPageOptions = () => {
    const { maxPage } = this.state;
    let pageOptions = [];
    for (let i = 1; i <= maxPage; i++) {
      pageOptions.push([i, i]);
    }
    return pageOptions;
  };

  render() {
    const { currPage, filterdLaunches, itemsInPage } = this.state;
    const pageOptions = this.getPageOptions();
    let pageLaunches;
    if (filterdLaunches) {
      pageLaunches = filterdLaunches.filter((launche, idx) => {
        if (
          idx < currPage * itemsInPage &&
          idx >= currPage * itemsInPage - itemsInPage
        )
          return launche;
      });
    }
    const filterByOptions = [
      ["all", "ALL"],
      ["succeed", "Succeed"],
      ["failed", "Failed"],
      ["upcoming", "Upcoming"],
    ];

    return (
      <React.Fragment>
        <div className="action-container">
          <InputSelect
            label="Filter By"
            handleChange={this.hendleFilterBy}
            options={filterByOptions}
          />
          <InputSelect
            label="Page"
            handleChange={this.hendlePaginate}
            options={pageOptions}
          />
        </div>

        <section className="launche-list card-grid">
          {!pageLaunches && <h1>Loading...</h1>}

          {pageLaunches &&
            pageLaunches.map((launche) => (
              <LaunchePreview key={launche.id} launche={launche} />
            ))}
        </section>
        <div className="full">
          <div className="paginate-bar main-container">
            <button name="previous" onClick={(ev) => this.hendlePaginate(ev)}>
              ↩ previous
            </button>
            <p>Page: {currPage}</p>
            <button name="next" onClick={(ev) => this.hendlePaginate(ev)}>
              next ↪
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
