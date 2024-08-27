export interface Movie{
id:number;
title:string;
description:string;
releaseDate:Date;
backDrop:string;
rating:number;
poster:string
}

export interface fullMovie extends Movie{
    genres:string[];
    duration:number;
    budget:number;
    originalTitle:string;
    productionCompanies:string[]
}

export interface TVKo extends Movie{


    originalTitle:string;
    vote_average: number;
    popularity:number;



}
