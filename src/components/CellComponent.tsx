import { FC } from "react";
import { Cell } from "../models/Cell";

// import styles from './CellComponent.module.scss'

interface CellProps {
  cell: Cell;
}

export const CellComponent: FC<CellProps> = ({ cell }) => {
  return <div className={["cell", cell.color].join(" ")}>{cell.figure}</div>;
};
