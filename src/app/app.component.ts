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
	lastUpdate = new Date();

	data!: any[];
	inferResult!: string;

	constructor(private dataService: DataService, private notifyService : NotificationService) {

	}

	ngOnInit() {
		this.onRefresh();
		this.inferResult = this.dataService.inferResult;
	}

	onTrain() {
		console.log('Traning model');
		this.dataService.trainModel();
	}

	onRefresh() {
		this.lastUpdate = new Date();
		this.dataService.getDataList();
		this.data = this.dataService.data;
	}

	onAdd(form: NgForm) {
		this.dataService.addDataToModel(form.value);
		this.onRefresh();
	}

	showToasterSuccess(){
		this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")
	}
	
	showToasterError(){
			this.notifyService.showError("Something is wrong", "tutsmake.com")
	}
	
	showToasterInfo(){
			this.notifyService.showInfo("This is info", "tutsmake.com")
	}
	
	showToasterWarning(){
			this.notifyService.showWarning("This is warning", "tutsmake.com")
	}


}
