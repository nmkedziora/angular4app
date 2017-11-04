import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-favorite',
  templateUrl: './input-favorite.component.html',
  styleUrls: ['./input-favorite.component.css']
})
export class InputFavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output() change = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('log from InputFavoriteComponent');
    this.isFavorite = ! this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }
}
