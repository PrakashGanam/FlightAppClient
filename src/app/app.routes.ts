import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { BookFlightComponent } from './book-flight/book-flight.component';

export const routes: Routes = [
    {path: '', component:FlightSearchComponent, pathMatch:'full'},
        {path:'book-flight/:flightid', component: BookFlightComponent},
        {path:'search-flight', component:FlightSearchComponent}
];
