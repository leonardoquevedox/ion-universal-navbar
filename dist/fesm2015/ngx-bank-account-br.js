import { CommonModule } from '@angular/common';
import { App, IonicModule } from 'ionic-angular';
import { Component, Input, Injectable, ViewChild, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonNavTransformer {
    /**
     * @param {?} app
     */
    constructor(app) {
        this.app = app;
        this.isFirstTabSelect = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hideModalOnBack();
    }
    /**
     * @return {?}
     */
    hideModalOnBack() {
        this.app.viewWillEnter.subscribe((view) => {
            /** @type {?} */
            let closeModal = this.lastView && this.lastView.isOverlay;
            if (closeModal)
                this.lastView.dismiss();
            this.lastView = view;
        });
    }
    /**
     * @return {?}
     */
    fixTabSelect() {
        this.tabs.ionChange.subscribe(() => {
            if (!this.isFirstTabSelect)
                return;
            this.isFirstTabSelect = false;
            /** @type {?} */
            let selected = this.tabs.getSelected();
            if (!selected || !selected._views || !(selected._views.length > 0))
                return;
            /** @type {?} */
            let isRoot = selected._views && !(selected._views.length > 1);
            /** @type {?} */
            let isWrongRoot = selected.root !== selected._views[0].id;
            if (isRoot && isWrongRoot)
                selected.setRoot(selected.root);
        });
    }
    /**
     * @return {?}
     */
    screenIsDesktopSized() {
        return window.innerWidth > 768;
    }
    /**
     * @return {?}
     */
    toggleDrawer() {
        this.scrollLeft = !this.scrollLeft;
    }
}
IonNavTransformer.decorators = [
    { type: Component, args: [{
                selector: 'ion-nav-transformer',
                template: "<nav [ngClass]=\"{ 'drawer': screenIsDesktopSized(), 'scroll-left': scrollLeft, 'disable-navigation': options.disableNavigation }\">\n    <section (click)=\"toggleDrawer()\" header text-center *ngIf=\"screenIsDesktopSized()\">\n        <span title>\n            {{options.sidemenu.heading}}\n        </span>\n    </section>\n    <ion-tabs [attr.hide]=\"options.hide\" name=\"ion-tabs\" id=\"ion-tabs\" tabsHighlight=\"tabsHighlight\"\n        tabsLayout=\"icon-top\" tabsPlacement=\"bottom\" [selectedIndex]=\"options.selectedIndex || 0\" #tabs>\n        <ion-tab *ngFor=\"let tab of options.pages\" [root]=\"tab.getRoot()\" [rootParams]=\"tab.getRootParams()\"\n            [tabTitle]=\"tab.getTitle()\" [tabUrlPath]=\"tab.getUrlPath()\" [tabIcon]=\"tab.getIcon()\" [tabBadge]=\"tab.getBadge()\"\n            [show]=\"tab.canShow()\"></ion-tab>\n    </ion-tabs>\n</nav>",
                styles: [""]
            }] },
    { type: Injectable }
];
/** @nocollapse */
IonNavTransformer.ctorParameters = () => [
    { type: App }
];
IonNavTransformer.propDecorators = {
    tabs: [{ type: ViewChild, args: ['tabs',] }],
    options: [{ type: Input, args: ['options',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonNavTransformerModule {
}
IonNavTransformerModule.decorators = [
    { type: NgModule, args: [{
                imports: [IonicModule, CommonModule],
                declarations: [IonNavTransformer],
                exports: [IonNavTransformer]
            },] }
];

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