import React from "react";
import "./Row.css";
import price from "../../images/Dashboard/Row/Group 4/Price.png";
import report from "../../images/Dashboard/Row/Group 2/statistics-report.png";
import csv from "../../images/Dashboard/Row/Group 3/file.png";
import calendar from "../../images/Dashboard/Row/Group/calendar.png";
import Moment from "react-moment";

const Row = ({ date, image, campaignName, campaignRegion, index }) => {
  return (
    <>
      <tr id={index}>
        <td>
          <Moment format="MMMM Do, YYYY">{date}</Moment>
        </td>
        <td>
          <div className="card no-border">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={image} className="card-img" alt="campaign" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">{campaignName}</h6>
                  <p className="card-text">
                    <small className="text-muted">{campaignRegion}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img src={price} alt="price" className="action-images" />
          <a
            href="#pricing"
            data-toggle="modal"
            data-target={"#pricingModal" + index}
          >
            View Pricing
          </a>
        </td>
        <td>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3 margin-bottom-mobile">
                <img src={csv} alt="csv" className="action-images" />
                <a href="#csv">CSV</a>
              </div>
              <div className="col-md-4 margin-bottom-mobile">
                <img src={report} alt="report" className="action-images" />
                <a href="#report">Report</a>
              </div>
              <div className="col-md-5 margin-bottom-mobile padding-right0">
                <img src={calendar} alt="calendar" className="action-images" />
                <a href="#calendar">Schedule again</a>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <div className="modal" id={"pricingModal" + index}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="card no-border">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={image} className="card-img" alt="campaign" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h6 className="card-title">{campaignName}</h6>
                      <p className="card-text">
                        <small className="text-muted">{campaignRegion}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="margin-top20">Pricing</h4>
              <div className="row margin-bottom10">
                <div className="col-md-6">1 week- 1 Month</div>
                <div className="col-md-6 text-right price-bold">$100</div>
              </div>
              <div className="row margin-bottom10">
                <div className="col-md-6">6 Months</div>
                <div className="col-md-6 text-right price-bold">$500</div>
              </div>
              <div className="row margin-bottom10">
                <div className="col-md-6">1 Year</div>
                <div className="col-md-6 text-right price-bold">$900</div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn close-btn"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
