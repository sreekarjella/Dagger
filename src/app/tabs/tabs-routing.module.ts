import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { MostviewedComponent } from '../explore-container/components/mostviewed/mostviewed.component';
import { TabComponent } from '../components/tab/tab.component';


const routes: Routes = [
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
        path: '',
        redirectTo: '/HomeTab',
        pathMatch: 'full'
      }
    
  ,
  {
    path:'mostviewed',
    component: MostviewedComponent,
  
  },
  {
    path: '',
    redirectTo: '/HomeTab',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
