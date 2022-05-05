import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustumerService } from '../../custumers/custumers.service';
import { Custumer } from '../../custumers/custumers.interface';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreatePetsComponent implements OnInit {

  form!: FormGroup;
  custumerList!: Custumer[];
  displayMonths = 1;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible'
  model!: NgbDateStruct;
  date!: { year: number; month: number; };
  
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public petsService: PetService,
    public custumerService: CustumerService,
    private calendar: NgbCalendar,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.calendar.getToday();

    this.form = new FormGroup({
      custumerId: new FormControl('', [Validators.required]),
      chipNumber: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      birthDate: new FormControl('birthDate', [Validators.required]),
      species: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      photoURL: new FormControl('', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    });
    this.form.addControl("test", new FormControl({ day: 20, month: 4, year: 1969 })) 
    this.custumerService.getAll().subscribe((data: Custumer[]) => {
      this.custumerList = data;
    })
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
    this.petsService.create(this.form.value).subscribe((res: any) => {
      console.log('Pet created successfully!');
      this.router.navigateByUrl('pets/index');
    })
  }

}