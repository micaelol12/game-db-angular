import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/model';

@Component({
  selector: 'app-store-buttons',
  templateUrl: './store-buttons.component.html',
  styleUrls: ['./store-buttons.component.scss']
})
export class StoreButtonsComponent{
  @Input() stores: Store[] = []
  constructor() { }
  externalUrl(site : string){
      window.open(`https://www.${site}`)
  }
}
