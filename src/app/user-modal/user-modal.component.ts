import {Component, Input, Output,EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-user-modal',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.css'
})
export class UserModalComponent {

  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<FormData>();
  selectedFile: File | null = null;
  isProfSelected = false;
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      date_naissance: [''],
      photo: [null],
      service_prof: [''],
      bureau_prof: [''],
      dernier_acces: [''],
      roles: [[], Validators.required]
    });

  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) return;

    const formValues = this.userForm.value;
    const formData = new FormData();


    // Ajouter le fichier sélectionné s'il existe
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile);
    }

    this.save.emit(formData);
    this.close.emit();
  }
}
