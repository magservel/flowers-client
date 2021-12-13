import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	data_list!: any[];

  constructor(private dataService: DataService, private notificationService : NotificationService) { }

  ngOnInit(): void {
		this.onGetList();
  }


	onGetList() {
		this.dataService.getDataList()
		.subscribe(
				(resp) => {
					if (resp.success == "OK") {
						this.data_list = JSON.parse(resp.data);
					} else {
						this.notificationService.showError(resp.message, "Application Error");
					}
				},
			(error) => {
				this.notificationService.showError(error.message, "Server Error");
				console.log(error);
			}
		);
	}
}
