import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../services/service2';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.page.html',
  styleUrls: ['./biodata.page.scss'],
})
export class BiodataPage implements OnInit {
  public searchTerm: string ="";
  public itemss: any;
   
  constructor(private service2 :Service ,private route: Router) { }

  ngOnInit() {this.setFilteredItems();
  }

  setFilteredItems() {
    this.itemss = this.service2.filterItems(this.searchTerm);
  }

  onDirectPage(items){
this.route.navigate(['/',items.link])
  }

}

