import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'travel',
    pathMatch: 'full'
  },
  {
    path: 'travel',
    children: [
      {
        path: '',
        loadChildren: () => import('./travel/explore/explore.module').then(m => m.ExplorePageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./travel/explore-details/explore-details.module').then(m => m.ExploreDetailsPageModule)
      },
    ]
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  }
]

  @NgModule({
      imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
      ],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
