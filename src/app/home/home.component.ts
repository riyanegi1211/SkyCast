import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

declare const L:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private weatherService: WeatherService)
  {

  }
  cityName: string='Dehradun'; 
  weatherData?: WeatherData;
  ngOnInit() {
   if(!navigator.geolocation)
   {
    console.log("location is not supported");
   }
   navigator.geolocation.getCurrentPosition((position)=>{
    const coords = position.coords;
    const latLong = [coords.latitude, coords.longitude];
    console.log(
      `lat: ${position.coords.latitude},lon:${position.coords.longitude}`
    );
    let map = L.map('map').setView([coords.latitude, coords.longitude], 13);
      
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token',
      }).addTo(map);
      let marker = L.marker(latLong).addTo(map);

      marker.bindPopup('<b>Hi</b>').openPopup();

      let popup = L.popup()
        .setLatLng(latLong)
        .setContent('You are here')
        .openOn(map);
  });
   this.watchPosition();
  }
  watchPosition()
  {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition((position)=>{
      console.log(
        `lat: ${position.coords.latitude},lon:${position.coords.longitude}`);
        if(position.coords.latitude === desLat)
        {
          navigator.geolocation.clearWatch(id);
        }
    },(err)=>{
      console.log(err);
    },{
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge:0
    })
  }
  onSubmit()
  {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  private getWeatherData(cityName:string)
  {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next:(response)=>{
        this.weatherData=response;
        console.log(response);
      }
    });

  }
}
