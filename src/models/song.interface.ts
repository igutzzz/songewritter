export interface SongData {
  id: number;
  created_at: Date;
  title: string;
  lyrics: string;
  chords: string[];
  structure?: object;
}
