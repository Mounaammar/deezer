
import { HttpClient } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { DataSearchAlbum } from './DataSearchAlbum';
import { DataSearchArtist } from './DataSearchArtist';
import { DataSearchTracks } from './DataSearchTracks';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
TAG : any;
  constructor(private http: HttpClient) { }
  getAuthors(artist:string):Promise<DataSearchArtist> {
    console.log(`${this.TAG} getAuthors ${artist}`);
    const url: string = 'https://api.deezer.com/search/artist?q=' + encodeURI(artist);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
    let json: DataSearchArtist = data as DataSearchArtist;
    resolve(json);
    }, err => {
    console.log(err);
    });
    });
   }
   getAlbums(artist:string):Promise<DataSearchAlbum> {
    console.log(`${this.TAG} getAlbums ${artist}`);
    const url: string = 'https://api.deezer.com/search/album?q=' + encodeURI(artist);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
    let json: DataSearchAlbum = data as DataSearchAlbum;
    resolve(json);
    }, err => {
    console.log(err);
    });
    });
   }
   getTracks(id : string):Promise<DataSearchTracks> {
    console.log(`${this.TAG} getAlbums ${id}`);
    const url: string = 'https://api.deezer.com/album/' + encodeURI(id);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
    this.http.get(url).subscribe( tracks => {
    let json: DataSearchTracks =tracks as DataSearchTracks;
    resolve(json);
    }, err => {
    console.log(err);
    });
    });
   }
   
}
