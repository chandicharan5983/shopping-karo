import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../body/home/home.component';
import { FashionComponent } from '../body/fashion/fashion.component';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';

const routes: Routes = [
    {
        path: '',
        component: ShoppingContainerComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fashion', component: FashionComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingContainerRoutingModule { }