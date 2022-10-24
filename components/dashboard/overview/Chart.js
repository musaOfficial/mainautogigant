import { Line } from "react-chartjs-2";
import faker from 'faker';
import Chart from 'chart.js/auto';


const labels = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];


const options = {
  responsive: true,
    // Modify the axis by adding scales
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: true,
      },
      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: true,
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: "Leistungsbericht",
    },
  },
};


const data = {
  labels,
    datasets: [
    {
      label: "Gesamtaufrufe",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 700 })),
      borderColor: "#FBB900",
      fill: false,
    },
    {
      label: "Profil Aufrufe",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 700 })),
      borderColor: "#555555",
      fill: false,
      hidden: true,
    },
    {
      label: "Eingehende Anrufe",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 700 })),
      borderColor: "#FF00DD",
      fill: false,
      hidden: true,
    },
    {
      label: "Verkaufte Fahrzeuge",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 700 })),
      borderColor: "#00CBFF",
      fill: false,
    },
    {
      label: "Eingehene Anfragen",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 700 })),
      borderColor: "#0067B8",
      fill: false,
    },
    {
      label: "Verifizierte Verkäufe",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 700 })),
      borderColor: "#00CE00",
      fill: false,
      hidden: true,
    },
  ],
};


export default function DashboardChart() {
  return <Line options={options} data={data} />;
}
