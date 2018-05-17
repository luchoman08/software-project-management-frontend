import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class TaigaApiService extends ApiService {
  public api_url = environment.api_taiga_url;

}
