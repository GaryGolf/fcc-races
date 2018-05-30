export interface Action {
  type: string,
  payload?: {
    num?: number;
    city?: string;
  }
}