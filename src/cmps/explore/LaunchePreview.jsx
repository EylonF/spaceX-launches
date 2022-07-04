import React from "react";
// import queryString from 'query-string'
import { withRouter } from "react-router-dom";
import { utilService } from "../../services/util.service.js";
// import { StayGallery } from './StayGallery.jsx'

function _LaunchePreview({ launche, history }) {
  const launcheDate = utilService.getDateFromTimeStemp(launche.date_unix);
  const launcheStatus = launche.upcoming
    ? "upcoming"
    : launche.success
    ? "succeed"
    : "failed";
  return (
    <article
      className=" launche-preview-card"
      onClick={() => {
        history.push(`/explore/${launche.id}`);
      }}
    >
      <img src={launche.links.patch.small} alt="" />
      <div className="launche-preview-info">
        <h2>{launche.name}</h2>

        <div className="date-status-cntainer">
          <p className="launche-date">{launcheDate}</p>
          <small className={`launche-status ${launcheStatus}`}>
            {launcheStatus}
          </small>
        </div>
      </div>
    </article>
  );
}

export const LaunchePreview = withRouter(_LaunchePreview);
