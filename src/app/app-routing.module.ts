import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shopping',
    loadChildren: () => import('./shopping-container/shopping-container.module').then(m => m.ShoppingContainerModule)
  }

  //   {
  //     path: 'branding',
  //     loadChildren: () => import('./branding/branding.module').then(m => m.BrandingModule),
  //     canActivate: [AuthGuard]
  //   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
