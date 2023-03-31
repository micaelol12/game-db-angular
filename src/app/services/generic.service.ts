import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor() { }

  getColor(value: number): string{
    if(value> 75) return '#5ee432'
    else if(value> 75) return '#fffa50'
    else if(value> 75) return '#f6aa38'
    else return '#ef4655'
  }
}
