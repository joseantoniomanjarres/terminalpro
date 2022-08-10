import { Component, OnInit } from '@angular/core';

import { PropietarioService } from '../propietario.service';
import { Propietario } from '../propietario';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  propietarios: Propietario[] = [];

  // constructor() { }
  constructor(public propietarioService: PropietarioService) { }

  ngOnInit(): void {
    this.propietarioService.getAll().subscribe((data: Propietario[])=>{
      this.propietarios = data;
      console.log(this.propietarios);
    })
  }

  deletePropietario(id){
    this.propietarioService.delete(id).subscribe(res => {
         this.propietarios = this.propietarios.filter(item => item.id !== id);
         console.log('Propietario deleted successfully!');
    })
  }

}
