import React from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
} from "victory";
import { Datum } from "./utils";

interface Props {
  title: string;
  pdfData: Datum[];
  breaks: number[];
  range?: number[];
  className?: string;
}

const Viz = ({ className, breaks, pdfData, title, range }: Props) => {
  const maxY = Math.max(...pdfData.map((d) => d.y)) + 0.001;

  return (
    <div className={className}>
      <VictoryChart
        theme={VictoryTheme.material}
        padding={{ top: 20, bottom: 30 }}
      >
        <VictoryLabel x={0} y={10} text={title} />
        <VictoryAxis style={{grid: {stroke: 'none'}}} />
        <VictoryLine data={pdfData} style={{ data: { stroke: "#009688" } }} />
        {breaks.map((b) => (
          <VictoryLine
            key={b}
            data={verticalLineData(b, 0, maxY)}
            style={{ data: { stroke: "#f44336", opacity: 0.8 } }}
          />
        ))}
        {range?.map((r) => (
          <VictoryLine key={r} data={verticalLineData(r, 0, maxY)} />
        ))}
      </VictoryChart>
    </div>
  );
};

const verticalLineData = (x: number, minY: number, maxY: number): Datum[] => {
  return [
    { x, y: minY },
    { x, y: maxY },
  ];
};

export default Viz;
