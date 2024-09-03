import { FC, Fragment } from "react";
import { Board } from "../models/Board";
import { CellComponent } from "./CellComponent";

// import styles from './BoardComponent.module.scss'

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <div className="board">
      {board.cells.map((row, i) => (
        <Fragment key={i}>
          {row.map((cell) => (
            <CellComponent key={cell.id} cell={cell}></CellComponent>
          ))}
        </Fragment>
      ))}
    </div>
  );
};
