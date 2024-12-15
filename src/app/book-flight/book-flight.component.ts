import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../api/services';
import { FlightRm } from '../api/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-flight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent {
  flightId : string = 'not loaded';
  flightdtl : FlightRm = {};

constructor(private route : ActivatedRoute, private service : FlightService){
  this.route.paramMap.subscribe(p => this.Findflightid(p.get('flightid')));
}

private Findflightid = (flightId : string | null) => {
this.flightId = flightId ?? 'not passed';

this.service.findFlight$Json({id:this.flightId}).subscribe(
  result => this.flightdtl = result
)
}
}
