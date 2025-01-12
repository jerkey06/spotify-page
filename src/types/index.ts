export type TimeRange = '1M' | '5M' | '1Y';

export interface Artist {
  name: string;
  image: string;
  plays: string;
}

export interface Song {
  name: string;
  artist: string;
  image: string;
  plays: string;
}

export interface Album {
  name: string;
  artist: string;
  image: string;
  playedAt: string;
}