export interface Action {
  type: string;
  payload?: { 
    position?: iPosition;
  };
}