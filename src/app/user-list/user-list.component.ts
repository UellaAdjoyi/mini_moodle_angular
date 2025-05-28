import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {UserModalComponent} from '../user-modal/user-modal.component';

@Component({
  selector: 'app-user-list',
  imports: [
    UserModalComponent,
    NgIf,
  ],
  templateUrl: './user-list.component.html',
  standalone: true,
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  showModal = false;

  openAddModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSaveUser($event: FormData) {

  }
}
