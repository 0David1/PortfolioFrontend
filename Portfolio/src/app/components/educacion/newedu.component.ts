import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-newedu',
  templateUrl: './newedu.component.html',
  styleUrls: ['./newedu.component.css']
})
export class NeweduComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private educacionS: EducacionService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['/education']);
      }, err =>{
        alert("falló");
        this.router.navigate(['/education']);
      }
    )
  }

}