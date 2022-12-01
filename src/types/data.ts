export type DataAttributes = {
  name: string;
  value: number;
  unit: "m" | "kg";
}[];

export type DataEntry = {
  title: string;
  attributes: DataAttributes;
};
export type Data = DataEntry[];
