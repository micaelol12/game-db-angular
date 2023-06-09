import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {
  @Input() title!:string
  @Input() description!:any
  constructor() { }

  ngOnInit(): void {
  }

}
