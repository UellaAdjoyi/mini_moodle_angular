import {Component, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {UeService} from '../services/ue.service';
import {Ue} from '../models/ue/ue.model';

@Component({
  selector: 'app-ue-modal',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './ue-modal.component.html',
  styleUrl: './ue-modal.component.css'
})

export class UeModalComponent {
  @Input() show = false;
  @Input() editUe: Ue | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() refresh = new EventEmitter<void>();

  ueform: FormGroup;
  selectedImage: File | null = null;

  constructor(private fb: FormBuilder, private ueService: UeService) {
    this.ueform = this.fb.group({
      codeUe: [''],
      nomUe: [''],
      libelleUe: [''],
      image: [null],
    });
  }



  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
    }
  }

  submitForm() {
    const formData = new FormData();
    formData.append('codeUe', this.ueform.value.codeUe);
    formData.append('nomUe', this.ueform.value.nomUe);
    formData.append('libelleUe', this.ueform.value.libelleUe);

    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    const action = this.editUe

  }
}
