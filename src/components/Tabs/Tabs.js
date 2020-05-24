import React from "react";
import Table from "../Table/Table";

const Tabs = () => {
  return (
    <>
      <div className="container">
        <h2>Manage Campaigns</h2>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#upcomingCampaigns"
            >
              Upcoming Campaigns
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#liveCampaigns">
              Live Campaigns
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#pastCampaigns">
              Past Campaigns
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane container active" id="upcomingCampaigns">
            <Table />
          </div>
          <div className="tab-pane container fade" id="liveCampaigns">
            abc
          </div>
          <div className="tab-pane container fade" id="pastCampaigns">
            fgh
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
