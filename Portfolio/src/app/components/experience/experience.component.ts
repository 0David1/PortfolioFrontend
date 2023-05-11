import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiencia: Experiencia[] = [];

  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  
  constructor(private experienciaS: ExperienciaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.experienciaS.lista().subscribe(
      data =>{
        this.experiencia = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.experienciaS.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.experiencia, event.previousIndex, event.currentIndex);
  }
}
