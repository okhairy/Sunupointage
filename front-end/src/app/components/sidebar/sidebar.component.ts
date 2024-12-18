import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <nav class="sidebar">
      <div class="logo">
        <img src="assets/image.png" alt="Logo" class="sidebar-logo">
      </div>
      <ul>
        <li><a routerLink="/dashboard"><i class="bi bi-house-door"></i> Dashboard</a></li>
        <li><a routerLink="/learners"><i class="bi bi-person-badge"></i> Gestion des Employés</a></li> <!-- Lien modifié -->
        <li><a routerLink="/apprenants"><i class="bi bi-person-lines-fill"></i> Gestion des Apprenants</a></li>
        <li><a routerLink="/departements"><i class="bi bi-building"></i> Gestion des Départements</a></li>
        <li><a routerLink="/historique"><i class="bi bi-clock-history"></i> Historique et Pointages</a></li>
        <li><a routerLink="/cartes"><i class="bi bi-credit-card"></i> Gestion des Cartes</a></li>
      </ul>
      <ul class="logout">
        <li><a href="#"><i class="bi bi-box-arrow-right"></i> Déconnexion</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    /* Style principal du sidebar */
    .sidebar {
      width: 250px;
      background: #343a40; /* Couleur de fond sombre */
      height: 100vh;
      color: #fff; /* Texte en blanc */
      font-family: Arial, sans-serif;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Style du logo */
    .logo {
      margin: 20px 0;
      text-align: center;
    }

    .sidebar-logo {
      width: 150px; /* Ajustez la taille du logo */
      height: auto;
    }

    /* Liste sans puces */
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
    }

    /* Style des liens */
    li a {
      text-decoration: none;
      color: #f8f9fa;
      padding: 15px 20px;
      display: block;
      font-size: 1rem;
      transition: all 0.3s ease;
      display: flex;
      align-items: center; /* Aligner l'icône et le texte */
    }

    /* Style des icônes */
    li a i {
      margin-right: 10px; /* Espacement entre l'icône et le texte */
      font-size: 1.2rem; /* Taille des icônes */
    }

    /* Effet hover sur les liens */
    li a:hover {
      background-color: #495057; /* Couleur légèrement plus claire */
      color: #BF202F; /* Texte doré */
      transform: translateX(5px); /* Légère animation vers la droite */
      border-left: 4px solid #BF202F; /* Ajout d'une bordure dorée à gauche */
    }

    /* Effet pour le lien actif (à ajouter manuellement) */
    li a.active {
      background-color: #495057;
      color: #FFD700;
      font-weight: bold;
      border-left: 4px solid #FFD700;
    }

    /* Placer le lien de déconnexion en bas */
    .logout {
      margin-top: auto; /* Pousse le lien vers le bas */
    }
  `]
})
export class SidebarComponent {}