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

