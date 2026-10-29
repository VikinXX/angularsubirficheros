import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface FileUploadPayload {
  fileName: string;
  fileContent: string;
}

@Injectable()
export class ServiceUpload {

    constructor(private _http: HttpClient) {}

    subirFichero(fileName: string, base64: string): Observable<any> {
        const body: FileUploadPayload = {
            fileName: fileName,
            fileContent: base64
        }

        return this._http.post(environment.url + 'api/TestingFiles', body);
    }

}