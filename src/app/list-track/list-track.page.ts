import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../service/data/Track';
import { DataSearchTracks } from '../service/DataSearchTracks';
import { DeezerService } from '../service/deezer.service';

@Component({
  selector: 'app-list-track',
  templateUrl: './list-track.page.html',
  styleUrls: ['./list-track.page.scss'],
})
export class ListTrackPage implements OnInit {
  isShow = false;
  id:string;
  listTracks: Track[];
  name:string;
  image : string;
  count : number ;
  constructor(public dezservice:DeezerService, public route: ActivatedRoute ,public render : Renderer2) {
   }

  async ngOnInit() {
   this.id=this.route.snapshot.paramMap.get("id");
    let res : DataSearchTracks =await this.dezservice.getTracks(this.id);
    this.listTracks=res.tracks.data;
    this.name=res.title;
    this.image=res.cover;
   this.count=this.listTracks.length;
  
  }


  public onShow(control) {
    this.isShow = !this.isShow;
    if (this.isShow==true)
      this.render.setStyle(control, 'display', 'block'); 

    else

       this.render.setStyle(control, 'display', 'none');
  }
  public onHide(controlToHide) {
    this.render.setStyle(controlToHide, 'display', 'none');
 
  }

}
