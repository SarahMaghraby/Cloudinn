import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersListService } from '../../services/characters-list.service';
import { map } from 'rxjs/operator/map'

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  list: any ;
  item: any;

  constructor(public charctersListService: CharactersListService, public router: Router) {
    this.charctersListService.getList().subscribe(res => {
      res;
      this.list = res.json();
    })
   }

   toggleActive(){
    this.item.deactivated=!this.item.deactivated;
   }

  ngOnInit() {
  }

}
