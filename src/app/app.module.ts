import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FinTableComponent } from './components/fin-table/fin-table.component';
import { BalSheetComponent } from './components/bal-sheet/bal-sheet.component';
import { FinancialsComponent } from './components/financials/financials.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionComponent } from './components/question/question.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FinTableComponent,
    BalSheetComponent,
    FinancialsComponent,
    DatepickerComponent,
    DashboardComponent,
    QuestionComponent,
    TransactionComponent,
    ReportsComponent,
    AdvancedComponent,
    ProfileComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
