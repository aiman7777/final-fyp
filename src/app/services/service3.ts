import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
data: string;
    public itemss: any=[];

  constructor() {
    this.itemss = [
      {title: "Video Nabi Adam A.S",image:"assets/1arab.jpg",link: "vid-adam"},
      {title: "Video Nabi Idris A.S",image:"assets/2arab.jpg",link: "vid-idris"},
      {title: "Video Nabi Nuh A.S",image:"assets/3arab.jpg",link: "vid-nuh"},
      {title: "Video Nabi  Hud A.S",image:"assets/4arab.jpg",link: "vid-hud"},
      {title: "Video Nabi Shaleh A.S",image:"assets/5arab.jpg",link:"vid-shaleh"},
      {title: "Video Nabi Ibrahim A.S",image:"assets/6arab.jpg",link:"vid-ibrahim"},
      {title: "Video Nabi Luth A.S",image:"assets/7arab.jpg",link:"vid-luth"},
      {title: "Video Nabi Ismail A.S",image:"assets/8arab.jpg",link:"vid-ismail" },
      {title: "Video Nabi Ishaq A.S",image:"assets/9arab.jpg",link: "vid-ishaq"},
      {title: "Video Nabi Yaqub A.S",image:"assets/10arab.jpg",link: "vid-yaqub"},
      {title: "Video Nabi Yusuf A.S",image:"assets/11arab.jpg",link: "vid-yusuf"},
      {title: "Video Nabi Ayyub A.S",image:"assets/12arab.jpg",link: "vid-ayyub"},
      {title: "Video Nabi Syuib A.S",image:"assets/13arab.jpg",link: "vid-syuib"},
      {title: "Video Nabi Musa A.S",image:"assets/14arab.jpg",link: "vid-musa"},
      {title: "Video Nabi Harun A.S",image:"assets/15arab.jpg",link: "vid-harun"},
      {title: "Video Nabi Dzulkifli A.S",image:"assets/16arab.jpg",link: "vid-dzulkifli"},
      {title: "Video Nabi Daud A.S",image:"assets/17arab.jpg",link: "vid-daud"},
      {title: "Video Nabi Sulaiman A.S",image:"assets/18arab.jpg",link: "vid-sulaiman"},
      {title: "Video Nabi Ilyas A.S",image:"assets/19arab.jpg",link: "vid-ilyas"},
      {title: "Video Nabi Ilyasa A.S",image:"assets/20arab.jpg",link: "vid-ilyasa"},
      {title: "Video Nabi Yunus A.S",image:"assets/21arab.jpg",link: "vid-yunus"},
      {title: "Video Nabi Zakaria A.S",image:"assets/22arab.jpg",link: "vid-zakaria"},
      {title: "Video Nabi Yahya A.S",image:"assets/23arab.jpg",link: "vid-yahya"},
      {title: "Video Nabi Isa A.S",image:"assets/24arab.jpg",link: "vid-isa"},
      {title: "Video Nabi Muhammad S.A.W",image:"assets/25arab.jpg",link: "vid-muhammad"},
     
    ];
   }

filterItems(searchTerm) {
  return this.itemss.filter(item => {
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
 }
}
