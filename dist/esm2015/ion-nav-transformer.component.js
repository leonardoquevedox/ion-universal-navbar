/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Responsive navbar component.
 */
import { App } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ViewChild } from '@angular/core';
export class IonNavTransformer {
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
if (false) {
    /** @type {?} */
    IonNavTransformer.prototype.tabs;
    /** @type {?} */
    IonNavTransformer.prototype.options;
    /** @type {?} */
    IonNavTransformer.prototype.isFirstTabSelect;
    /** @type {?} */
    IonNavTransformer.prototype.scrollLeft;
    /** @type {?} */
    IonNavTransformer.prototype.lastView;
    /**
     * @type {?}
     * @private
     */
    IonNavTransformer.prototype.app;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLW5hdi10cmFuc2Zvcm1lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmFuay1hY2NvdW50LWJyLyIsInNvdXJjZXMiOlsiaW9uLW5hdi10cmFuc2Zvcm1lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFbkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBU3pDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFTMUIsWUFBb0IsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFKNUIscUJBQWdCLEdBQVksSUFBSSxDQUFBO0lBSUEsQ0FBQzs7OztJQUVqQyxRQUFRO1FBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQzFCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7O2dCQUNsQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDekQsSUFBSSxVQUFVO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOzs7O0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQUUsT0FBTTtZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFBOztnQkFDekIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQUUsT0FBTTs7Z0JBQ3RFLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O2dCQUN6RCxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekQsSUFBSSxNQUFNLElBQUksV0FBVztnQkFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5RCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDaEIsT0FBTyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTtJQUNsQyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3RDLENBQUM7OztZQWhESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsazNCQUFpRDs7YUFFcEQ7WUFFQSxVQUFVOzs7O1lBWkYsR0FBRzs7O21CQWVQLFNBQVMsU0FBQyxNQUFNO3NCQUNoQixLQUFLLFNBQUMsU0FBUzs7OztJQURoQixpQ0FBNEI7O0lBQzVCLG9DQUE4Qjs7SUFFOUIsNkNBQWdDOztJQUNoQyx1Q0FBbUI7O0lBQ25CLHFDQUFhOzs7OztJQUVELGdDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gUmVzcG9uc2l2ZSBuYXZiYXIgY29tcG9uZW50LlxuICovXG5cbmltcG9ydCB7IEFwcCB9IGZyb20gJ2lvbmljLWFuZ3VsYXInXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lvbi1uYXYtdHJhbnNmb3JtZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnaW9uLW5hdi10cmFuc2Zvcm1lci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2lvbi1uYXYtdHJhbnNmb3JtZXIuY29tcG9uZW50LnNjc3MnXVxufSlcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElvbk5hdlRyYW5zZm9ybWVyIHtcblxuICAgIEBWaWV3Q2hpbGQoJ3RhYnMnKSB0YWJzOiBhbnlcbiAgICBASW5wdXQoJ29wdGlvbnMnKSBvcHRpb25zOiBhbnlcblxuICAgIGlzRmlyc3RUYWJTZWxlY3Q6IGJvb2xlYW4gPSB0cnVlXG4gICAgc2Nyb2xsTGVmdDogYm9vbGVhblxuICAgIGxhc3RWaWV3OiBhbnlcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwOiBBcHApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsT25CYWNrKClcbiAgICB9XG5cbiAgICBoaWRlTW9kYWxPbkJhY2soKSB7XG4gICAgICAgIHRoaXMuYXBwLnZpZXdXaWxsRW50ZXIuc3Vic2NyaWJlKCh2aWV3KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2xvc2VNb2RhbCA9IHRoaXMubGFzdFZpZXcgJiYgdGhpcy5sYXN0Vmlldy5pc092ZXJsYXlcbiAgICAgICAgICAgIGlmIChjbG9zZU1vZGFsKSB0aGlzLmxhc3RWaWV3LmRpc21pc3MoKVxuICAgICAgICAgICAgdGhpcy5sYXN0VmlldyA9IHZpZXdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaXhUYWJTZWxlY3QoKSB7XG4gICAgICAgIHRoaXMudGFicy5pb25DaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0VGFiU2VsZWN0KSByZXR1cm5cbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdFRhYlNlbGVjdCA9IGZhbHNlXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnRhYnMuZ2V0U2VsZWN0ZWQoKVxuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZCB8fCAhc2VsZWN0ZWQuX3ZpZXdzIHx8ICEoc2VsZWN0ZWQuX3ZpZXdzLmxlbmd0aCA+IDApKSByZXR1cm5cbiAgICAgICAgICAgIGxldCBpc1Jvb3QgPSBzZWxlY3RlZC5fdmlld3MgJiYgIShzZWxlY3RlZC5fdmlld3MubGVuZ3RoID4gMSlcbiAgICAgICAgICAgIGxldCBpc1dyb25nUm9vdCA9IHNlbGVjdGVkLnJvb3QgIT09IHNlbGVjdGVkLl92aWV3c1swXS5pZFxuICAgICAgICAgICAgaWYgKGlzUm9vdCAmJiBpc1dyb25nUm9vdCkgc2VsZWN0ZWQuc2V0Um9vdChzZWxlY3RlZC5yb290KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNjcmVlbklzRGVza3RvcFNpemVkKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPiA3NjhcbiAgICB9XG5cbiAgICB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9ICF0aGlzLnNjcm9sbExlZnRcbiAgICB9XG59XG4iXX0=