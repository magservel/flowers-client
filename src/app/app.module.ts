import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataService } from './services/data.service';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { TrainComponent } from './train/train.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { InferComponent } from './infer/infer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'data', component: DataComponent },
	{ path: 'list', component: ListComponent},
	{ path: 'train', component: TrainComponent },
	{ path: 'add', component: AddComponent },
	{ path: 'infer', component: InferComponent },
	{ path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataComponent,
    ListComponent,
    TrainComponent,
    HomeComponent,
    AddComponent,
    InferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		FontAwesomeModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		RouterModule.forRoot(appRoutes)
  ],
  providers: [
		DataService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
