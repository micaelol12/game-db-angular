import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse, Game } from 'src/app/model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sort!: string
  public games : Array<Game> = []
  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      if(params['game-search']){
        this.searchGames('metacrit', params['game-search']);
      }else {
        this.searchGames('metacrit')
      }
    })
  }
  openGameDetails(id:string): void{
    this.router.navigate(['details', id])
  }
  searchGames(sort: string, search?: string): void {
    this.httpService.getGameList(sort,search).subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results;
    })
  }
}
