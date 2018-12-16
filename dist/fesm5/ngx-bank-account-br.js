import { CommonModule } from '@angular/common';
import { App, IonicModule } from 'ionic-angular';
import { Component, Input, Injectable, ViewChild, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonNavTransformer = /** @class */ (function () {
    function IonNavTransformer(app) {
        this.app = app;
        this.isFirstTabSelect = true;
    }
    /**
     * @return {?}
     */
    IonNavTransformer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.hideModalOnBack();
    };
    /**
     * @return {?}
     */
    IonNavTransformer.prototype.hideModalOnBack = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.app.viewWillEnter.subscribe(function (view) {
            /** @type {?} */
            var closeModal = _this.lastView && _this.lastView.isOverlay;
            if (closeModal)
                _this.lastView.dismiss();
            _this.lastView = view;
        });
    };
    /**
     * @return {?}
     */
    IonNavTransformer.prototype.fixTabSelect = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tabs.ionChange.subscribe(function () {
            if (!_this.isFirstTabSelect)
                return;
            _this.isFirstTabSelect = false;
            /** @type {?} */
            var selected = _this.tabs.getSelected();
            if (!selected || !selected._views || !(selected._views.length > 0))
                return;
            /** @type {?} */
            var isRoot = selected._views && !(selected._views.length > 1);
            /** @type {?} */
            var isWrongRoot = selected.root !== selected._views[0].id;
            if (isRoot && isWrongRoot)
                selected.setRoot(selected.root);
        });
    };
    /**
     * @return {?}
     */
    IonNavTransformer.prototype.screenIsDesktopSized = /**
     * @return {?}
     */
    function () {
        return window.innerWidth > 768;
    };
    /**
     * @return {?}
     */
    IonNavTransformer.prototype.toggleDrawer = /**
     * @return {?}
     */
    function () {
        this.scrollLeft = !this.scrollLeft;
    };
    IonNavTransformer.decorators = [
        { type: Component, args: [{
                    selector: 'ion-nav-transformer',
                    template: "<nav [ngClass]=\"{ 'drawer': screenIsDesktopSized(), 'scroll-left': scrollLeft, 'disable-navigation': options.disableNavigation }\">\n    <section (click)=\"toggleDrawer()\" header text-center *ngIf=\"screenIsDesktopSized()\">\n        <span title>\n            {{options.sidemenu.heading}}\n        </span>\n    </section>\n    <ion-tabs [attr.hide]=\"options.hide\" name=\"ion-tabs\" id=\"ion-tabs\" tabsHighlight=\"tabsHighlight\"\n        tabsLayout=\"icon-top\" tabsPlacement=\"bottom\" [selectedIndex]=\"options.selectedIndex || 0\" #tabs>\n        <ion-tab *ngFor=\"let tab of options.pages\" [root]=\"tab.getRoot()\" [rootParams]=\"tab.getRootParams()\"\n            [tabTitle]=\"tab.getTitle()\" [tabUrlPath]=\"tab.getUrlPath()\" [tabIcon]=\"tab.getIcon()\" [tabBadge]=\"tab.getBadge()\"\n            [show]=\"tab.canShow()\"></ion-tab>\n    </ion-tabs>\n</nav>",
                    styles: [""]
                }] },
        { type: Injectable }
    ];
    /** @nocollapse */
    IonNavTransformer.ctorParameters = function () { return [
        { type: App }
    ]; };
    IonNavTransformer.propDecorators = {
        tabs: [{ type: ViewChild, args: ['tabs',] }],
        options: [{ type: Input, args: ['options',] }]
    };
    return IonNavTransformer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonNavTransformerModule = /** @class */ (function () {
    function IonNavTransformerModule() {
    }
    IonNavTransformerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [IonicModule, CommonModule],
                    declarations: [IonNavTransformer],
                    exports: [IonNavTransformer]
                },] }
    ];
    return IonNavTransformerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IonNavTransformerModule, IonNavTransformer as ɵa };

//# sourceMappingURL=ngx-bank-account-br.js.map