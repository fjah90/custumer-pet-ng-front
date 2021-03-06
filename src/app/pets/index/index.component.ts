import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { Pet } from '../pets.interface';
import { CustumerService } from '../../custumers/custumers.service';
import { Custumer } from '../../custumers/custumers.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexPetsComponent implements OnInit {

  pets: Pet[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public petService: PetService,
    public custumerService: CustumerService,
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.petService.getAll().subscribe((data: Pet[]) => {
      this.pets = data;
      console.log(this.pets);
    })
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePet(_id: string) {
    this.petService.delete(_id).subscribe(res => {
      this.pets = this.pets.filter(item => item._id !== _id);
      console.log('Pet deleted successfully!');
    })
  }

}