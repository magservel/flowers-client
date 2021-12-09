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

const appRoutes: Routes = [
	{ path: 'data', component: DataComponent },
	{ path: '', component: DataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		FontAwesomeModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes)
  ],
  providers: [
		DataService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
