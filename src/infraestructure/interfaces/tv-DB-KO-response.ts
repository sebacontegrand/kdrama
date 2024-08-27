export interface KoTVResults {
    page:          number;
    results:       tvKO[];
    total_pages:   number;
    total_results: number;
}

export interface tvKO {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    origin_country:    OriginCountry[];
    original_language: OriginalLanguage;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    first_air_date:    Date;
    name:              string;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginCountry {
    Kr = 'KR',
    Us = 'US',
}

export enum OriginalLanguage {
    Ko = 'ko',
}
