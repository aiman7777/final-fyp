import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'video',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inside',
    loadChildren: () => import('./inside/inside.module').then( m => m.InsidePageModule)
  },
  {
    path: 'log2',
    loadChildren: () => import('./log2/log2.module').then( m => m.Log2PageModule)
  },
  {
    path: 'adam',
    loadChildren: () => import('./adam/adam.module').then( m => m.AdamPageModule)
  },
  {
    path: 'idris',
    loadChildren: () => import('./idris/idris.module').then( m => m.IdrisPageModule)
  },
  {
    path: 'nuh',
    loadChildren: () => import('./nuh/nuh.module').then( m => m.NuhPageModule)
  },
  {
    path: 'hud',
    loadChildren: () => import('./hud/hud.module').then( m => m.HudPageModule)
  },
  {
    path: 'shaleh',
    loadChildren: () => import('./shaleh/shaleh.module').then( m => m.ShalehPageModule)
  },
  {
    path: 'ibrahim',
    loadChildren: () => import('./ibrahim/ibrahim.module').then( m => m.IbrahimPageModule)
  },
  {
    path: 'ismail',
    loadChildren: () => import('./ismail/ismail.module').then( m => m.IsmailPageModule)
  },
  {
    path: 'luth',
    loadChildren: () => import('./luth/luth.module').then( m => m.LuthPageModule)
  },
  {
    path: 'ishaq',
    loadChildren: () => import('./ishaq/ishaq.module').then( m => m.IshaqPageModule)
  },
  {
    path: 'yaqub',
    loadChildren: () => import('./yaqub/yaqub.module').then( m => m.YaqubPageModule)
  },
  {
    path: 'yusuf',
    loadChildren: () => import('./yusuf/yusuf.module').then( m => m.YusufPageModule)
  },
  {
    path: 'ayyub',
    loadChildren: () => import('./ayyub/ayyub.module').then( m => m.AyyubPageModule)
  },
  {
    path: 'syuib',
    loadChildren: () => import('./syuib/syuib.module').then( m => m.SyuibPageModule)
  },
  {
    path: 'musa',
    loadChildren: () => import('./musa/musa.module').then( m => m.MusaPageModule)
  },
  {
    path: 'harun',
    loadChildren: () => import('./harun/harun.module').then( m => m.HarunPageModule)
  },
  {
    path: 'dzulkifli',
    loadChildren: () => import('./dzulkifli/dzulkifli.module').then( m => m.DzulkifliPageModule)
  },
  {
    path: 'daud',
    loadChildren: () => import('./daud/daud.module').then( m => m.DaudPageModule)
  },
  {
    path: 'sulaiman',
    loadChildren: () => import('./sulaiman/sulaiman.module').then( m => m.SulaimanPageModule)
  },
  {
    path: 'ilyas',
    loadChildren: () => import('./ilyas/ilyas.module').then( m => m.IlyasPageModule)
  },
  {
    path: 'ilyasa',
    loadChildren: () => import('./ilyasa/ilyasa.module').then( m => m.IlyasaPageModule)
  },
  {
    path: 'yunus',
    loadChildren: () => import('./yunus/yunus.module').then( m => m.YunusPageModule)
  },
  {
    path: 'zakaria',
    loadChildren: () => import('./zakaria/zakaria.module').then( m => m.ZakariaPageModule)
  },
  {
    path: 'yahya',
    loadChildren: () => import('./yahya/yahya.module').then( m => m.YahyaPageModule)
  },
  {
    path: 'isa',
    loadChildren: () => import('./isa/isa.module').then( m => m.IsaPageModule)
  },
  {
    path: 'muhammad',
    loadChildren: () => import('./muhammad/muhammad.module').then( m => m.MuhammadPageModule)
  },
  {
    path: 'adam2',
    loadChildren: () => import('./adam2/adam2.module').then( m => m.Adam2PageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'doa',
    loadChildren: () => import('./doa/doa.module').then( m => m.DoaPageModule)
  },
  {
    path: 'biodata',
    loadChildren: () => import('./biodata/biodata.module').then( m => m.BiodataPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'doa-adam',
    loadChildren: () => import('./doa-adam/doa-adam.module').then( m => m.DoaAdamPageModule)
  },
  {
    path: 'doa-nuh',
    loadChildren: () => import('./doa-nuh/doa-nuh.module').then( m => m.DoaNuhPageModule)
  },
  {
    path: 'doa-ibrahim',
    loadChildren: () => import('./doa-ibrahim/doa-ibrahim.module').then( m => m.DoaIbrahimPageModule)
  },
  {
    path: 'doa-hud',
    loadChildren: () => import('./doa-hud/doa-hud.module').then( m => m.DoaHudPageModule)
  },
  {
    path: 'doa-luth',
    loadChildren: () => import('./doa-luth/doa-luth.module').then( m => m.DoaLuthPageModule)
  },
  {
    path: 'doa-yusuf',
    loadChildren: () => import('./doa-yusuf/doa-yusuf.module').then( m => m.DoaYusufPageModule)
  },
  {
    path: 'doa-syuib',
    loadChildren: () => import('./doa-syuib/doa-syuib.module').then( m => m.DoaSyuibPageModule)
  },
  {
    path: 'doa-musa',
    loadChildren: () => import('./doa-musa/doa-musa.module').then( m => m.DoaMusaPageModule)
  },
  {
    path: 'doa-ayyub',
    loadChildren: () => import('./doa-ayyub/doa-ayyub.module').then( m => m.DoaAyyubPageModule)
  },
  {
    path: 'doa-sulaiman',
    loadChildren: () => import('./doa-sulaiman/doa-sulaiman.module').then( m => m.DoaSulaimanPageModule)
  },
  {
    path: 'doa-yunus',
    loadChildren: () => import('./doa-yunus/doa-yunus.module').then( m => m.DoaYunusPageModule)
  },
  {
    path: 'doa-zakaria',
    loadChildren: () => import('./doa-zakaria/doa-zakaria.module').then( m => m.DoaZakariaPageModule)
  },
  {
    path: 'doa-yaqub',
    loadChildren: () => import('./doa-yaqub/doa-yaqub.module').then( m => m.DoaYaqubPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'bio-adam',
    loadChildren: () => import('./bio-adam/bio-adam.module').then( m => m.BioAdamPageModule)
  },
  {
    path: 'bio-idris',
    loadChildren: () => import('./bio-idris/bio-idris.module').then( m => m.BioIdrisPageModule)
  },
  {
    path: 'bio-nuh',
    loadChildren: () => import('./bio-nuh/bio-nuh.module').then( m => m.BioNuhPageModule)
  },
  {
    path: 'bio-hud',
    loadChildren: () => import('./bio-hud/bio-hud.module').then( m => m.BioHudPageModule)
  },
  {
    path: 'bio-shaleh',
    loadChildren: () => import('./bio-shaleh/bio-shaleh.module').then( m => m.BioShalehPageModule)
  },
  {
    path: 'bio-ibrahim',
    loadChildren: () => import('./bio-ibrahim/bio-ibrahim.module').then( m => m.BioIbrahimPageModule)
  },
  {
    path: 'bio-luth',
    loadChildren: () => import('./bio-luth/bio-luth.module').then( m => m.BioLuthPageModule)
  },
  {
    path: 'bio-ismail',
    loadChildren: () => import('./bio-ismail/bio-ismail.module').then( m => m.BioIsmailPageModule)
  },
  {
    path: 'bio-ishaq',
    loadChildren: () => import('./bio-ishaq/bio-ishaq.module').then( m => m.BioIshaqPageModule)
  },
  {
    path: 'bio-yaqub',
    loadChildren: () => import('./bio-yaqub/bio-yaqub.module').then( m => m.BioYaqubPageModule)
  },
  {
    path: 'bio-yusuf',
    loadChildren: () => import('./bio-yusuf/bio-yusuf.module').then( m => m.BioYusufPageModule)
  },
  {
    path: 'bio-ayyub',
    loadChildren: () => import('./bio-ayyub/bio-ayyub.module').then( m => m.BioAyyubPageModule)
  },
  {
    path: 'bio-syuib',
    loadChildren: () => import('./bio-syuib/bio-syuib.module').then( m => m.BioSyuibPageModule)
  },
  {
    path: 'bio-musa',
    loadChildren: () => import('./bio-musa/bio-musa.module').then( m => m.BioMusaPageModule)
  },
  {
    path: 'bio-harun',
    loadChildren: () => import('./bio-harun/bio-harun.module').then( m => m.BioHarunPageModule)
  },
  {
    path: 'bio-dzulkifli',
    loadChildren: () => import('./bio-dzulkifli/bio-dzulkifli.module').then( m => m.BioDzulkifliPageModule)
  },
  {
    path: 'bio-daud',
    loadChildren: () => import('./bio-daud/bio-daud.module').then( m => m.BioDaudPageModule)
  },
  {
    path: 'bio-sulaiman',
    loadChildren: () => import('./bio-sulaiman/bio-sulaiman.module').then( m => m.BioSulaimanPageModule)
  },
  {
    path: 'bio-ilyas',
    loadChildren: () => import('./bio-ilyas/bio-ilyas.module').then( m => m.BioIlyasPageModule)
  },
  {
    path: 'bio-ilyasa',
    loadChildren: () => import('./bio-ilyasa/bio-ilyasa.module').then( m => m.BioIlyasaPageModule)
  },
  {
    path: 'bio-yunus',
    loadChildren: () => import('./bio-yunus/bio-yunus.module').then( m => m.BioYunusPageModule)
  },
  {
    path: 'bio-zakaria',
    loadChildren: () => import('./bio-zakaria/bio-zakaria.module').then( m => m.BioZakariaPageModule)
  },
  {
    path: 'bio-yahya',
    loadChildren: () => import('./bio-yahya/bio-yahya.module').then( m => m.BioYahyaPageModule)
  },
  {
    path: 'bio-isa',
    loadChildren: () => import('./bio-isa/bio-isa.module').then( m => m.BioIsaPageModule)
  },
  {
    path: 'bio-muhammad',
    loadChildren: () => import('./bio-muhammad/bio-muhammad.module').then( m => m.BioMuhammadPageModule)
  },
  {
    path: 'vid-adam',
    loadChildren: () => import('./vid-adam/vid-adam.module').then( m => m.VidAdamPageModule)
  },
  {
    path: 'vid-idris',
    loadChildren: () => import('./vid-idris/vid-idris.module').then( m => m.VidIdrisPageModule)
  },
  {
    path: 'vid-nuh',
    loadChildren: () => import('./vid-nuh/vid-nuh.module').then( m => m.VidNuhPageModule)
  },
  {
    path: 'vid-hud',
    loadChildren: () => import('./vid-hud/vid-hud.module').then( m => m.VidHudPageModule)
  },
  {
    path: 'vid-shaleh',
    loadChildren: () => import('./vid-shaleh/vid-shaleh.module').then( m => m.VidShalehPageModule)
  },
  {
    path: 'vid-ibrahim',
    loadChildren: () => import('./vid-ibrahim/vid-ibrahim.module').then( m => m.VidIbrahimPageModule)
  },
  {
    path: 'vid-luth',
    loadChildren: () => import('./vid-luth/vid-luth.module').then( m => m.VidLuthPageModule)
  },
  {
    path: 'vid-ismail',
    loadChildren: () => import('./vid-ismail/vid-ismail.module').then( m => m.VidIsmailPageModule)
  },
  {
    path: 'vid-ishaq',
    loadChildren: () => import('./vid-ishaq/vid-ishaq.module').then( m => m.VidIshaqPageModule)
  },
  {
    path: 'vid-yaqub',
    loadChildren: () => import('./vid-yaqub/vid-yaqub.module').then( m => m.VidYaqubPageModule)
  },
  {
    path: 'vid-yusuf',
    loadChildren: () => import('./vid-yusuf/vid-yusuf.module').then( m => m.VidYusufPageModule)
  },
  {
    path: 'vid-ayyub',
    loadChildren: () => import('./vid-ayyub/vid-ayyub.module').then( m => m.VidAyyubPageModule)
  },
  {
    path: 'vid-syuib',
    loadChildren: () => import('./vid-syuib/vid-syuib.module').then( m => m.VidSyuibPageModule)
  },
  {
    path: 'vid-musa',
    loadChildren: () => import('./vid-musa/vid-musa.module').then( m => m.VidMusaPageModule)
  },
  {
    path: 'vid-harun',
    loadChildren: () => import('./vid-harun/vid-harun.module').then( m => m.VidHarunPageModule)
  },
  {
    path: 'vid-dzulkifli',
    loadChildren: () => import('./vid-dzulkifli/vid-dzulkifli.module').then( m => m.VidDzulkifliPageModule)
  },
  {
    path: 'vid-daud',
    loadChildren: () => import('./vid-daud/vid-daud.module').then( m => m.VidDaudPageModule)
  },
  {
    path: 'vid-sulaiman',
    loadChildren: () => import('./vid-sulaiman/vid-sulaiman.module').then( m => m.VidSulaimanPageModule)
  },
  {
    path: 'vid-ilyas',
    loadChildren: () => import('./vid-ilyas/vid-ilyas.module').then( m => m.VidIlyasPageModule)
  },
  {
    path: 'vid-ilyasa',
    loadChildren: () => import('./vid-ilyasa/vid-ilyasa.module').then( m => m.VidIlyasaPageModule)
  },
  {
    path: 'vid-yunus',
    loadChildren: () => import('./vid-yunus/vid-yunus.module').then( m => m.VidYunusPageModule)
  },
  {
    path: 'vid-zakaria',
    loadChildren: () => import('./vid-zakaria/vid-zakaria.module').then( m => m.VidZakariaPageModule)
  },
  {
    path: 'vid-yahya',
    loadChildren: () => import('./vid-yahya/vid-yahya.module').then( m => m.VidYahyaPageModule)
  },
  {
    path: 'vid-isa',
    loadChildren: () => import('./vid-isa/vid-isa.module').then( m => m.VidIsaPageModule)
  },
  {
    path: 'vid-muhammad',
    loadChildren: () => import('./vid-muhammad/vid-muhammad.module').then( m => m.VidMuhammadPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
