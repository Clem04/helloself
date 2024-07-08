import { v4 as uuidv4 } from 'uuid';

export function createNewItem<T extends object>(item: T): T & { id: string } {
  return {
    ...item,
    id: uuidv4(),
  };
}
