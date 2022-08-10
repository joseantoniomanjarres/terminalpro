import { Component, OnInit } from '@angular/core';

import { PropietarioService } from '../propietario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Propietario } from '../propietario';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  propietario: Propietario;
  form: FormGroup;

  constructor(
    public propietarioService: PropietarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPropietario'];
    this.propietarioService.find(this.id).subscribe((data: Propietario)=>{
      this.propietario = data;
    });

    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      phone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.propietarioService.update(this.id, this.form.value).subscribe(res => {
         console.log('Propietario updated successfully!');
         this.router.navigateByUrl('propietario/index');
    })
  }

}
