import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajo } from 'src/app/models/trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';

@Component({
  selector: 'app-crear-trabajo',
  templateUrl: './crear-trabajo.component.html',
  styleUrls: ['./crear-trabajo.component.css']
})
export class CrearTrabajoComponent implements OnInit {

  nombreEmpresa:string='';
	puesto:string='';
	descripcion:string='';
	fechaInicio:string='';
	fechaFin:string='';
	websiteURL:string='';
  isFail = false;
  errorMsg:string = '';

  constructor(private trabajoService:TrabajoService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.isFail = false;
    const trabajo = {
                      nombreEmpresa:this.nombreEmpresa,
                      puesto:this.puesto,
                      descripcion:this.descripcion,
                      fechaInicio:this.fechaInicio,
                      fechaFin:this.fechaFin,
                      websiteURL:this.websiteURL
    };
    console.log(trabajo);
    this.trabajoService.save(trabajo).subscribe(
      data =>{
        this.router.navigate(['/']);
      },
      err => {
        this.isFail=true;
        this.errorMsg=err.error.mensaje;
        console.log(err);
      }
    );
  }

}
