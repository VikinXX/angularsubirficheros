import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/Service.empleados';
import { Empleado } from '../../models/Empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit{

  public subordinados: Empleado[];

  constructor(private _cdr: ChangeDetectorRef, private _service: ServiceEmpleados, private _router: Router) {
    this.subordinados = [];
  }

  getSubordinados() {
    this._service.getSubordinados().subscribe((data: any) => {
      this.subordinados = data;
      this._cdr.detectChanges();
    })
  }

  ngOnInit() {
    this.getSubordinados();

  }

}
