import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './aap.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
//import { BmsRoutingModule } from './bms-routing.module';
import { QueryComponent } from './Query/query.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuerydataserviceService } from './Query/querydataservice.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { QueryModule } from './Query/query.module';
import { PizzaComponent } from './pizza/pizza.component';
import { AuthenticationService } from './services/authentication.service';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { StoreModule } from "@ngrx/store";
import { userListReducer } from "./Store/user-list- reducer";

@NgModule({
  declarations: [

    AppComponent,
    // BmsComponent,
    LoginComponent,

    // LoandetailsComponent,
    // AcctdetailsComponent
  ],
  imports: [

    BrowserModule,
    RouterModule,
    //RouterModule.forRoot(MapRoutes),
    AppRoutingModule,
    // BmsRoutingModule,
    HttpClientModule,

    FormsModule, ReactiveFormsModule,
    QueryModule,
    //StoreModule.forRoot({ users: userListReducer })

  ],
  providers: [QuerydataserviceService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
