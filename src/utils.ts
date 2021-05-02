import jstat from "jstat";

export interface Datum {
    x: number;
    y: number;
}

export const pNorm = (x: number, mean: number, sd: number): number => {
    return jstat.normal.pdf(x, mean, sd);
};

export const rNorm = (n: number, mean: number, sd: number): number[] => {
    return Array.from(Array(n)).map(() => jstat.normal.sample(mean, sd));
};

export const pdf = (n: number, mean: number, sd: number): Datum[] => {
    return rNorm(n, mean, sd).map((x) => ({ x, y: pNorm(x, mean, sd) }));
};