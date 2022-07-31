import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './aap.component';
import { AuthGuard } from './guards/auth.guard.service';
import { JwtInterceptor } from './Helpers/jwtinterceptor.service';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './Helpers/error.interceptor';

const MapRoutes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    {
        path: 'Login',
        loadChildren: () => import('./login/login.module').then(
            module => module.LoginModule
        ),
    },
    {
        path: 'Query',
        loadChildren: () => import('./Query/query.module').then(
            module => module.QueryModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'Pizza',
        loadChildren: () => import('./pizza/pizza.module').then(
            module => module.PizzaModule),
        canDeactivate: [AuthGuard],
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(MapRoutes),
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, HttpClient]
})
export class AppRoutingModule { }
