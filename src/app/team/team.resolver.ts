import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamService } from './team.service';

@Injectable()
export class TeamMemberResolver implements Resolve<any> {
  constructor(private service: TeamService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    let path = route.url[0].path;
    return this.service.getTeam(path);
  }
}
