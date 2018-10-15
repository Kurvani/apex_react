import React, { Component } from "react";
import Chart from "react-apexcharts";

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#f9a7bb",
          foreColor: "#333"
        },
        xaxis: {
          categories: [
            "New York",
            "Los Angeles",
            "Chicago",
            "Houston",
            "Philadelphia",
            "Phoenix",
            "San Antonio",
            "San Diego",
            "Dallas",
            "San Jose"
          ]
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        fill: {
          colors: ["#CCCCFF"]
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: "Largest US Cities by Population",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px"
          }
        }
      },
      series: [
        {
          name: "Population",
          data: [
            8550405,
            3971883,
            2720546,
            2296224,
            1567442,
            1563025,
            1469845,
            1394928,
            1300092,
            1026908
          ]
        }
      ]
    };
  }

  onClick = () => {
    //... is a spread operator that'll take everything that is currently in the options and spread it across into this value
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            // This whacky value is essnetially saying to set horizontal to whatever it currently isn't
            horizontal: !this.state.options.plotOptions.bar.horizontal
          }
        }
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="450"
          width="100%"
        />
        <button onClick={this.onClick}>Change Orientation</button>
      </React.Fragment>
    );
  }
}

export default PopChart;
