import {Component, OnInit} from '@angular/core';
import {TeamService} from "./team.service";
import {Params, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  template: `<h3>Hi my name is {{teamMember?.name}}</h3><p>{{teamMember?.description}}</p>`,
})
export class TeamMemberComponent implements OnInit {
  teamMember: Observable<any>;

  constructor(private route: ActivatedRoute,
              private service: TeamService) {
  }

  ngOnInit() {
    /*if (this.route.snapshot.data['user']) {
      this.teamMember = this.service.getTeam(this.route.snapshot.data['team'].id);
    } else {
      this.teamMember = this.route.params
        .switchMap((params: Params) => {
          return this.service.getTeam(params['id']);
        });
    }*/
    this.teamMember = this.route.snapshot.data['teamMember'];
  }

}
