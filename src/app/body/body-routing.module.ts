import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionComponent } from './fashion/fashion.component';
import { HomeComponent } from './home/home.component';
import { WorkRoomComponent } from './work-room/work-room.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'fashion', component: FashionComponent },
    { path: 'workroom', component: WorkRoomComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BodyRoutingModule { }