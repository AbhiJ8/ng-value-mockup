import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialsComponent } from '../app/components/financials/financials.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionComponent } from './components/question/question.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "dashboard",
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: 'financials',
    component: FinancialsComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent
  },  
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'advanced',
    component: AdvancedComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
