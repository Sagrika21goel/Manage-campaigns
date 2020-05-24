import React from "react";
import Row from "../Row/Row";
const Table = () => {
  return (
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
        <Row />
      </tbody>
    </table>
  );
};

export default Table;
