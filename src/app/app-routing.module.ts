import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [{
   path:"",component: HomeComponent
},{
  path:"menu",component: MenuComponent
},{
  path:"aboutus",component: AboutUsComponent
},{
  path:"details/:index",component: DetailsComponent
},{
  path:"order",component: OrderComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
