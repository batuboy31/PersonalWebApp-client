import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'blog', loadComponent:() => import('./blog/blog.component').then(mod => mod.BlogComponent)
    },
    { path: 'blog/detail/:id', component:BlogDetailComponent},
    { path: 'leetcode', loadComponent:() => import('./leetcode/leetcode.component').then(x => x.LeetcodeComponent)},
    { path: 'login', component: LoginComponent },
    { path: 'about',component : AboutComponent},
    { path: '**',component : ErrorComponent}
    

];
