import React from "react";
import Row from "../Row/Row";
import "./Table.css";

const Table = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>DATE</th>
            <th>CAMPAIGN</th>
            <th>VIEW</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            const date = value.createdOn;
            const image = value.image_url;
            const campaignName = value.name;
            const campaignRegion = value.region;
            return (
              <Row
                date={date}
                image={image}
                campaignName={campaignName}
                campaignRegion={campaignRegion}
                index={key}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
