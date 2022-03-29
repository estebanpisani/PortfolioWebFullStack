import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  educationList: any;
  experienceList: any;
  projectList: any;
  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.educationList = data.education;
      this.experienceList = data.experience;
      this.projectList = data.projects;
    });
  }

}
