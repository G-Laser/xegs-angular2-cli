import {Component} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'app-storage-device',
  template: require('./storage-device.component')
})
export class StorageDeviceComponent {
  title: string = 'Atari Storage Devices Page';
  body:  string = 'This is the about Storage Devices body';
  message: string;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
