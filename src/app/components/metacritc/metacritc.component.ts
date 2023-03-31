import { Component, Input, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-metacritc',
  templateUrl: './metacritc.component.html',
  styleUrls: ['./metacritc.component.scss']
})
export class MetacritcComponent implements OnInit {
  @Input() metacritc!: number
  constructor(public genericService : GenericService) { }

  ngOnInit(): void {
  }
}
