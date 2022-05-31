import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators';
import { User } from "./user.data";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    
    apiurl = 'api/users';
    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    httpOptions = {
        headers: this.headers
    };

    // injectable service to communicate 
    // with the data 
    constructor(private http: HttpClient) {}

    // function will handle and log errors
    private handleError(error: any) { 
        console.error(error);
        return throwError(error);
    }
}