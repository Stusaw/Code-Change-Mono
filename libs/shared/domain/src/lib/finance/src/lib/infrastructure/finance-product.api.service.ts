import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../../../env';

@Injectable({
  providedIn: 'root',
})
export class FinanceProductApiService {
  constructor(
    @Inject(HttpClient) private _httpClient: HttpClient,
    @Inject('env') private env: env
  ) {}

  /**
   * Activates a finance product variant
   * @param productKey A finance product key
   * @param variantKey A finance product variant key
   * @returns void
   */
  activateVariant(productKey: string, variantKey: string): Observable<void> {
    let params = { productKey: productKey, variantKey: variantKey };
    return this._httpClient.request<void>(
      'POST',
      `${this.env.apiUrl}/Admin/FinanceProduct/ActivateVariant`,
      {
        params: params,
      }
    );
  }
}
