import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ServiceEquipos } from '../../services/Service.equipos';
import { Equipo } from '../../models/Equipo';

@Component({
  selector: 'app-equipos-component',
  standalone: false,
  styleUrl: './equipos-component.css',
  templateUrl: './equipos-component.html',
})
export class EquiposComponent implements OnInit{

  public equipos: Equipo[];

  constructor(private _cdr: ChangeDetectorRef, private _serviceEquipos: ServiceEquipos) {
    this.equipos = [];
  }

  loadEquipos(){
    this._serviceEquipos.getEquipos().subscribe((res: any) => {
      this.equipos = res;
      this._cdr.detectChanges();
    })
  }

  ngOnInit(){
    this.loadEquipos();
  }

}
