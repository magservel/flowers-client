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

	training: boolean = false;
	lastTraining!: Date;
	loss: string = " ";
	accuracy: string = " ";


  ngOnInit(): void {
  }

	onTrain() {
		this.training = true;
		this.dataService.trainModel()
		.subscribe(
				(resp) => {
					if (resp.success == "OK") {
						this.notificationService.showSuccess("Model trained successfully", "Success");
						this.lastTraining = new Date();
						var data = JSON.parse(resp.data);
						this.loss = data.loss;
						this.accuracy = data.accuracy;
					} else {
						this.notificationService.showError(resp.message, "Application Error");
					}
					this.training = false;
				},
			(error) => {
				this.notificationService.showError(error.message, "Server Error");
				this.training = false;
			}
			
		);

	}
}
