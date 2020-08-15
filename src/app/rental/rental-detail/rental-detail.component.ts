import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/services/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  currentId: string;
  rental: Rental;
  constructor(private route: ActivatedRoute,
    private rentalService: RentalService) { }

  ngOnInit() {
    this.rental = new Rental();
    this.route.params.subscribe((params)=>{
      this.getRentals(params['rentalId']);
    })
  }

  getRentals(rentalId: string){
    this.rentalService.getRentalById(rentalId).subscribe((rental: Rental)=>{
      this.rental = rental;
    })
  }
}
