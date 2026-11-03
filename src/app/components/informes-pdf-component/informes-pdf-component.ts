import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-informes-pdf-component',
  standalone: false,
  styleUrl: './informes-pdf-component.css',
  templateUrl: './informes-pdf-component.html',
})
export class InformesPdfComponent {

  generarDocumento() {
    let doc: jsPDF = new jsPDF();

    doc.setFontSize(20);
    doc.text('Documento de martes', 10, 10);
    doc.setFontSize(12);

    const headers = [["Nombre", "Email", "Edad"]];
    const data = [["Alvaro Ortiz", "alvaro.ortiz@gmail.com", "23"],
                  ["Juan Perez", "juan.perez@gmail.com", "30"],
                ["Maria Lopez", "maria.lopez@gmail.com", "21"]];

    autoTable(doc, {
      head: headers,
      body: data,
      startY: 20,
    })
    doc.save('personas.pdf');
  }
}
