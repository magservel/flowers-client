import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private dataService: DataService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }
	
	onAdd(form: NgForm) {
		if (form.value.data_use === "") {
			this.notificationService.showError("Please select data use", "Form Error");
		} else {
			console.log(form.value)
			this.dataService.addDataToModel(form.value)
			.subscribe(
					(resp) => {
						if (resp.success == "OK") {
							this.notificationService.showSuccess(resp.message, "Success");
						} else {
							this.notificationService.showError(resp.message, "Application Error");
						}
					},
				(error) => {
					this.notificationService.showError(error.message, "Server Error");
				}
			);
		}
	}
}
