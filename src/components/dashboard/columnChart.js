import React from "react";
import PropTypes from "prop-types";
import CanvasJSReact from "../../assets/canvasjs.react";
import PageSize from "./pageSize";
import OrderBy from "./orderBy";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ColumnChart = (props) => {
  const { dataPoints, pageSize, orderBy, onOrderBy, onPageSizeChange } = props;

  //the array object should contain 'label' and 'y' attributes to display the chart.
  const result = [];
  dataPoints.forEach((element) => {
    result.push({ label: element.label, y: element.y });
  });

  const options = {
    title: {
      text: "",
    },
    animationEnabled: true,
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: result,
      },
    ],
  };
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between px-3">
        <h4>Equipment Chart</h4>
        <div className="d-flex">
          <PageSize pageSize={pageSize} onPageSizeChange={onPageSizeChange} />
          <OrderBy orderBy={orderBy} onOrderBy={onOrderBy} />
        </div>
      </div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      <h6>Equipment Type</h6>
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

ColumnChart.prototype = {
  dataPoints: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  orderBy: PropTypes.string.isRequired,
  onOrderBy: PropTypes.func,
  onPageSizeChange: PropTypes.func,
};

export default ColumnChart;
