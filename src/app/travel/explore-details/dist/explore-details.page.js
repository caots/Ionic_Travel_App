"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExploreDetailsPage = void 0;
var core_1 = require("@angular/core");
var ExploreDetailsPage = /** @class */ (function () {
    function ExploreDetailsPage(activateRouter, router, travelService) {
        this.activateRouter = activateRouter;
        this.router = router;
        this.travelService = travelService;
        this.travel = {
            id: 0
        };
        this.isLoading = true;
    }
    ExploreDetailsPage.prototype.ngOnInit = function () {
        this.getTravelById();
    };
    ExploreDetailsPage.prototype.doRefresh = function (event) {
        this.getTravelById();
        setTimeout(function () {
            event.target.complete();
        }, 1000);
    };
    ExploreDetailsPage.prototype.getTravelById = function () {
        var _this = this;
        this.isLoading = true;
        this.activateRouter.params.subscribe(function (data) {
            var id = data.id;
            _this.subcription = _this.travelService.getTravelById(id).subscribe(function (data) {
                _this.travel = data;
                _this.isLoading = false;
            });
        });
    };
    ExploreDetailsPage.prototype.ngOnDestroy = function () {
        if (this.subcription) {
            this.subcription.unsubscribe();
        }
    };
    ExploreDetailsPage.prototype.goBack = function () {
        this.router.navigateByUrl('/travel');
    };
    ExploreDetailsPage = __decorate([
        core_1.Component({
            selector: 'app-explore-details',
            templateUrl: './explore-details.page.html',
            styleUrls: ['./explore-details.page.scss']
        })
    ], ExploreDetailsPage);
    return ExploreDetailsPage;
}());
exports.ExploreDetailsPage = ExploreDetailsPage;
