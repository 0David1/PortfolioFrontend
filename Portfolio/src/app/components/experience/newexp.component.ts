import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-newexp',
  templateUrl: './newexp.component.html',
  styleUrls: ['./newexp.component.css']
})
export class NewexpComponent {
  nombreEx: string = '';
  descripcionEx: string = '';

  constructor(private experienciaS: ExperienciaService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    const experiencia = new Experiencia(this.nombreEx, this.descripcionEx);
    this.experienciaS.save(experiencia).subscribe(
      data =>{
        alert("Experiencia añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }
}
