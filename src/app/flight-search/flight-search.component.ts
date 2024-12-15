import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightRm } from '../api/models';
import { FlightService } from '../api/services';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent implements OnInit{

   searchResult : FlightRm[]= [];
  
   constructor(private flightService : FlightService){}

ngOnInit(): void {
 
  }

  search() {
    this.flightService.searchFlight$Json({})
    .subscribe(response => this.searchResult = response, this.handleerror);
  }

  private handleerror(err: any){
    console.log(err);
  }
}

