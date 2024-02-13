import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DesignsComponent } from './designs/designs.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MyCollectionsComponent } from './my-collections/my-collections.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainComponent },
    { path: 'new-user', component: NewUserComponent},
    { path: 'my-collections', component: MyCollectionsComponent},
    { path: 'designs', component: DesignsComponent }
];