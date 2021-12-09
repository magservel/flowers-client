import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

	@Input() dataX!: string;
	@Input() dataY!: string;

  constructor() { }

  ngOnInit(): void {
  }

	getX() {
		return this.dataX;
	}

	getY() {
		return this.dataY;
	}
}
