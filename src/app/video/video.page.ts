import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../services/service3';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
    public searchTerm: string ="";
    public itemss: any;
     
    constructor(private service3 :Service ,private route: Router) { }
  
    ngOnInit() {this.setFilteredItems();
    }
  
    setFilteredItems() {
      this.itemss = this.service3.filterItems(this.searchTerm);
    }
  
    onDirectPage(items){
  this.route.navigate(['/',items.link])
    }
  
  }
