import { Component, OnInit } from '@angular/core';
import { Demande } from '../models/Demande';
import { DemandeService } from '../services/demande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demandes: Demande[] = [];

  constructor(private demandeService: DemandeService, private router: Router) {}

  ngOnInit(): void {
    this.getAllDemande();
  }

  getAllDemande() {
    this.demandeService.getAllDemandes().subscribe(
      res => {
        console.log(res);
        this.demandes = res;
      },
      error => {
        console.error("Erreur dans l'affichage de demande", error);
      }
    );
  }

  saveDemande() {
    this.router.navigateByUrl('creationDemande');
  }

  saveDemandeOutsystems() {
    this.router.navigateByUrl('outsystems');
  }

  deleteDemande(id: number) {
    this.demandeService.deleteDemande(id).subscribe(
      () => {
        this.getAllDemande();
      },
      error => {
        console.error("Erreur dans la suppression de la demande", error);
      }
    );
  }
  editRecord(recordId: number) {
    window.location.href = 'http://localhost:8085/p/{demande_activite/societe_id}/{demande_societe/_id}/{demande_demande/_id}/{demande_adresse/societe_id}/{demande_capital/societe_id}/{referentiel_code_postal}/{demande_personne_Associe}/{demande_membre_spec_2}/{demande_adresse_LastID}/{demande_documents}/{demande_personne_3}/{demande_membre_spec_personnes_2}/{demande_personne_2}/{demande_adresse_4}/{demande_identifiant_unique}/{demande_personne}/{demande_adresse_3}/{UserSelection_4}/{UserSelection_3}/{demande_personne_lastId}/{demande_action_lastId}/{demande_adresse_2}/{referentiel_statuts_sections}/{referentiel_sections}/{demande_membre_spec_personnes}/{demande_membre_spec}/{referentiel_statuts}/{demande_benifValidation}/{FileDocument}/{demande_demande_lastId}/{UserSelction_2}/{demande_action}/{referentiel_gouvernorats}/{demande_certificat}/{referentiel_villes}/{UserSelection}';
  }

 
}
