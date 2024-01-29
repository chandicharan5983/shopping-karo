import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingContainerComponent } from './shopping-container/shopping-container/shopping-container.component';
import { HomeComponent } from './body/home/home.component';
import { FashionComponent } from './body/fashion/fashion.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./shopping-container/shopping-container.module').then(m => m.ShoppingContainerModule)
  // },
  {
    path: 'shopping',
    component: ShoppingContainerComponent,
    children: [
      {
        path: '',
        // component: HomeComponent,
        // loadChildren: () => import('../app/shopping-container/shopping-container.module').then(m => m.ShoppingContainerModule)
        loadChildren: () => import('../app/body/body.module').then(m => m.BodyModule)
      },
      // {
      //   path: 'fashion',
      //   component: FashionComponent,
      //   // loadChildren: () => import('../app/body/body.module').then(m => m.BodyModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }