import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { MusicListService } from '../../services/music-list.service';
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) {
   }

  ngOnInit() {
  }
}
