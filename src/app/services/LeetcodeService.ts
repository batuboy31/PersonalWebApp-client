import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LeetItem } from "../models/leetItem";

@Injectable({
    providedIn: 'root'
  })

export class LeetcodeService {

    private apiUrl = 'https://localhost:7266/api/LeetItem'

    constructor(private httpClient : HttpClient){}


    getLeets() : Observable<LeetItem[]>{
          return this.httpClient.get<LeetItem[]>(`${this.apiUrl}`);
    }

    getLeetById(id : number) : Observable<any>{
        return this.httpClient.get<any>(`${this.apiUrl}?id=${id}`);
    }
}