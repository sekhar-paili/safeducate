import { Routes } from '@angular/router';
import { HomeComponent } from './Features/HOME/home/home.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path: 'about-us',
        loadChildren: () => import('./Features/ABOUT US/about-us.routes').then(r => r.ABOUT_US_ROUTES)
    },
    {
        path: 'solutions',
        loadChildren: () => import('./Features/SOLUTIONS/solutions.routes').then(r => r.SOLUTIONS_ROUTES)
    },
    {
        path: 'newsroom',
        loadComponent: () => import('./Features/NEWSROOM/newsroom/newsroom.component').then(c => c.NewsroomComponent)
    },
    {
        path: 'knowledge-centre',
        loadChildren: () => import('./Features/KNOWLEDGE-CENTER/knowledge-centre.routes').then(r => r.KNOWLEDGE_CENTER_ROUTES)
    },
    {
        path: 'contacts',
        loadChildren: () => import('./Features/CONTACT-US/contact-us.routes').then(r => r.CONTACT_US_ROUTES)
    },
    {
        path: 'student-corner',
        loadComponent: () => import('./Features/STUDENT-CORNER/student-corner/student-corner.component').then(c => c.StudentCornerComponent)
    }
]
