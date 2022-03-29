import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  datosHeader: any;

  constructor(private datosportfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosportfolio.obtenerDatos().subscribe(data => {
      this.datosHeader = data;
    });
  }

}
