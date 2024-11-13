import { GameCategory } from "../../context/interface";
import {
  Bingo,
  Jackpot,
  Live,
  New,
  Others,
  Slots,
  Start,
  Table,
  // Add more exports as needed
} from "../assets/game-category";
import { FC, SVGProps } from "react";

const CATEGORY_LIST: {
  title: GameCategory;
  Icon: FC<SVGProps<SVGSVGElement>>;
}[] = [
  {
    title: "Start",
    Icon: Start,
  },
  {
    title: "New",
    Icon: New,
  },
  {
    title: "Slots",
    Icon: Slots,
  },
  {
    title: "Live",
    Icon: Live,
  },
  {
    title: "Jackpots",
    Icon: Jackpot,
  },
  {
    title: "Table Games",
    Icon: Table,
  },
  {
    title: "Bingo",
    Icon: Bingo,
  },
  {
    title: "Others",
    Icon: Others,
  },
];

export default CATEGORY_LIST;
