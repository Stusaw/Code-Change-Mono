import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../../../env';

@Injectable()
export class FinanceProductApiService {
  constructor(
    private _httpClient: HttpClient,
    @Inject('env') private env: env,
    @Inject('apiAccess') private apiAccess: string
  ) {
    console.log(env.apiUrl);
    console.log(
      `${this.env.apiUrl}/${this.apiAccess}/FinanceProduct/ActivateVariant`
    );
  }

  activateVariant(productKey: string, variantKey: string): Observable<void> {
    let params = { productKey: productKey, variantKey: variantKey };
    return this._httpClient.request<void>(
      'POST',
      `${this.env.apiUrl}/${this.apiAccess}/FinanceProduct/ActivateVariant`,
      {
        params: params,
      }
    );
  }
}
