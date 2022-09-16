import { environment } from './../environments/environment';
import { Details } from './app.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
    
    getData(): Observable<Details[]> {
        return this.http.get<Details[]>(environment.detailsApi);
    }

    constructor(private http: HttpClient) {}
}