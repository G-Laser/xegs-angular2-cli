import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-storage-device-view',
  templateUrl: './storage-device-view.component.html',
  styleUrls: ['./storage-device-view.component.css']
})

export class StorageDeviceViewComponent implements OnInit {

  public storageDeviceForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.storageDeviceForm = this._fb.group({
      manufacturer: ['', <any>Validators.required],
      productName: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      hardwareCreator: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      softwareCreator: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      countryOfOperaton: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
      cost: this._fb.group({
        price: ['', <any>Validators.required],
        currency: ['']
      }),
      shipping: this._fb.group({
        shippingCost: ['', <any>Validators.required],
        shippingDescription: ['']
      }),
      atariInterface: ['', <any>Validators.required],
      hardwareVersion: ['', <any>Validators.required],
      firmwareVersion: [''],
      hardwareLicenceType: ['', <any>Validators.required],
      passthrough: ['', <any>Validators.required],
      externalStorage: this._fb.group({
        storageType: ['', <any>Validators.required],
        minSize: ['', <any>Validators.required],
        maxSize: ['', <any>Validators.required],
        removable: [''],
        hotSwapable: ['']
      }),
      insternalStorageSize: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
      realTimeClock: [''],
      caseColor: [''],
      display: this._fb.group({
        onDeviceDisplay: [''],
        resolutiion: this._fb.group({
          format: ['', <any>Validators.required],
          x: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
          y: ['', [<any>Validators.required, <any>Validators.minLength(1)]]
        }),
        touchSensitive: ['']
      }),
      onDeviceNavigation: [''],
      statusLED: [''],
      firmUpgradable: [''],
      additionalRequirements: [''],
      additionalCosts: [''],
      boardConstruction: [''],
      atariMinRam: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
      atariModelSupport: ['', <any>Validators.required,],
      softwareLicence: ['', <any>Validators.required],
      softwareDownloadURL: [''],
      onScreenMenu: this._fb.group({
        fileCountLimit: [''],
        fileNameDisplayedLength: [''],
        fileSearch: ['', <any>Validators.required],
        fileSort: [''],
        directorySupport: [''],
        fileDirHiding: [''],
        keyboardNav: [''],
        joystickNav: ['']
      }),
      formatSupport: <any>Validators.required,
      noOfFloppys: ['']
    })
  }
};


