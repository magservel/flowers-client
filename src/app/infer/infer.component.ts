import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-infer',
  templateUrl: './infer.component.html',
  styleUrls: ['./infer.component.css']
})
export class InferComponent implements OnInit {

	inferResult!: string;

  constructor(private dataService: DataService, private notificationService: NotificationService) { }

  ngOnInit(): void {
		this.inferResult = '';
  }


	onInfer(form: NgForm) {
		this.dataService.inferDataFromModel(form.value)
		.subscribe(
				(resp) => {
					if (resp.success == "OK") {
						this.inferResult = resp.data;
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
