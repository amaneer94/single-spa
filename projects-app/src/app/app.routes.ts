import { Routes } from '@angular/router';
import {
    LayoutComponent,
    ProjectAddComponent,
    ProjectHomeComponent,
} from './components/index';

export const appRoutes: Routes = [
    {
        path: 'projects', component: LayoutComponent,
        children: [
            { path: 'project/add', component: ProjectAddComponent },
            { path: 'project/edit/:id', component: ProjectAddComponent },
            { path: 'list', component: ProjectHomeComponent },
        ]
    }
];