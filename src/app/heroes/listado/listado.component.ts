import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {
heroes: string[] = ['spiderman', 'Iraoman', 'Hulk','Thor','capitan America'];
heroeBorrado: string ="";

borrarHeroe(){
  this.heroeBorrado =  this.heroes.shift() || ""; 
 

  
}
}
