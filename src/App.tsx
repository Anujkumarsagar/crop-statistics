import "@mantine/core/styles.css";
import { MantineProvider, Table } from "@mantine/core";
import { theme } from "./theme";
import data from "../public/dataset/Manufac _ India Agro Dataset.json";
import "./inde.css"

interface YearlyCropStats {
  year: string;
  maxProductionCrop: string;
  minProductionCrop: string;
}

//get max and min production crop 
function getMaxMinProductionByYear(data: any[]): YearlyCropStats[] {
  const yearlyStats: { [year: string]: { max: { crop: string; production: number }; min: { crop: string; production: number } } } = {};

  data.forEach(item => {
    const year = item.Year.slice(-4);
    const crop = item["Crop Name"];
    const production = parseFloat(item["Crop Production (UOM:t(Tonnes))"] as string) || 0;

    if (!yearlyStats[year]) {
      yearlyStats[year] = { max: { crop, production }, min: { crop, production } };
    } else {
      if (production > yearlyStats[year].max.production) {
        yearlyStats[year].max = { crop, production };
      }
      if (production < yearlyStats[year].min.production && production > 0) {
        yearlyStats[year].min = { crop, production };
      }
    }
  });

  return Object.entries(yearlyStats).map(([year, stats]) => ({
    year,
    maxProductionCrop: stats.max.crop,
    minProductionCrop: stats.min.crop,
  }));
}

interface AvgCropStats {
  crop: string;
  averageYield: number;
  averageArea: number;
}

// get average yield and area for each crop  (only crops with yield and area > 0)  in each year 
function getAvgProductionCrop(data: any[]): AvgCropStats[] {
  const cropStats: { [crop: string]: { totalYield: number; totalArea: number; count: number } } = {};

  data.forEach(item => {
    const crop = item["Crop Name"];
    const yieldValue = parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] as string) || 0;
    const area = parseFloat(item["Area Under Cultivation (UOM:Ha(Hectares))"] as string) || 0;

    if (!cropStats[crop]) {
      cropStats[crop] = { totalYield: yieldValue, totalArea: area, count: yieldValue > 0 && area > 0 ? 1 : 0 };
    } else {
      if (yieldValue > 0) cropStats[crop].totalYield += yieldValue;
      if (area > 0) cropStats[crop].totalArea += area;
      if (yieldValue > 0 && area > 0) cropStats[crop].count += 1;
    }
  });

  return Object.entries(cropStats).map(([crop, stats]) => ({
    crop,
    averageYield: stats.totalYield / stats.count,
    averageArea: stats.totalArea / stats.count,
  }));
}

// Fetch max/min production data
const dataorig = getMaxMinProductionByYear(data);
console.log("dataorig", dataorig);

export default function App() {
  const rows = dataorig.map((element) => (
    <tr key={element.year}>
      <td>{element.year}</td>
      <td>{element.maxProductionCrop}</td>
      <td>{element.minProductionCrop}</td>
    </tr>
  ));

  // Fetch average yield/area data
  const dataavg = getAvgProductionCrop(data);

  console.log("dataavg", dataavg);
  const avg = dataavg.map((data, index) =>
  (<tr key={index}>
    <td>{data.crop}</td>
    <td>{data.averageYield}</td>
    <td>{data.averageArea}</td>
  </tr>
  ))


  return (
    <MantineProvider theme={theme}>
{/* table 1 */}
    <div className="table-container">
      <Table>
        <thead className="table-header">
          <tr>
            <th>Year</th>
            <th className="center">Crop with Maximum Production in that Year</th>
            <th>Crop with Minimum Production in that Year</th>
          </tr>
        </thead>
        <tbody className="table-body text-center">{rows}</tbody>
      </Table>
    </div>
  
{/* table 2 */}
    <div className="table-container">
      <Table>
        <thead className="table-header">
          <tr>
            <th>Crop</th>
            <th className="center">Average Yield of the Crop between 1950-2020</th>
            <th>Average Cultivation Area of the Crop between 1950-2020</th>
          </tr>
        </thead>
        <tbody className="table-body text-center">{avg}</tbody>
      </Table>
    </div>
  </MantineProvider>
  
  );
}
