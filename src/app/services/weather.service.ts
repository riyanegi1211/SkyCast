import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherApiBaseUrl:any

  constructor(private http:HttpClient) { }

    getWeatherData(cityName: string):Observable<WeatherData>
    
    {
      console.log(environment.weatherApiBaseUrl);
      return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
        headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
        params: new HttpParams()
        .set('q',cityName)
        .set('appid','da0f9c8d90bde7e619c3ec47766a42f4')
        .set('units','metric')
        .set('mode','json')
      })
    }
}
