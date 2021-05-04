import React from "react";
import "./App.css";
import Viz from "./Viz";
import {Datum, pdf} from "./utils";



const pdfData = pdf(10000, 50, 8)

const data: { title: string; pdfData: Datum[]; breaks: number[] }[] = [
  {
    title: "Equal (5) Intervals",
    pdfData,
    breaks: [35.6, 45.2, 54.8, 64.4],
  },
  {
    title: "Equal (9) Intervals",
    pdfData,
    breaks: [31.33, 36.67, 42, 47.33, 52.67, 58, 63.33, 68.67],
  },
  {
    title: "Equal (7) Intervals",
    pdfData,
    breaks: [32.86, 39.71, 46.57, 53.43, 60.29, 67.14],
  },
  {
    title: "Unequal (7) Intervals Monotonic (r = 1.2)",
    pdfData,
    breaks: [29.72, 34.18, 39.53, 45.95, 53.66, 62.90],
  },
  {
    title: "Unequal (7) Intervals Monotonic (r = 1.5)",
    pdfData,
    breaks: [27.49, 29.73, 33.09, 38.12, 45.68, 57.01],
  },
  {
    title: "Unequal (7) Intervals Symmetric (fat tail r = 1.2)",
    pdfData,
    breaks: [35.96, 42.40, 47.76, 52.24, 57.60, 64.04],
  },
  {
    title: "Unequal (7) Intervals Symmetric (thin tail r = 1.2)",
    pdfData,
    breaks: [30.47, 35.84, 42.27, 57.73, 64.16, 69.53],
  },
];

function App() {
  return (
    <div className="App">
      {data.map(d => (<Viz key={d.title} range={[26,74]} xDomain={[15, 85]} className={"Viz"} {...d} />))}
    </div>
  );
}

export default App;
