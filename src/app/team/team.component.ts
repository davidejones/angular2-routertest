import { Component, OnInit } from '@angular/core';
import {TeamService} from "./team.service";
import {Observable} from "rxjs";

@Component({
  template: `
    <p>Welcome to the team, our team members are...</p>
    <ul>
      <li *ngFor="let team of teams"><a [routerLink]="team.name" routerLinkActive="active">{{team.name}}</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class TeamComponent implements OnInit {

  teams: Observable<any>;

  constructor(private service: TeamService) {
  }

  ngOnInit() {
      this.service.getTeams().subscribe(
        (result: any) => this.teams = result
      );
  }

}
