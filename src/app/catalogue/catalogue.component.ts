import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UeListComponent} from '../ue-list/ue-list.component';
import {UserListComponent} from '../user-list/user-list.component';
import {UeModalComponent} from '../ue-modal/ue-modal.component';
import {UserModalComponent} from '../user-modal/user-modal.component';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-catalogue',
  imports: [
    FormsModule,
    UeListComponent,
    NgIf,
    NgClass,
    UserListComponent
  ],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent {
  activeTab:'ue'|'user' = 'ue';
  setTab(tab: 'ue'|'user') {
    this.activeTab = tab;
  }
  constructor() { }
}
