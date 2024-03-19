import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingContainerComponent } from './shopping-container/shopping-container/shopping-container.component';
import { HomeComponent } from './body/home/home.component';
import { FashionComponent } from './body/fashion/fashion.component';
import { SingUpComponent } from './login-page/sing-up/sing-up.component';
import { SingInComponent } from './login-page/sing-in/sing-in.component';

const routes: Routes = [
  {
    path: 'log-in',
    component: SingInComponent
  },
  {
    path: 'sign-up',
    component: SingUpComponent
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./shopping-container/shopping-container.module').then(m => m.ShoppingContainerModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./shopping-container/shopping-container.module').then(m => m.ShoppingContainerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }