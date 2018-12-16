import { Component, Input, Injectable, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App, IonicModule } from 'ionic-angular';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonUniversalNavbar {
    /**
     * @param {?} app
     */
    constructor(app) {
        this.app = app;
        this.options = {
            pages: [],
            hide: false,
            sidemenu: { heading: '' },
            tabs: {
                layout: 'icon-top',
                placement: 'bottom',
                selectedIndex: 0
            }
        };
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
    isDesktop() {
        return window.innerWidth > 768;
    }
    /**
     * @return {?}
     */
    toggleDrawer() {
        this.scrollLeft = !this.scrollLeft;
    }
}
IonUniversalNavbar.decorators = [
    { type: Component, args: [{
                selector: 'ion-universal-navbar',
                template: "<nav [ngClass]=\"{ 'drawer': isDesktop(), 'scroll-left': scrollLeft}\">\n    <section (click)=\"toggleDrawer()\" header text-center *ngIf=\"isDesktop()\">\n        <span title> {{options.sidemenu.heading}} </span>\n    </section>\n    <ion-tabs name=\"ion-universal-tabs\" id=\"ion-universal-tabs\" tabsHighlight=\"tabsHighlight\" [tabsLayout]=\"options.tabs.layout\"\n        [tabsPlacement]=\"options.tabs.placement\" [selectedIndex]=\"options.tabs.selectedIndex\" #tabs [attr.hide]=\"options.hide\">\n        <ion-tab *ngFor=\"let tab of options.pages\" [root]=\"tab.getRoot()\" [rootParams]=\"tab.getRootParams()\" [tabTitle]=\"tab.getTitle()\"\n            [tabUrlPath]=\"tab.getUrlPath()\" [tabIcon]=\"tab.getIcon()\" [tabBadge]=\"tab.getBadge()\" [show]=\"tab.canShow()\">\n        </ion-tab>\n    </ion-tabs>\n</nav>",
                styles: [":host [header],ion-navbar[color=primary] .toolbar-background.toolbar-background-ios,ion-navbar[color=primary] .toolbar-background.toolbar-background-md{background:#0f0;background:linear-gradient(to bottom,#0f0 0,#00ff2b 100%)}:host{height:auto;display:block;z-index:100}:host .disable-navigation .tabbar *{pointer-events:none;opacity:.5}:host .drawer{width:100vw;height:100vw}:host .drawer [header]{background:#0f0;background:linear-gradient(to bottom,#0f0 0,#00ff2b 100%);height:calc(56px - 0px);width:calc(280px);font-size:16px;font-weight:400;color:#fff;padding-top:16px;border:#0f0;cursor:pointer;position:absolute;z-index:999999;margin-bottom:-2px;margin-right:-2px;box-shadow:1px 1px 5px rgba(0,0,0,.2)}:host .drawer [header] ion-icon{vertical-align:middle;font-size:20px;margin-left:5px}:host .drawer [footer]{position:fixed;bottom:20px;max-width:280px}:host .drawer [footer] [footer-text]{color:#efefef;width:280px;text-align:center}@media (min-width:768px){:host ion-navbar{border-left:1px solid #0f0}:host ion-tabs.tabs ion-tab{left:calc(0px + 280px);max-width:calc(100vw - 280px);background-color:#fff}:host ion-tabs.tabs ion-tab .scroll-content{margin-bottom:0}:host ion-tabs.tabs ion-tab ion-title{text-align:center}:host ion-tabs.tabs .tabbar.show-tabbar{display:block;max-width:280px;position:relative;top:56px;box-shadow:1px 2px 4px rgba(0,0,0,.4);height:100vh;background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;padding:10px}:host ion-tabs.tabs .tabbar.show-tabbar *{transition-property:all;transition-duration:.25s}:host ion-tabs.tabs a.tab-button{text-align:left;display:block;padding:5px 10px 10px;max-width:999px;border-radius:30px;background:#fff;margin-bottom:10px}:host ion-tabs.tabs a.tab-button .tab-button-icon,:host ion-tabs.tabs a.tab-button .tab-button-text{vertical-align:middle;color:#888;display:inline-block;margin-left:10px}:host ion-tabs.tabs a.tab-button .tab-button-icon:before{font-size:27px}:host ion-tabs.tabs a.tab-button .tab-button-text{padding:10px 10px 10px 0}:host ion-tabs.tabs a.tab-button .tab-badge{left:32px;top:12px;padding-top:2px}:host ion-tabs.tabs a.tab-button[aria-selected=true]{padding:5px 10px 10px;font-weight:700;background:#0f0;background:linear-gradient(to bottom,#0f0 0,#00ff2b 100%);box-shadow:0 0 4px rgba(0,0,0,.4)}:host ion-tabs.tabs a.tab-button[aria-selected=true] ion-icon.tab-button-icon,:host ion-tabs.tabs a.tab-button[aria-selected=true] span.tab-button-text{-webkit-transform:none;transform:none;color:#fff}:host ion-tabs.tabs a.tab-button:hover,:host ion-tabs.tabs a.tab-button[aria-selected=true]{padding-left:75px;opacity:1}:host ion-tabs.tabs a.tab-button:hover .tab-badge,:host ion-tabs.tabs a.tab-button[aria-selected=true] .tab-badge{margin-left:66px}:host ion-tabs.tabs a.tab-button.tab-hidden{display:none}}@media (max-width:768px){:host ion-tabs .tabbar{transition-property:all;transition-duration:.35s}:host ion-tabs .tabbar .tab-button .tab-button-text{display:none}:host ion-tabs .tabbar .tab-button .tab-button-icon{color:rgba(0,0,0,.4)}:host ion-tabs .tabbar .tab-button .tab-button-icon:before{font-size:30px}:host ion-tabs .tabbar .tab-button[aria-selected=true] .tab-button-icon,:host ion-tabs .tabbar .tab-button[aria-selected=true] .tab-button-text{color:#3f3}:host ion-tabs .tabbar .tab-badge{padding-top:3px;margin-top:16px;margin-right:16px}:host ion-tabs[hide=true] .tabbar{margin-bottom:-100%}:host ion-tabs[hide=true] ion-tab .fixed-content,:host ion-tabs[hide=true] ion-tab .scroll-content{margin-bottom:0}}"]
            }] },
    { type: Injectable }
];
/** @nocollapse */
IonUniversalNavbar.ctorParameters = () => [
    { type: App }
];
IonUniversalNavbar.propDecorators = {
    options: [{ type: Input, args: ['options',] }],
    tabs: [{ type: ViewChild, args: ['tabs',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonUniversalNavbarModule {
}
IonUniversalNavbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, IonicModule],
                declarations: [IonUniversalNavbar],
                exports: [IonUniversalNavbar]
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

export { IonUniversalNavbar, IonUniversalNavbarModule };

//# sourceMappingURL=ion-universal-navbar.js.map