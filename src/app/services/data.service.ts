import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Data {
	dataX: string;
	dataY: string;
}

@Injectable()
export class DataService {

	data = [
		{x: 'a', y: '1'},
		{x: 'b', y: '2'},
		{x: 'c', y: '3'}
	];

	inferResult = "None";

	constructor(private http: HttpClient) {}

	api_url = 'http://localhost:5000';

	trainModel() {
		this.http.get(this.api_url + '/api/train')
			.subscribe(
				() => {
					console.log('Model trained succesfully !');
				},
				(error) => {
					console.log('Error occured ! : ' + error.message);
				}
			);
	}

	getDataList() {
		this.http.get<any>(this.api_url + '/api/list')
			.subscribe(
				(response) => {
					this.data = response.data;
				},
				(error) => {
					console.log('Error occured ! : ' + error.message);
				}
			);
	}


	addDataToModel(data: Data) {
		this.http.post(this.api_url + '/api/add', JSON.stringify(data))
			.subscribe(
				(response) => {
					console.log('Data added succesfully !' + JSON.stringify(response));
				},
				(error) => {
					console.log('Error occured ! : ' + error.message);
				}
			);
	}

	inferDataFromModel(data: any) {
		this.http.post<any>(this.api_url + '/api/infer', JSON.stringify(data))
		.subscribe(
			(response) => {
				this.inferResult = response.data;
				console.log(JSON.stringify(response));
			},
			(error) => {
				console.log('Error occured ! : ' + error.message);
			}
		);
}
	}
