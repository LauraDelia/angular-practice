import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './components/directory/directory.component';
import { OneComponent } from './components/one/one.component';

const routes: Routes = [
    { path: '', component: DirectoryComponent },
    { path: 'directory', component: DirectoryComponent },
    { path: 'user', component: OneComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);