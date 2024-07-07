export const validateTitle = (value: string): string => {
  if (value.length < 3) {
    return 'Title must be at least 3 characters long';
  }
  return '';
};

export const validateName = (value: string): string => {
  if (!value) {
    return 'Name is required';
  }
  return '';
};

export const validateAge = (value: string): string => {
  if (!/^\d+$/.test(value)) {
    return 'Age must be a number';
  }
  return '';
};

export const validateEmail = (value: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return 'Invalid email address';
  }
  return '';
};

export const validatePhone = (value: string): string => {
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(value)) {
    return 'Phone number must be 10 digits';
  }
  return '';
};
