import { Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AwardsRecognitionComponent } from "./awards-recognition/awards-recognition.component";
import { ExpertiseSpecializationComponent } from "./expertise-specialization/expertise-specialization.component";
import { PresenceComponent } from "./presence/presence.component";
import { SafeducateLearningComponent } from "./safeducate-learning/safeducate-learning.component";
import { StrategicAlliancesComponent } from "./strategic-alliances/strategic-alliances.component";
import { SuccessStoriesTestimonialsComponent } from "./success-stories-testimonials/success-stories-testimonials.component";

export const  ABOUT_US_ROUTES: Routes = [
 {
    path: '',
    component : AboutUsComponent
 },
 {
    path: 'award-recognization',
    component : AwardsRecognitionComponent
 },
 {
    path: 'expertise-specialization',
    component : ExpertiseSpecializationComponent
 },
 {
    path: 'presence',
    component : PresenceComponent
 },
 {
    path: 'safeducate-learning',
    component : SafeducateLearningComponent
 },
 {
    path: 'special-initiatives',
    component : AwardsRecognitionComponent
 },
 {
    path: 'strategic-alliances',
    component : StrategicAlliancesComponent
 },
 {
    path: 'success-stories-testimonials',
    component : SuccessStoriesTestimonialsComponent
 }
]