import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import axios from 'axios'

@Injectable()

export class CardsResolver implements Resolve<any> {

  constructor(private http: HttpClient) { }

  async resolve() {


    return axios.get('https://api.pokemontcg.io/v1/cards?setCode=base1')
      .then((response) => {
        console.log(response);

        return response.data

      }).catch(error => {
        console.log(error);

      })

  }
}

