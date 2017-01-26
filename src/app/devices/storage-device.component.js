"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var state_service_1 = require('../common/state.service');
var StorageDeviceComponent = (function () {
    function StorageDeviceComponent(_stateService) {
        this._stateService = _stateService;
        this.title = 'Atari Storage Devices Page';
        this.body = 'This is the about Storage Devices body';
    }
    StorageDeviceComponent.prototype.ngOnInit = function () {
        this.message = this._stateService.getMessage();
    };
    StorageDeviceComponent.prototype.updateMessage = function (m) {
        this._stateService.setMessage(m);
    };
    StorageDeviceComponent = __decorate([
        core_1.Component({
            selector: 'storage-device',
            template: require('./storage-device.component')
        }), 
        __metadata('design:paramtypes', [state_service_1.StateService])
    ], StorageDeviceComponent);
    return StorageDeviceComponent;
}());
exports.StorageDeviceComponent = StorageDeviceComponent;
//# sourceMappingURL=storage-device.component.js.map