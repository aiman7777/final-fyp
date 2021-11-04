import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
data: string;
    public itemss: any=[];

  constructor() {
    this.itemss = [
      {title: "Doa Nabi Adam",image:"assets/1arab.jpg",link: "doa-adam"},
      {title: "Doa Nabi Nuh",image:"assets/2arab.jpg" ,link: "doa-nuh"},
      {title: "Doa Nabi Ibrahim",image:"assets/3arab.jpg",link: "doa-ibrahim"},
      {title: "Doa Nabi Hud",image:"assets/4arab.jpg",link: "doa-hud"},
      {title: "Doa Nabi Luth",image:"assets/5arab.jpg",link: "doa-luth"},
      {title: "Doa Nabi Yusuf",image:"assets/6arab.jpg",link: "doa-yusuf"},
      {title: "Doa Nabi Syuib",image:"assets/7arab.jpg",link: "doa-syuib"},
      {title: "Doa Nabi Musa",image:"assets/8arab.jpg",link: "doa-musa"},
      {title: "Doa Nabi Ayub",image:"assets/9arab.jpg",link: "doa-ayyub"},
      {title: "Doa Nabi Sulaiman",image:"assets/10arab.jpg",link: "doa-sulaiman"},
      {title: "Doa Nabi Yunus",image:"assets/11arab.jpg",link: "doa-yunus"},
      {title: "Doa Nabi Zakaria",image:"assets/12arab.jpg",link: "doa-zakaria"},
      {title: "Doa Nabi Yaqub",image:"assets/13arab.jpg",link: "doa-yaqub"},
     
    ];
   }

filterItems(searchTerm) {
  return this.itemss.filter(item => {
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
 }
}
