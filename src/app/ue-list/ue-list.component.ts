import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {UeModalComponent} from '../ue-modal/ue-modal.component';
import {UeService} from '../services/ue.service';
import {Ue} from '../models/ue/ue.model';

@Component({
  selector: 'app-ue-list',
  imports: [
    FormsModule,
    NgForOf,
    UeModalComponent
  ],
  templateUrl: './ue-list.component.html',
  styleUrl: './ue-list.component.css'
})
export class UeListComponent {
 ues:Ue[]=[];
 searchTerm:string='';
 showModal:boolean=false;
 selectedUe:Ue|null=null;
 constructor(
   private ueService: UeService
 ) { }

  ngOnInit(): void {
    this.loadUes();
  }

  loadUes() {

  }

  filteredUes() {
    return this.ues.filter(ue => ue.nomUe.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  openAddModal() {
    this.selectedUe = null;
    this.showModal = true;
  }

  openEditModal(ue: Ue) {
    this.selectedUe = ue;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
