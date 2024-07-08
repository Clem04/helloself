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

export interface MemberFormProps {
  updateBoardData: (newBoardData: BoardData) => void;
}
export interface BoardItem {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
}

export interface BoardData {
  unclaimed: BoardItem[];
  firstContact: BoardItem[];
  preparingWorkOffer: BoardItem[];
  sentToTherapist: BoardItem[];
}

export interface BoardProps {
  boardData: BoardData;
  boardSections: typeof BOARD_SECTIONS;
}

export interface BoardColumnProps {
  header: string;
  items: BoardItem[];
}
