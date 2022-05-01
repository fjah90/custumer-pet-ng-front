import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pets.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditPetsComponent implements OnInit {

  id!: string;
  pets!: Pet;
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public petsService: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.petsService.find(this.id).subscribe((data: Pet) => {
      this.pets = data;
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    console.log(this.form.value);
    this.petsService.update(this.id, this.form.value).subscribe((res: any) => {
      console.log('Pet updated successfully!');
      this.router.navigateByUrl('pets/index');
    })
  }

}