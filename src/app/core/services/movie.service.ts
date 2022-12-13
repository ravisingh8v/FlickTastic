import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class MovieService {
  public baseUrl: string;
  public apiKey: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.apiKey = '?api_key=5817251e9ff1f45cda94b0031027fb14';
  }

  public getTrendingMovie() {
    return this.http.get(`${this.baseUrl}trending/all/day${this.apiKey}`)
  }
  // public getMovieById(id:number) {
  //   return this.http.get(`${this.baseUrl}/movie/${id}${this.apiKey}`)
  // }
  public getAllMovie() {
    return this.http.get(`${this.baseUrl}discover/movie${this.apiKey}`)
  }
  public getAllSeries() {
    return this.http.get(`${this.baseUrl}discover/tv${this.apiKey}`)
  }
}
