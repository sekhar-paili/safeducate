import { Routes } from "@angular/router";
import { SolutionsComponent } from "./solutions/solutions.component";
import { AcademiaConnectSolutionsComponent } from "./academia-connect-solutions/academia-connect-solutions.component";
import { CorporateConnectSolutionsComponent } from "./corporate-connect-solutions/corporate-connect-solutions.component";
import { DigitalLearningSolutionsComponent } from "./digital-learning-solutions/digital-learning-solutions.component";
import { ProfessionalCertificationsSolutionsComponent } from "./professional-certifications-solutions/professional-certifications-solutions.component";
import { ResearchConsultingSolutionsComponent } from "./research-consulting-solutions/research-consulting-solutions.component";
import { VocationalEducationTrainingSolutionsComponent } from "./vocational-education-training-solutions/vocational-education-training-solutions.component";

export const  SOLUTIONS_ROUTES: Routes = [
 {
    path: '',
    component : SolutionsComponent
 },
 {
    path: 'academia-connect-solutions',
    component : AcademiaConnectSolutionsComponent
 },
 {
    path: 'corporate-connect-solutions',
    component : CorporateConnectSolutionsComponent
 },
 {
    path: 'digital-learning-solutions',
    component : DigitalLearningSolutionsComponent
 },
 {
    path: 'professional-certifications-solutions',
    component : ProfessionalCertificationsSolutionsComponent
 },
 {
    path: 'research-consulting-solutions',
    component : ResearchConsultingSolutionsComponent
 },
 {
    path: 'vocational-education-training-solutions',
    component : VocationalEducationTrainingSolutionsComponent
 }
]