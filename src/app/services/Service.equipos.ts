import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpContext } from '@angular/common/http';
import { SKIP_TOKEN } from '../utils/token.context';

@Injectable({
    providedIn: 'root'
})
export class ServiceEquipos {

    constructor(private _http: HttpClient) {}

    getEquipos(): Observable<any> {
        return this._http.get(environment.urlEquipos + 'api/Equipos', { context: new HttpContext().set(SKIP_TOKEN, true) });
    }

}