
export interface racerInterface {
  id: number, 
  name: string,
  speed: number
}

export interface racersStateInterface {
  state: { payload: any; type: string; };
  count: number, 
  racesList: racerInterface[],
  isLoading: boolean,
}
