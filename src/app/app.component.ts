import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
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

	constructor(private dataService: DataService) {

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

	onInfer(form: NgForm) {
		this.dataService.inferDataFromModel(form.value)
		this.inferResult = this.dataService.inferResult
	}
}
