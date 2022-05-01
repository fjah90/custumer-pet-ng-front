import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pets.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewPetsComponent implements OnInit {

  id!: string;
  pet!: Pet;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public petService: PetService,
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

    this.petService.find(this.id).subscribe((data: Pet) => {
      this.pet = data;
    });
  }

}