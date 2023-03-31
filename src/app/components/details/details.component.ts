import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from 'src/app/model';
import { GenericService } from 'src/app/services/generic.service';
import { HttpService } from 'src/app/services/http.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class DetailsComponent implements OnInit {
  gameId!: string
  gameRating= 0
  game!: Game
  constructor(private http: HttpService, private activatedRoute: ActivatedRoute, public genericService : GenericService, config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=> {
      this.gameId = params["id"]
      this.getDatails(this.gameId)
    })
  }
  getDatails(id:string): void{
    this.http.getGameDetails(id).subscribe((gameResp : Game)=>{
      this.game = gameResp;
      this.gameRating = this.game.metacritic
    })
  }

}
