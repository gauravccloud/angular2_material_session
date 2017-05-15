import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../../app.service';

@Component({
  selector: 'hero-details',
  templateUrl: './herodetails.component.html',
// styleUrls: ['./herodetails.component.css']
})
export class HeroDetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute, private hero_service:HeroService) {}
  id:any;
  hero:object;

  ngOnInit(){
    this.route.params
    .subscribe(params => {
      this.id = +params['id'];
      this.hero = this.hero_service.getData(this.id)
      console.log(this.id);
    })
  }

}
