import { BOARD_SECTIONS } from "./constants";

export interface ReusableInputProps {
  label: string;
  name: string;
  type: string;
  validate: (value: string) => string;
  errorMessage: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BoardData {
  unclaimed: object[];
  firstContact: object[];
  preparingWorkOffer: object[];
  sentToTherapist: object[];
}

export interface BoardProps {
  boardData: BoardData;
  boardSections: typeof BOARD_SECTIONS;
}

export interface BoardColumnProps {
  header: string;
  items: any[];
}