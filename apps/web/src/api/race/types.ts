import { Horse } from "../horse/types";

export type Players = {
  _id: string;
  created_at: string;
  horse: Horse;
  lane_number: number;
};

export type Race = {
  _id: string;
  name: string;
  created_at: string;
  started_at: string;
  players: Players[];
  is_cancelled: boolean;
};
