import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class InsuranceResolver implements Resolve<any> {
  constructor() // private _saleCycleService: SaleCycleService
  {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {

    
    let dealId = route.params.dealId;
    console.log(dealId);

    // let saleCycle$ = this._saleCycleService.getCycle(cycleKey);
    // let stepData$ = this._saleCycleService.getDataForCurrentStep(cycleKey);

    return of(dealId).pipe(delay(2000));
  }
}
