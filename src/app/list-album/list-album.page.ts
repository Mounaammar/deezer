import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../service/data/Album';
import { DataSearchAlbum } from '../service/DataSearchAlbum';
import { DeezerService } from '../service/deezer.service';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.page.html',
  styleUrls: ['./list-album.page.scss'],
})
export class ListAlbumPage implements OnInit {

  name:string;
  listAlbum: Album[];
  constructor(public dezservice:DeezerService, public route: ActivatedRoute, public router: Router) { }

  async ngOnInit() {
    this.name=this.route.snapshot.paramMap.get("name");
    let res : DataSearchAlbum =await this.dezservice.getAlbums(this.name);
    this.listAlbum=res.data;
  }
  onClickAlbum(id : string){
    this.router.navigate(['/list-tracks/' + id]);

  }
}
