import { UrlconfigService } from './../../helper/urlconfig.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemserivesService {

  constructor(private http: HttpClient) { }
  getList() {
    debugger
    const api = UrlconfigService['Baseurl']['baseurl'] + UrlconfigService['sample']['sampleapi'];
    return this.http.get(api);
  }
}
