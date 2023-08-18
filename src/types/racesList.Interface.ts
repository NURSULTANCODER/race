
export interface racerInterface {
  id: number, 
  name: string,
  speed: number
}

export interface racersStateInterface {
  count: number, 
  racesList: racerInterface[],
  isLoading: boolean,
}
