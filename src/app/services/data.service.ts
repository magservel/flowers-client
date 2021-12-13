import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export interface Data {
	dataX: string;
	dataY: string;
}

@Injectable({
	providedIn: 'root'
})
export class DataService {


	constructor(private http: HttpClient) {}

	api_url = 'http://localhost:5000';

	trainModel(): Observable<any> {
		return this.http.get<any>(this.api_url + '/api/train');
	}

	getDataList(): Observable<any> {
		return this.http.get<any>(this.api_url + '/api/list');
	}


	addDataToModel(data: Data): Observable<any> {
		return this.http.post(this.api_url + '/api/add', JSON.stringify(data));		
	}

	inferDataFromModel(data: any): Observable<any> {
		return this.http.post<Data>(this.api_url + '/api/infer', JSON.stringify(data));
	}
}
