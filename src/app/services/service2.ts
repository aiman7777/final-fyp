import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
data: string;
    public itemss: any=[];

  constructor() {
    this.itemss = [
      {title: "Biodata Nabi Adam",image:"assets/1arab.jpg",link: "bio-adam"},
      {title: "Biodata Nabi Idris",image:"assets/2arab.jpg",link: "bio-idris"},
      {title: "Biodata Nabi Nuh",image:"assets/3arab.jpg" ,link: "bio-nuh"},
      {title: "Biodata Nabi Hud ",image:"assets/4arab.jpg",link: "bio-hud"},
      {title: "Biodata Nabi Shaleh",image:"assets/5arab.jpg",link:"bio-shaleh"},
      {title: "Biodata Nabi Ibrahim",image:"assets/6arab.jpg",link: "bio-ibrahim"},
      {title: "Biodata Nabi Luth",image:"assets/7arab.jpg",link:"bio-luth"},
      {title: "Biodata Nabi Ismail ",image:"assets/8arab.jpg",link:"bio-ismail" },
      {title: "Biodata Nabi Ishaq ",image:"assets/9arab.jpg",link: "bio-ishaq"},
      {title: "Biodata Nabi Yaqub",image:"assets/10arab.jpg",link: "bio-yaqub"},
      {title: "Biodata Nabi Yusuf",image:"assets/11arab.jpg",link: "bio-yusuf"},
      {title: "Biodata Nabi Ayyub",image:"assets/12arab.jpg",link: "bio-ayyub"},
      {title: "Biodata Nabi Syuib",image:"assets/13arab.jpg",link: "bio-syuib"},
      {title: "Biodata Nabi Musa",image:"assets/14arab.jpg",link: "bio-musa"},
      {title: "Biodata Nabi Harun",image:"assets/15arab.jpg",link: "bio-harun"},
      {title: "Biodata Nabi Dzulkifli",image:"assets/16arab.jpg",link: "bio-dzulkifli"},
      {title: "Biodata Nabi Daud",image:"assets/17arab.jpg",link: "bio-daud"},
      {title: "Biodata Nabi Sulaiman",image:"assets/18arab.jpg",link: "bio-sulaiman"},
      {title: "Biodata Nabi Ilyas ",image:"assets/19arab.jpg",link: "bio-ilyas"},
      {title: "Biodata Nabi Ilyasa ",image:"assets/20arab.jpg",link: "bio-ilyasa"},
      {title: "Biodata Nabi Yunus ",image:"assets/21arab.jpg",link: "bio-yunus"},
      {title: "Biodata Nabi Zakaria ",image:"assets/22arab.jpg",link: "bio-zakaria"},
      {title: "Biodata Nabi Yahya ",image:"assets/23arab.jpg",link: "bio-yahya"},
      {title: "Biodata Nabi Isa ",image:"assets/24arab.jpg",link: "bio-isa"},
      {title: "Biodata Nabi Muhammad S.A.W",image:"assets/25arab.jpg",link: "bio-muhammad"},
    ];
   }

filterItems(searchTerm) {
  return this.itemss.filter(item => {
    return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
 }
}

