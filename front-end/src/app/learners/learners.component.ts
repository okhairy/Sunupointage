import { Component } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learners',
  standalone:true,
  imports: [SidebarComponent,CommonModule],
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.css']
})
export class LearnersComponent {
  // Liste des apprenants
  learners = [
    { name: 'Olivia Rhyne', category: 'SAA Women in Tech', email: 'olivia@example.com' },
    { name: 'Phoenix Baker', category: 'SAA Women in Tech', email: 'phoenix@example.com' },
    { name: 'Emma Williamson', category: 'SAA Women in Tech', email: 'emma@example.com' },
    { name: 'Daniel Craig', category: 'SAA Women in Tech', email: 'daniel@example.com' },
    { name: 'Ariana Dugas', category: 'SAA Women in Tech', email: 'ariana@example.com' },
  ];

  // Fonction pour gérer l'upload de fichier
  onFileUpload(event: any) {
    const file = event.target.files[0];
    // Ici vous pouvez traiter le fichier CSV selon vos besoins
    console.log("Fichier téléchargé:", file);
  }
}