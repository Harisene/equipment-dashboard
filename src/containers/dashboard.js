import React, { Component } from "react";
import getEquipment from "../services/equipmentService";
import Loading from "../components/common/loading";
import Card from "../components/dashboard/card";
import ColumnChart from "../components/dashboard/columnChart";
import Pagination from "../components/dashboard/pagination";
import Navbar from "../components/common/navbar";
import { paginate } from "../utils/paginate";
import { sortByLabel, sortByY } from "../utils/sort";
import "../styles/dashboard/dashboard.css";

class Dashboard extends Component {
  state = {
    loading: true,
    dataPoints: [],
    pageSize: 10,
    currentPage: 1,
    orderBy: "type",
  };

  componentDidMount() {
    this.processEquipments();
  }
  //collect all data from datastore and structure them with only necessary attributes
  processEquipments = () => {
    const allEquipments = getEquipment();
    const dataPoints = [];
    allEquipments.forEach((equipment) => {
      const assertCategoryID = equipment.AssetCategoryID;
      const dataPointIndex = dataPoints.findIndex(
        (dp) => dp.label === assertCategoryID
      );

      if (dataPointIndex === -1) {
        const newDataPoint = this.createNewDataPoint(
          assertCategoryID,
          equipment
        );
        dataPoints.push(newDataPoint);
      } else {
        dataPoints[dataPointIndex].y++;
        if (equipment.OperationalStatus === "Operational")
          dataPoints[dataPointIndex].operational++;
        else dataPoints[dataPointIndex].nonOperational++;
      }
    });
    dataPoints.sort(sortByLabel);
    this.setState({ dataPoints, loading: false });
  };
  //returns new data point
  createNewDataPoint = (assertCategoryID, equipment) => {
    return {
      label: assertCategoryID,
      y: 1,
      operational: equipment.OperationalStatus === "Operational" ? 1 : 0,
      nonOperational: equipment.OperationalStatus === "Operational" ? 0 : 1,
    };
  };
  //handle pagination
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  //returns total operational and non-operational equipment count
  getOperationCount = () => {
    const { dataPoints } = this.state;

    let operationalCount = 0;
    let nonOperationalCount = 0;

    dataPoints.forEach((dp) => {
      operationalCount += dp.operational;
      nonOperationalCount += dp.nonOperational;
    });

    return { operationalCount, nonOperationalCount };
  };
  /*
'equipment type' is sorted ascending order. 'operations' is sorted descending order
you can change the order type from ../utils/sort.js
*/
  handleOrderBy = (type) => {
    const dataPoints = [...this.state.dataPoints];

    if (type === "type") {
      dataPoints.sort(sortByLabel);
    } else if (type === "operations") {
      dataPoints.sort(sortByY);
    }
    this.setState({ dataPoints, orderBy: type });
  };
  //change how many columns to show in the chart
  handlePageSizeChange = (e) => {
    this.setState({
      pageSize: parseInt(e.currentTarget.value),
      currentPage: 1,
    });
  };

  render() {
    if (this.state.loading) return <Loading />;

    const { dataPoints, pageSize, currentPage, orderBy } = this.state;
    const filtered = paginate(dataPoints, currentPage, pageSize);
    const { operationalCount, nonOperationalCount } = this.getOperationCount();

    return (
      <div>
        <Navbar />
        <h2 className="mt-3">Equipment Dashboard</h2>

        <div className="cardContainer">
          <Card title="Operational Equipments" count={operationalCount} />
          <Card
            title="Non-Operational Equipments"
            count={nonOperationalCount}
          />
        </div>
        <ColumnChart
          dataPoints={filtered}
          orderBy={orderBy}
          pageSize={pageSize}
          onOrderBy={this.handleOrderBy}
          onPageSizeChange={this.handlePageSizeChange}
        />
        <Pagination
          pageSize={pageSize}
          itemCount={dataPoints.length}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Dashboard;
