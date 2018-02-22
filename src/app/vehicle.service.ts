import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { BrowseModel } from './browse-model'


import { Vehicle }  from './vehicle';

@Injectable()
export class VehicleService {
    vehiclesUpdated: EventEmitter<Vehicle[]> = new EventEmitter<Vehicle[]>();
    sidesUpdated: EventEmitter<string[]> = new EventEmitter<string[]>();
    erasUpdated: EventEmitter<string[]> = new EventEmitter<string[]>();

	constructor(private _http: HttpClient) { }

	_vehiclesUrl = 'assets/vehicles.json';

    getVehicles(): Observable<Vehicle[]> {
        return this._http.get<Vehicle[]>(this._vehiclesUrl)
            .do(data =>  {
                //console.log("data in service:", data);
                //console.log("JSON.stringify(data):", JSON.stringify(data));
                //JSON.stringify(data);
            })
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }

    // filterByType(type: string) {
    //     let filteredValues: Vehicle[];
    //     let sides: string[] = [];
    //     let eras: string[] = [];

    //     this.getVehicles().subscribe(data => {
    //         filteredValues = data.filter(item => item.type == type);
    //         sides = Array.from(new Set([].concat(...(filteredValues.map(x => x.side)))));
    //         eras = Array.from(new Set([].concat(...(filteredValues.map(x => x.era)))));
    //         console.log("sides after filter:",sides);
    //         console.log("eras after filter:",eras);
    //         this.vehiclesUpdated.emit(filteredValues);
    //         this.sidesUpdated.emit(sides);
    //         this.erasUpdated.emit(eras);
    //     });
    // }

    filter(model: BrowseModel) {
        let filteredValues: Vehicle[];
        let sides: string[] = [];
        let eras: string[] = [];

        this.getVehicles().subscribe(data => {
            console.log(model);
            // combined filters are not seeming to work
            filteredValues = data.filter(item =>
                 item.type === model.platform 
                 //&& item.side.includes(model.side) && item.era.includes(model.era)
            );

            console.log("filtered values:", filteredValues);

            sides = Array.from(new Set([].concat(...(filteredValues.map(x => x.side)))));
            eras = Array.from(new Set([].concat(...(filteredValues.map(x => x.era)))));
            console.log("sides after filter:",sides);
            console.log("eras after filter:",eras);
            this.vehiclesUpdated.emit(filteredValues);
            this.sidesUpdated.emit(sides);
            this.erasUpdated.emit(eras);
        });
    }

    reset() {
        this.getVehicles().subscribe(data => {
            //console.log("reset in service:");
            this.vehiclesUpdated.emit(data);
        });
    }
}
