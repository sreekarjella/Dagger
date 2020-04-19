import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { MostviewedComponent } from '../explore-container/components/mostviewed/mostviewed.component';
import { TabComponent } from '../components/tab/tab.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    
   
  ],
  declarations: [ MostviewedComponent]
})
export class TabsPageModule {}
