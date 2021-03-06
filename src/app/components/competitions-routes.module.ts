import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './competitions/competitions.component';
import { NewCompetitionComponent } from './new-competition/new-competition.component';
import { AuthGuard } from '../core/services/auth.guard';
import { MyCompetitionsComponent } from './my-competitions/my-competitions.component';
import { CompetitionDetailComponent } from './competition-detail/competition-detail.component';
import { JoinedCompetitionsComponent } from './joined-competitions/joined-competitions.component';
import { LiveViewComponent } from './live-view/live-view.component';
import { ResolverService } from '../core/services/resolver.service';
import { CompetitionGeneratorComponent } from './competition-generator/competition-generator.component';


const competitionsRoutes: Routes = [
  {
    path: 'competitions',
    component: CompetitionsComponent
  },
  {
    path: 'my-competitions',
    component: MyCompetitionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'joined-competitions',
    component: JoinedCompetitionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'competition/new',
    component: NewCompetitionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'competition/:id',
    component: CompetitionDetailComponent,
    resolve: { competition: ResolverService }
  },
  {
    path: 'competition/:id/live',
    component: LiveViewComponent
  },
  {
    path: 'competition/:id/generate',
    component: CompetitionGeneratorComponent,
    resolve: { competition: ResolverService },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(competitionsRoutes)],
  exports: [RouterModule]
})
export class CompetitionsRoutingModule {}
