import { Component, OnInit, Input } from '@angular/core';
import { SongListItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() songs: SongListItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
