import { Artist } from "./data/Artist";
import { Contributor } from "./data/Contributor";
import { Genres } from "./data/Genres";

import { Tracks } from "./data/Tracks";


export class DataSearchTracks {
    id: number;
    title: string;
    upc: string;
    link: string;
    share: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    genre_id: number;
    genres: Genres;
    label: string;
    nb_tracks: number;
    duration: number;
    fans: number;
    rating: number;
    release_date: string;
    record_type: string;
    available: boolean;
    tracklist: string;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    contributors: Contributor[];
    artist: Artist;
    type: string;
    tracks: Tracks;
}
