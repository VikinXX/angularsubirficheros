import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpHeaders } from '@angular/common/http';
import { HttpContext } from '@angular/common/http';
import { SKIP_TOKEN } from '../utils/token.context';

@Injectable({
    providedIn: 'root'
})
export class ServiceEmpleados {

    constructor(private _http: HttpClient) {}

    login(loginObject: object): Observable<any> {
        return this._http.post(environment.urlEmpleados + 'Auth/Login', loginObject, { context: new HttpContext().set(SKIP_TOKEN, true) });
    }

    getEmpleados(): Observable<any> {
        let headers = new HttpHeaders().set("Authorization", "bearer " + sessionStorage.getItem("token"));
        headers = headers.set("withCredentials", "true");
        return this._http.get(environment.urlEmpleados + 'api/Empleados', {headers: headers});
    }

    getPerfil(): Observable<any> {
        let headers = new HttpHeaders().set("Authorization", "bearer " + sessionStorage.getItem("token"));
        headers = headers.set("withCredentials", "true");
        
        return this._http.get(environment.urlEmpleados + 'api/Empleados/PerfilEmpleado', {headers: headers});
    }

    getSubordinados(): Observable<any> {
        //let headers = new HttpHeaders().set("Authorization", "bearer " + sessionStorage.getItem("token"));
        //headers = headers.set("withCredentials", "true");

        return this._http.get(environment.urlEmpleados + 'api/Empleados/Subordinados');
    }

}