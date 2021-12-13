import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  constructor(private dataService: DataService, private notificationService : NotificationService) { }

	training: boolean=false;
  ngOnInit(): void {
  }

	onTrain() {
		this.training = true;
		this.dataService.trainModel()
		.subscribe(
				(resp) => {
					if (resp.success == "OK") {
						this.notificationService.showSuccess("Model trained successfully", "Success");
					} else {
						this.notificationService.showError(resp.message, "Application Error");
					}
					this.training = false;
				},
			(error) => {
				this.notificationService.showError(error.message, "Server Error");
				console.log(error);
				this.training = false;

			}
			
		);

	}
}
