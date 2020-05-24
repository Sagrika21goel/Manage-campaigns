import React, { useEffect, useState } from "react";
import axios from "axios";

const Campaign = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    const getcampaignlist = async () => {
      await axios({
        method: "get",
        url: "http://localhost:8000/"
      }).then(
        response => {
          console.log(response.data.data);
          setData(response.data.data);
        },
        error => {
          console.error(error);
        }
      );
    };
    getcampaignlist();
  }, []);
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src="../../../public/assets/images/logo.png"
            className="card-img"
            alt="campaign"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{}</h5>
            <p className="card-text">
              <small className="text-muted">US</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
