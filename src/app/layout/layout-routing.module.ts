import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { LayoutComponent } from './layout.component';

const routes:Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
      {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)},
      {path:'products',loadChildren:()=>import('./products/products.module').then((m)=>m.ProductsModule)},
      {path:'clients',loadChildren:()=>import('./clients/clients.module').then((m)=>m.ClientsModule)},
    ]
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports:[RouterModule

  ]
})
export class LayoutRoutingModule { }
