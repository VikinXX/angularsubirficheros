import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ServiceUpload } from '../../services/Service.upload';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {

  @ViewChild('file') fileInput!: ElementRef;
  public fileName: string;
  public base64: string;
  public mensaje: string = '';

  constructor(private _serviceUpload: ServiceUpload, private _cdr: ChangeDetectorRef) {
    this.fileName = '';
    this.base64 = '';
  }

  subirArchivo() {
    const file: File = this.fileInput.nativeElement.files[0];

    this.fileName = file.name;

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as string;

      this.base64 = result.includes(',') ? result.split(',')[1] : result;
    }

    reader.readAsDataURL(file);


    this._serviceUpload.subirFichero(this.fileName, this.base64).subscribe((res) => {
      this.mensaje = 'Fichero subido correctamente';
      this._cdr.detectChanges();
    })
  }

}
