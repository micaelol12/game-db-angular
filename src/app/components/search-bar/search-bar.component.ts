import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in')),
    ]),
  ],
})
export class SearchBarComponent implements OnInit {
  @HostBinding('class') className = '';
  @Output() readonly darkModeSwitched = new EventEmitter<boolean>();
  state: string = 'default';
  mode = false;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
  get stateName() {
    return this.state ? 'rotate' : 'default';
  }
  toggleChange(evt: any) {
    this.rotate()
    this.mode = !this.mode;
    this.darkModeSwitched.emit(this.mode);
  }

  rotate() {
      this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
}
