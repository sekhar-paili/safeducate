import { Routes } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { CareerAtSafeducateComponent } from "./career-at-safeducate/career-at-safeducate.component";
import { EmployeeLoginComponent } from "./employee-login/employee-login.component";
import { OurCentersComponent } from "./our-centers/our-centers.component";
import { PartnerWithUsComponent } from "./partner-with-us/partner-with-us.component";

export const  CONTACT_US_ROUTES: Routes = [
 {
    path: '',
    component : ContactsComponent
 },
 {
    path: 'career-at-safeducate',
    component : CareerAtSafeducateComponent
 },
 {
    path: 'employee-login',
    component : EmployeeLoginComponent
 },
 {
    path: 'our-centers',
    component : OurCentersComponent
 },
 {
    path: 'partner-with-us',
    component : PartnerWithUsComponent
 }
]