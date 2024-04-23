import { Routes } from "@angular/router";
import { KnowledgeCentreComponent } from "./knowledge-centre/knowledge-centre.component";
import { JournalsMagazinesComponent } from "./journals-magazines/journals-magazines.component";
import { LatestTrendsComponent } from "./latest-trends/latest-trends.component";
import { ReportsComponent } from "./reports/reports.component";

export const  KNOWLEDGE_CENTER_ROUTES: Routes = [
 {
    path: '',
    component : KnowledgeCentreComponent
 },
 {
    path: 'journals-magazines',
    component : JournalsMagazinesComponent
 },
 {
    path: 'latest-trends',
    component : LatestTrendsComponent
 },
 {
    path: 'reports',
    component : ReportsComponent
 }
]