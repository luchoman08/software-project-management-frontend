"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var map_1 = require('rxjs/operators/map');
var UserStoryService = (function () {
    function UserStoryService(apiService) {
        this.apiService = apiService;
    }
    UserStoryService.prototype.get = function (slug) {
        return this.apiService.get('/userstories/' + slug)
            .pipe(map_1.map(function (data) { return data.article; }));
    };
    UserStoryService = __decorate([
        core_1.Injectable()
    ], UserStoryService);
    return UserStoryService;
}());
exports.UserStoryService = UserStoryService;
