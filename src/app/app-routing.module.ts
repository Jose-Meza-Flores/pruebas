import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    loadChildren:()=>import('./layout/layout.module').then((m)=>m.LayoutModule)
  },
  {path:'login',loadChildren:()=>import('./auth/login/login.module').then((m)=>m.LoginModule)},

]



@NgModule({
  imports: [RouterModule.forRoot(routes,{relativeLinkResolution:'legacy',useHash:true})
  ],
  exports:[RouterModule

  ]
})
export class AppRoutingModule { }
