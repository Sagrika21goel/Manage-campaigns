import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";

const Row = () => {
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
    <>
      {data.map((v, k) => {
        return (
          <tr>
            <td>{v.createdOn}</td>
            <td>
              <div className="card no-border">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={v.image_url}
                      className="card-img"
                      alt="campaign"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="card-title">{v.name}</h6>
                      <p className="card-text">
                        <small className="text-muted">{v.region}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <img src="" alt="price" />
              <a href="#pricing">View Pricing</a>
            </td>
            <td>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3">
                    <img src="" alt="csv" />
                    <a href="#csv">CSV</a>
                  </div>
                  <div className="col-md-3">
                    <img src="" alt="report" />
                    <a href="#report">Report</a>
                  </div>
                  <div className="col-md-6">
                    <img src="" alt="calendar" />
                    <a href="#pricing">Schedule again</a>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Row;
