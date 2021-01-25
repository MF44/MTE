import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '5f386d0eea792de8e4b3a55cbe7680e4';
  url;

  constructor(public http: HttpClient ) {
    this.url = 'https://api.openweathermap.org/data/2.5/weather';
  }

  getWeather(city){
       return this.http.get(this.url + '?q=' + city + '&units=metric&appid=' + this.apiKey);
  }
}
