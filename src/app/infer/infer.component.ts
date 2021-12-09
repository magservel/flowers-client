import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-infer',
  templateUrl: './infer.component.html',
  styleUrls: ['./infer.component.css']
})
export class InferComponent implements OnInit {

	inferResult!: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }


	onInfer(form: NgForm) {
		this.dataService.inferDataFromModel(form.value)
		this.inferResult = this.dataService.inferResult
	}

}
