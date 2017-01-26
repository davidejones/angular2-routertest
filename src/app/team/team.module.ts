import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamRoutingModule } from "./team.routes";
import { TeamComponent } from "./team.component";
import { TeamService } from "./team.service";
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { TeamMemberComponent } from "./team-member.component";
import { TeamMemberResolver } from "./team.resolver";

@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule
  ],
  declarations: [
    TeamComponent,
    TeamMemberComponent
  ],
  providers: [
    TeamService,
    TeamMemberResolver
  ],
  entryComponents: [
    TeamMemberComponent
  ]
})
export class TeamModule {

  constructor(private route: ActivatedRoute, private router: Router, private service: TeamService) {
      this.service.getTeams().subscribe(
        (result: any) => {
          //console.log(result);
          let tmpRoutes:Routes = this.router.config;
          for(let i = 0; i < tmpRoutes.length; i++) {
            let routeObj: any = tmpRoutes[i];
            if(routeObj.path === 'team') {
              // add new sub routes for /team/
              let children = [];
              for(let j = 0; j < result.length; j++) {
                children.push({path:result[j].name, component: TeamMemberComponent, resolve: {teamMember: TeamMemberResolver}})
              }
              routeObj.children = children;
              /*routeObj.children = [
                {path: 'david', component: TeamMemberComponent, resolve: {teamMember: TeamMemberResolver}},
                {path: 'brad', component: TeamMemberComponent, resolve: {teamMember: TeamMemberResolver}},
                {path: 'rob', component: TeamMemberComponent, resolve: {teamMember: TeamMemberResolver}},
              ];*/
            }
          }

          // apply changes to router
          this.router.resetConfig(tmpRoutes);
        }
      );
  }
}
