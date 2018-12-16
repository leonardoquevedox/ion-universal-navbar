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
export { IonNavTransformer };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLW5hdi10cmFuc2Zvcm1lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYmFuay1hY2NvdW50LWJyLyIsInNvdXJjZXMiOlsiaW9uLW5hdi10cmFuc2Zvcm1lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFbkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRXpDO0lBZ0JJLDJCQUFvQixHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUo1QixxQkFBZ0IsR0FBWSxJQUFJLENBQUE7SUFJQSxDQUFDOzs7O0lBRWpDLG9DQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUMxQixDQUFDOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJOztnQkFDOUIsVUFBVSxHQUFHLEtBQUksQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTO1lBQ3pELElBQUksVUFBVTtnQkFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ3ZDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQzs7OztJQUVELHdDQUFZOzs7SUFBWjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCO2dCQUFFLE9BQU07WUFDbEMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQTs7Z0JBQ3pCLFFBQVEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUFFLE9BQU07O2dCQUN0RSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztnQkFDekQsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pELElBQUksTUFBTSxJQUFJLFdBQVc7Z0JBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDOUQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOzs7O0lBRUQsZ0RBQW9COzs7SUFBcEI7UUFDSSxPQUFPLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFBO0lBQ2xDLENBQUM7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN0QyxDQUFDOztnQkFoREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGszQkFBaUQ7O2lCQUVwRDtnQkFFQSxVQUFVOzs7O2dCQVpGLEdBQUc7Ozt1QkFlUCxTQUFTLFNBQUMsTUFBTTswQkFDaEIsS0FBSyxTQUFDLFNBQVM7O0lBdUNwQix3QkFBQztDQUFBLEFBakRELElBaURDO1NBMUNZLGlCQUFpQjs7O0lBRTFCLGlDQUE0Qjs7SUFDNUIsb0NBQThCOztJQUU5Qiw2Q0FBZ0M7O0lBQ2hDLHVDQUFtQjs7SUFDbkIscUNBQWE7Ozs7O0lBRUQsZ0NBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBSZXNwb25zaXZlIG5hdmJhciBjb21wb25lbnQuXG4gKi9cblxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnaW9uaWMtYW5ndWxhcidcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaW9uLW5hdi10cmFuc2Zvcm1lcicsXG4gICAgdGVtcGxhdGVVcmw6ICdpb24tbmF2LXRyYW5zZm9ybWVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnaW9uLW5hdi10cmFuc2Zvcm1lci5jb21wb25lbnQuc2NzcyddXG59KVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW9uTmF2VHJhbnNmb3JtZXIge1xuXG4gICAgQFZpZXdDaGlsZCgndGFicycpIHRhYnM6IGFueVxuICAgIEBJbnB1dCgnb3B0aW9ucycpIG9wdGlvbnM6IGFueVxuXG4gICAgaXNGaXJzdFRhYlNlbGVjdDogYm9vbGVhbiA9IHRydWVcbiAgICBzY3JvbGxMZWZ0OiBib29sZWFuXG4gICAgbGFzdFZpZXc6IGFueVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHA6IEFwcCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5oaWRlTW9kYWxPbkJhY2soKVxuICAgIH1cblxuICAgIGhpZGVNb2RhbE9uQmFjaygpIHtcbiAgICAgICAgdGhpcy5hcHAudmlld1dpbGxFbnRlci5zdWJzY3JpYmUoKHZpZXcpID0+IHtcbiAgICAgICAgICAgIGxldCBjbG9zZU1vZGFsID0gdGhpcy5sYXN0VmlldyAmJiB0aGlzLmxhc3RWaWV3LmlzT3ZlcmxheVxuICAgICAgICAgICAgaWYgKGNsb3NlTW9kYWwpIHRoaXMubGFzdFZpZXcuZGlzbWlzcygpXG4gICAgICAgICAgICB0aGlzLmxhc3RWaWV3ID0gdmlld1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpeFRhYlNlbGVjdCgpIHtcbiAgICAgICAgdGhpcy50YWJzLmlvbkNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RUYWJTZWxlY3QpIHJldHVyblxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0VGFiU2VsZWN0ID0gZmFsc2VcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMudGFicy5nZXRTZWxlY3RlZCgpXG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkIHx8ICFzZWxlY3RlZC5fdmlld3MgfHwgIShzZWxlY3RlZC5fdmlld3MubGVuZ3RoID4gMCkpIHJldHVyblxuICAgICAgICAgICAgbGV0IGlzUm9vdCA9IHNlbGVjdGVkLl92aWV3cyAmJiAhKHNlbGVjdGVkLl92aWV3cy5sZW5ndGggPiAxKVxuICAgICAgICAgICAgbGV0IGlzV3JvbmdSb290ID0gc2VsZWN0ZWQucm9vdCAhPT0gc2VsZWN0ZWQuX3ZpZXdzWzBdLmlkXG4gICAgICAgICAgICBpZiAoaXNSb290ICYmIGlzV3JvbmdSb290KSBzZWxlY3RlZC5zZXRSb290KHNlbGVjdGVkLnJvb3QpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2NyZWVuSXNEZXNrdG9wU2l6ZWQoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OFxuICAgIH1cblxuICAgIHRvZ2dsZURyYXdlcigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0gIXRoaXMuc2Nyb2xsTGVmdFxuICAgIH1cbn1cbiJdfQ==