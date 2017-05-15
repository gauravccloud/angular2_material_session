import { Component, Input, OnInit } from '@angular/core';
import {HeroService} from '../../app.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import {MdDialog, MdDialogRef} from '@angular/material';
import {DialogComponent} from '../Dialog/dialog.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private hero_service: HeroService, private router:Router, public dialog: MdDialog){}
      selectedOption: string;
      heros: Array<object>;
      ngOnInit() {
        this.hero_service.getHeros()
        .subscribe(res => {
          this.heros = res
          this.hero_service.setData(this.heros);
        })
      }

      openDialog() {
        let dialogRef = this.dialog.open(DialogComponent);
        dialogRef.afterClosed().subscribe(result => {
          this.selectedOption = result;
        });
      }


    navigate(id:string) {
       this.router.navigate(['/hero', id]);
    }
}
