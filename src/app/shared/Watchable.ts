export interface Watchable {
  poster_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  media_type: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title?: string;
  name?: string;
  vote_average: number;
  overview: string;
  release_date: string;
}
