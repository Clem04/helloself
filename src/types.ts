export interface ReusableInputProps {
  label: string;
  name: string;
  type: string;
  validate: (value: string) => string;
  errorMessage: string;
}
