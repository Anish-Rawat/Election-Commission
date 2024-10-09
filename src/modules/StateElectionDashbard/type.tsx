export interface CardsState {
  partyId: string;
  party: string;
  won: number;
  color: string;
}

export interface PartyWiseTableState {
  columns: string[];
  rows: {
    partyId: string;
    party: string;
    won: number;
    leading: number;
    total: number;
  }[];
}
export interface ElectionDataState {
  state: string;
  lastUpdated: string;
  partyResults: {
    cards: CardsState[];
  };
  partyWiseTable: PartyWiseTableState;
}
