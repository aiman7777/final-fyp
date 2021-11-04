import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Service } from "../services/service";

@Component({
  selector: 'app-doa',
  templateUrl: './doa.page.html',
  styleUrls: ['./doa.page.scss'],
})
export class DoaPage implements OnInit {
  public searchTerm: string ="";
  public itemss: any;
   
  constructor(private service : Service,private route: Router
   
  ) { }

  ngOnInit() {this.setFilteredItems();
  }

  setFilteredItems() {
    this.itemss = this.service.filterItems(this.searchTerm);
  }

  onDirectPage(items){
this.route.navigate(['/',items.link])
  }

}

