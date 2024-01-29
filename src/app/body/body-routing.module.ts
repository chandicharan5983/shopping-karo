import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FashionComponent } from './fashion/fashion.component';
import { BodyContainerComponent } from './body-container/body-container.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'fashion', component: FashionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BodyRoutingModule { }