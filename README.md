# angular2-routertest
dynamically add to the router at runtime.

So the code defines a home and team section in the routes and router navigation but the team members come dynamically from the team.json. In this example I hardcoded the data and made it an observable but it should work coming from a json rest endpoint or .json file.

When the team code initiates it grabs the data from getTeams() takes the current router config and adds the new subchildren team member routes based on our json data we retrieved. The routes all go to one generic component TeamMemberComponent which just takes data and spits it out. This is then applied to the router with this.router.resetConfig() and it all works as you would expect.

The navigation is dynamically created from the same json data too. 

So adding to the service data will dynamically show new entries in the nav and create new routes/pages etc.

![alt tag](https://raw.githubusercontent.com/davidejones/angular2-routertest/master/route.gif)