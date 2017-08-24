import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-storage-device-admin',
  templateUrl: './edit-storage-device.component.html',
  styleUrls: ['./edit-storage-device.component.css']
})
export class EditStorageDeviceComponent implements OnInit {

  deviceForm : FormGroup; 
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.deviceForm = this.fb.group({

    })
  }

  ngOnInit() {
  }

  addComponent() {

  }

  deleteComponent() {
    
  }

}
