import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import {CardComponent} from './card/card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CardGroupComponent } from './card-group/card-group.component';
import { CardGroupListComponent } from './card-group-list/card-group-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { RouterModule, Routes } from '@angular/router';
import { LearningComponent } from './learning/learning.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'learning', component: LearningComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CardGroupComponent,
    CardGroupListComponent,
    CardListComponent,
    LearningComponent
  ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        FormsModule,
      RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
