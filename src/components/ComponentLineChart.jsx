import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const linguisticaData = [60, 50, 70, 55, 65, 75, 80];
const logicaData = [70, 55, 90, 65, 80, 70, 85];
const espacialData = [30, 40, 50, 63, 80, 75, 65];
const musicalData = [90, 80, 70, 70, 50, 52, 45];
const interpersonalData = [50, 60, 55, 70, 84, 85, 90];

const xLabels = ["Rev 1", "Rev 2", "Rev 3", "Rev 4", "Rev 5", "Rev 6", "Rev 7"];

export default function ComponentLineChart() {
  return (
    <LineChart
      width={600}
      height={400}
      series={[
        { data: logicaData, label: "Lógico" },
        { data: linguisticaData, label: "Lingüística" },
        { data: espacialData, label: "Espacial" },
        { data: musicalData, label: "Musical" },
        { data: interpersonalData, label: "Interpersonal" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
