import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Table/Table";
import "./Tabs.css";

const Tabs = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    const getcampaignlist = async () => {
      await axios({
        method: "get",
        url: "https://api-manage-campaigns.herokuapp.com/"
      }).then(
        response => {
          setData(response.data);
        },
        error => {
          console.error(error);
        }
      );
    };
    getcampaignlist();
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="campaign-title">Manage Campaigns</h2>
        <ul className="nav nav-tabs margin-bottom" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link green-tab active"
              data-toggle="tab"
              href="#upcomingCampaigns"
            >
              Upcoming Campaigns
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link green-tab"
              data-toggle="tab"
              href="#liveCampaigns"
            >
              Live Campaigns
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link green-tab"
              data-toggle="tab"
              href="#pastCampaigns"
            >
              Past Campaigns
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane container active" id="upcomingCampaigns">
            <Table data={data.upcoming} />
          </div>
          <div className="tab-pane container fade" id="liveCampaigns">
            <Table data={data.live} />
          </div>
          <div className="tab-pane container fade" id="pastCampaigns">
            <Table data={data.past} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
