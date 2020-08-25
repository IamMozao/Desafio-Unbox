import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getPokemonCards() {

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }

    this.http.get<any>('https://api.pokemontcg.io/v1/cards?setCode=base1', { headers: headers }).subscribe(data => {
      console.log(data);
      return data
    })

  }

  getPokemonCardById(id) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }

    return axios.get(`https://api.pokemontcg.io/v1/cards/${id}`)
      .then((response) => {
        console.log(response);

        return response.data.card

      }).catch(error => {
        console.log(error);

      })
  }

}
