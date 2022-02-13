import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
  ]
})
export class LayoutModule { }
