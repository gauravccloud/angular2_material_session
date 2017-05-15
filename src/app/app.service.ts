import {Injectable} from "@angular/core";
import {HttpModule, Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';

@Injectable()
export class HeroService {
  heros: Array<object>
  id: string;

  constructor(private http:Http){}
  data: Observable<Array<object>>

    getHeros() {
      this.data = this.http.get("assets/data/data.json")
        .map((res) => res.json())

        return this.data;
    }

    setData(data:any) {
        this.heros = data;
    }

    getData(id:string) {
      return this.heros[id];
    }



}
