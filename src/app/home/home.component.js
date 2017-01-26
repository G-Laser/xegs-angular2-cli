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
var HomeComponent = (function () {
    function HomeComponent(_stateService) {
        this._stateService = _stateService;
        this.title = 'Home Page';
        this.body = 'This is the about home body';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.message = this._stateService.getMessage();
    };
    HomeComponent.prototype.updateMessage = function (m) {
        this._stateService.setMessage(m);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: require('./home.component')
        }), 
        __metadata('design:paramtypes', [state_service_1.StateService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map