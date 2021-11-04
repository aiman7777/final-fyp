import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public items: any=[];

  constructor() {
    this.items = [
      {title: "Nabi Adam A.S",image:"assets/1arab.jpg",link: "adam"},
      {title: "Nabi Idris A.S",image:"assets/2arab.jpg",link: "idris"},
      {title: "Nabi Nuh A.S",image:"assets/3arab.jpg",link: "nuh"},
      {title: "Nabi Hud A.S",image:"assets/4arab.jpg",link: "hud"},
      {title: "Nabi Shaleh A.S",image:"assets/5arab.jpg",link:"shaleh"},
      {title: "Nabi Ibrahim A.S",image:"assets/6arab.jpg",link:"ibrahim"},
      {title: "Nabi Luth A.S",image:"assets/7arab.jpg",link:"luth"},
      {title: "Nabi Ismail A.S",image:"assets/8arab.jpg",link:"ismail" },
      {title: "Nabi Ishaq A.S",image:"assets/9arab.jpg",link: "ishaq"},
      {title: "Nabi Yaqub A.S",image:"assets/10arab.jpg",link: "yaqub"},
      {title: "Nabi Yusuf A.S",image:"assets/11arab.jpg",link: "yusuf"},
      {title: "Nabi Ayyub A.S",image:"assets/12arab.jpg",link: "ayyub"},
      {title: "Nabi Syuib A.S",image:"assets/13arab.jpg",link: "syuib"},
      {title: "Nabi Musa A.S",image:"assets/14arab.jpg",link: "musa"},
      {title: "Nabi Harun A.S",image:"assets/15arab.jpg",link: "harun"},
      {title: "Nabi Dzulkifli A.S",image:"assets/16arab.jpg",link: "dzulkifli"},
      {title: "Nabi Daud A.S",image:"assets/17arab.jpg",link: "daud"},
      {title: "Nabi Sulaiman A.S",image:"assets/18arab.jpg",link: "sulaiman"},
      {title: "Nabi Ilyas A.S",image:"assets/19arab.jpg",link: "ilyas"},
      {title: "Nabi Ilyasa A.S",image:"assets/20arab.jpg",link: "ilyasa"},
      {title: "Nabi Yunus A.S",image:"assets/21arab.jpg",link: "yunus"},
      {title: "Nabi Zakaria A.S",image:"assets/22arab.jpg",link: "zakaria"},
      {title: "Nabi Yahya A.S",image:"assets/23arab.jpg",link: "yahya"},
      {title: "Nabi Isa A.S",image:"assets/24arab.jpg",link: "isa"},
      {title: "Nabi Muhammad S.A.W",image:"assets/25arab.jpg",link: "muhammad"},
    ];
   }

filterItems(searchTerm) {
  return this.items.filter(item => {
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
 }
}
