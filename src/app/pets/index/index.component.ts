import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { Pet } from '../pets.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  pets: Pet[] = [];

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public petService: PetService) { }

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
  deletePet(id: string) {
    this.petService.delete(id).subscribe(res => {
      this.pets = this.pets.filter(item => item.id !== id);
      console.log('Pet deleted successfully!');
    })
  }

}