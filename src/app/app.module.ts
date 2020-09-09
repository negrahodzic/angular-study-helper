import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {IonicModule} from '@ionic/angular';
import {CardComponent} from './card/card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CardGroupRowComponent } from './card-group-row/card-group-row.component';
import { CardGroupListComponent } from './card-group-list/card-group-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { RouterModule, Routes } from '@angular/router';
import { LearningComponent } from './learning/learning.component';
import { CardGroupComponent } from './card-group/card-group.component';
import {CardGroupServiceService} from './services/card-group-service.service';
import { CardEditComponent } from './card-edit/card-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'learning', component: LearningComponent},
  { path: 'learning/:cardGroup', component: CardGroupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CardGroupRowComponent,
    CardGroupListComponent,
    CardListComponent,
    LearningComponent,
    CardGroupComponent,
    CardEditComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [CardEditComponent],
  providers: [CardGroupServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
