import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LearnersComponent } from './learners/learners.component'; // Ajustez selon votre structure

export const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent }, // Route pour le tableau de bord
  { path: 'learners', component: LearnersComponent }, // Route pour les apprenants
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: '/dashboard' } // Redirection pour les routes inconnues
];