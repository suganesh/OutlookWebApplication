import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Directory } from 'src/app/models/directory.model';

@Injectable()
export class DirectoryListService {

    private searchString = new Subject<any>();

    searchString$ = this.searchString.asObservable()

    constructor(private http: HttpClient) {

    }

    setsearchString(searchStr: any): void {
        this.searchString.next(searchStr);
    }

    getsearchString(): Observable<any> {
        return this.searchString;
    }


    getDirectoryList(): Observable<Directory[]> {
        const url = "./app/mock/directorylist.json";
        return this.http.get<Directory[]>(url);
    }
}