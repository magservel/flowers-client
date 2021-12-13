import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { NotificationService } from './services/notification.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flowers-client';

	constructor(private dataService: DataService, private notifyService : NotificationService) {
	}

	ngOnInit() {
	}

}
