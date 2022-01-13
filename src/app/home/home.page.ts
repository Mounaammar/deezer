import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from '../service/data/Artist';
import { DataSearchArtist } from '../service/DataSearchArtist';
import { DeezerService } from '../service/deezer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

listArtist : Artist[];
  constructor(public dezeerapiService:DeezerService,public router : Router) {}
  async onSearchArtist(event: any){
     let val = event.target.value;
     let res:DataSearchArtist =await this.dezeerapiService.getAuthors(val);
    this.listArtist=res.data;

  }
  onClickArtist(name : string){
    this.router.navigate(['/list-album/' + name]);

  }
  
}
