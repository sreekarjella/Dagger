import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'HomeTab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home-tab/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'SearchTab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../search-tab/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'BookmarksTab',
        children: [
          {
            path: '',
            loadChildren: () => import('../bookmarks-tab/bookmarks-tab.module').then(m => m.BookmarksTabPageModule)
          }
        ]
      },
      {
        path: 'SettingsTab',
        children: [
          {
            path: '',
            loadChildren: () => import('../settings-tab/settings-tab.module').then(m => m.SettingsTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/HomeTab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/HomeTab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
