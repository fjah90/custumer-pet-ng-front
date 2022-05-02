import { Component, OnInit } from '@angular/core';
import { CustumerService } from '../custumers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Custumer } from '../custumers.interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewCustumersComponent implements OnInit {

  id!: string;
  custumer!: Custumer;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public custumerService: CustumerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];

    this.custumerService.find(this.id).subscribe((data: Custumer) => {
      this.custumer = data;
    });
  }

}