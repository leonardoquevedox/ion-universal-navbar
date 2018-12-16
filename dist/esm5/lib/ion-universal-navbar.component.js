/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description universal navbar component.
 */
import { App } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ViewChild } from '@angular/core';
var IonUniversalNavbar = /** @class */ (function () {
    function IonUniversalNavbar(app) {
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
    IonUniversalNavbar.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.hideModalOnBack();
    };
    /**
     * @return {?}
     */
    IonUniversalNavbar.prototype.hideModalOnBack = /**
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
    IonUniversalNavbar.prototype.fixTabSelect = /**
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
    IonUniversalNavbar.prototype.isDesktop = /**
     * @return {?}
     */
    function () {
        return window.innerWidth > 768;
    };
    /**
     * @return {?}
     */
    IonUniversalNavbar.prototype.toggleDrawer = /**
     * @return {?}
     */
    function () {
        this.scrollLeft = !this.scrollLeft;
    };
    IonUniversalNavbar.decorators = [
        { type: Component, args: [{
                    selector: 'ion-universal-navbar',
                    template: "<nav [ngClass]=\"{ 'drawer': isDesktop(), 'scroll-left': scrollLeft}\">\n    <section (click)=\"toggleDrawer()\" header text-center *ngIf=\"isDesktop()\">\n        <span title> {{options.sidemenu.heading}} </span>\n    </section>\n    <ion-tabs name=\"ion-universal-tabs\" id=\"ion-universal-tabs\" tabsHighlight=\"tabsHighlight\" [tabsLayout]=\"options.tabs.layout\"\n        [tabsPlacement]=\"options.tabs.placement\" [selectedIndex]=\"options.tabs.selectedIndex\" #tabs [attr.hide]=\"options.hide\">\n        <ion-tab *ngFor=\"let tab of options.pages\" [root]=\"tab.getRoot()\" [rootParams]=\"tab.getRootParams()\" [tabTitle]=\"tab.getTitle()\"\n            [tabUrlPath]=\"tab.getUrlPath()\" [tabIcon]=\"tab.getIcon()\" [tabBadge]=\"tab.getBadge()\" [show]=\"tab.canShow()\">\n        </ion-tab>\n    </ion-tabs>\n</nav>",
                    styles: [":host [header],ion-navbar[color=primary] .toolbar-background.toolbar-background-ios,ion-navbar[color=primary] .toolbar-background.toolbar-background-md{background:#0f0;background:linear-gradient(to bottom,#0f0 0,#00ff2b 100%)}:host{height:auto;display:block;z-index:100}:host .disable-navigation .tabbar *{pointer-events:none;opacity:.5}:host .drawer{width:100vw;height:100vw}:host .drawer [header]{background:#0f0;background:linear-gradient(to bottom,#0f0 0,#00ff2b 100%);height:calc(56px - 0px);width:calc(280px);font-size:16px;font-weight:400;color:#fff;padding-top:16px;border:#0f0;cursor:pointer;position:absolute;z-index:999999;margin-bottom:-2px;margin-right:-2px;box-shadow:1px 1px 5px rgba(0,0,0,.2)}:host .drawer [header] ion-icon{vertical-align:middle;font-size:20px;margin-left:5px}:host .drawer [footer]{position:fixed;bottom:20px;max-width:280px}:host .drawer [footer] [footer-text]{color:#efefef;width:280px;text-align:center}@media (min-width:768px){:host ion-navbar{border-left:1px solid #0f0}:host ion-tabs.tabs ion-tab{left:calc(0px + 280px);max-width:calc(100vw - 280px);background-color:#fff}:host ion-tabs.tabs ion-tab .scroll-content{margin-bottom:0}:host ion-tabs.tabs ion-tab ion-title{text-align:center}:host ion-tabs.tabs .tabbar.show-tabbar{display:block;max-width:280px;position:relative;top:56px;box-shadow:1px 2px 4px rgba(0,0,0,.4);height:100vh;background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;padding:10px}:host ion-tabs.tabs .tabbar.show-tabbar *{transition-property:all;transition-duration:.25s}:host ion-tabs.tabs a.tab-button{text-align:left;display:block;padding:5px 10px 10px;max-width:999px;border-radius:30px;background:#fff;margin-bottom:10px}:host ion-tabs.tabs a.tab-button .tab-button-icon,:host ion-tabs.tabs a.tab-button .tab-button-text{vertical-align:middle;color:#888;display:inline-block;margin-left:10px}:host ion-tabs.tabs a.tab-button .tab-button-icon:before{font-size:27px}:host ion-tabs.tabs a.tab-button .tab-button-text{padding:10px 10px 10px 0}:host ion-tabs.tabs a.tab-button .tab-badge{left:32px;top:12px;padding-top:2px}:host ion-tabs.tabs a.tab-button[aria-selected=true]{padding:5px 10px 10px;font-weight:700;background:#0f0;background:linear-gradient(to bottom,#0f0 0,#00ff2b 100%);box-shadow:0 0 4px rgba(0,0,0,.4)}:host ion-tabs.tabs a.tab-button[aria-selected=true] ion-icon.tab-button-icon,:host ion-tabs.tabs a.tab-button[aria-selected=true] span.tab-button-text{-webkit-transform:none;transform:none;color:#fff}:host ion-tabs.tabs a.tab-button:hover,:host ion-tabs.tabs a.tab-button[aria-selected=true]{padding-left:75px;opacity:1}:host ion-tabs.tabs a.tab-button:hover .tab-badge,:host ion-tabs.tabs a.tab-button[aria-selected=true] .tab-badge{margin-left:66px}:host ion-tabs.tabs a.tab-button.tab-hidden{display:none}}@media (max-width:768px){:host ion-tabs .tabbar{transition-property:all;transition-duration:.35s}:host ion-tabs .tabbar .tab-button .tab-button-text{display:none}:host ion-tabs .tabbar .tab-button .tab-button-icon{color:rgba(0,0,0,.4)}:host ion-tabs .tabbar .tab-button .tab-button-icon:before{font-size:30px}:host ion-tabs .tabbar .tab-button[aria-selected=true] .tab-button-icon,:host ion-tabs .tabbar .tab-button[aria-selected=true] .tab-button-text{color:#3f3}:host ion-tabs .tabbar .tab-badge{padding-top:3px;margin-top:16px;margin-right:16px}:host ion-tabs[hide=true] .tabbar{margin-bottom:-100%}:host ion-tabs[hide=true] ion-tab .fixed-content,:host ion-tabs[hide=true] ion-tab .scroll-content{margin-bottom:0}}"]
                }] },
        { type: Injectable }
    ];
    /** @nocollapse */
    IonUniversalNavbar.ctorParameters = function () { return [
        { type: App }
    ]; };
    IonUniversalNavbar.propDecorators = {
        options: [{ type: Input, args: ['options',] }],
        tabs: [{ type: ViewChild, args: ['tabs',] }]
    };
    return IonUniversalNavbar;
}());
export { IonUniversalNavbar };
if (false) {
    /** @type {?} */
    IonUniversalNavbar.prototype.options;
    /** @type {?} */
    IonUniversalNavbar.prototype.tabs;
    /** @type {?} */
    IonUniversalNavbar.prototype.isFirstTabSelect;
    /** @type {?} */
    IonUniversalNavbar.prototype.scrollLeft;
    /** @type {?} */
    IonUniversalNavbar.prototype.lastView;
    /**
     * @type {?}
     * @private
     */
    IonUniversalNavbar.prototype.app;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uLXVuaXZlcnNhbC1uYXZiYXIvIiwic291cmNlcyI6WyJsaWIvaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRW5DLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUV6QztJQTBCSSw0QkFBb0IsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFqQlYsWUFBTyxHQUFRO1lBQzdCLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ3pCLElBQUksRUFBRTtnQkFDRixNQUFNLEVBQUUsVUFBVTtnQkFDbEIsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLGFBQWEsRUFBRSxDQUFDO2FBQ25CO1NBQ0osQ0FBQTtRQUlELHFCQUFnQixHQUFZLElBQUksQ0FBQTtJQUlBLENBQUM7Ozs7SUFFakMscUNBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQzFCLENBQUM7Ozs7SUFFRCw0Q0FBZTs7O0lBQWY7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7O2dCQUM5QixVQUFVLEdBQUcsS0FBSSxDQUFDLFFBQVEsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDekQsSUFBSSxVQUFVO2dCQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDdkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOzs7O0lBRUQseUNBQVk7OztJQUFaO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0I7Z0JBQUUsT0FBTTtZQUNsQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFBOztnQkFDekIsUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQUUsT0FBTTs7Z0JBQ3RFLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O2dCQUN6RCxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekQsSUFBSSxNQUFNLElBQUksV0FBVztnQkFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5RCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Ozs7SUFFRCxzQ0FBUzs7O0lBQVQ7UUFDSSxPQUFPLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFBO0lBQ2xDLENBQUM7Ozs7SUFFRCx5Q0FBWTs7O0lBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUN0QyxDQUFDOztnQkExREosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLG8wQkFBa0Q7O2lCQUVyRDtnQkFFQSxVQUFVOzs7O2dCQVpGLEdBQUc7OzswQkFlUCxLQUFLLFNBQUMsU0FBUzt1QkFXZixTQUFTLFNBQUMsTUFBTTs7SUF1Q3JCLHlCQUFDO0NBQUEsQUEzREQsSUEyREM7U0FwRFksa0JBQWtCOzs7SUFFM0IscUNBU0M7O0lBRUQsa0NBQTRCOztJQUU1Qiw4Q0FBZ0M7O0lBQ2hDLHdDQUFtQjs7SUFDbkIsc0NBQWE7Ozs7O0lBRUQsaUNBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiB1bml2ZXJzYWwgbmF2YmFyIGNvbXBvbmVudC5cbiAqL1xuXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdpb25pYy1hbmd1bGFyJ1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpb24tdW5pdmVyc2FsLW5hdmJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICdpb24tdW5pdmVyc2FsLW5hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2lvbi11bml2ZXJzYWwtbmF2YmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJb25Vbml2ZXJzYWxOYXZiYXIge1xuXG4gICAgQElucHV0KCdvcHRpb25zJykgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBwYWdlczogW10sXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBzaWRlbWVudTogeyBoZWFkaW5nOiAnJyB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgICBsYXlvdXQ6ICdpY29uLXRvcCcsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZCgndGFicycpIHRhYnM6IGFueVxuXG4gICAgaXNGaXJzdFRhYlNlbGVjdDogYm9vbGVhbiA9IHRydWVcbiAgICBzY3JvbGxMZWZ0OiBib29sZWFuXG4gICAgbGFzdFZpZXc6IGFueVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHA6IEFwcCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5oaWRlTW9kYWxPbkJhY2soKVxuICAgIH1cblxuICAgIGhpZGVNb2RhbE9uQmFjaygpIHtcbiAgICAgICAgdGhpcy5hcHAudmlld1dpbGxFbnRlci5zdWJzY3JpYmUoKHZpZXcpID0+IHtcbiAgICAgICAgICAgIGxldCBjbG9zZU1vZGFsID0gdGhpcy5sYXN0VmlldyAmJiB0aGlzLmxhc3RWaWV3LmlzT3ZlcmxheVxuICAgICAgICAgICAgaWYgKGNsb3NlTW9kYWwpIHRoaXMubGFzdFZpZXcuZGlzbWlzcygpXG4gICAgICAgICAgICB0aGlzLmxhc3RWaWV3ID0gdmlld1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZpeFRhYlNlbGVjdCgpIHtcbiAgICAgICAgdGhpcy50YWJzLmlvbkNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RUYWJTZWxlY3QpIHJldHVyblxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0VGFiU2VsZWN0ID0gZmFsc2VcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMudGFicy5nZXRTZWxlY3RlZCgpXG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkIHx8ICFzZWxlY3RlZC5fdmlld3MgfHwgIShzZWxlY3RlZC5fdmlld3MubGVuZ3RoID4gMCkpIHJldHVyblxuICAgICAgICAgICAgbGV0IGlzUm9vdCA9IHNlbGVjdGVkLl92aWV3cyAmJiAhKHNlbGVjdGVkLl92aWV3cy5sZW5ndGggPiAxKVxuICAgICAgICAgICAgbGV0IGlzV3JvbmdSb290ID0gc2VsZWN0ZWQucm9vdCAhPT0gc2VsZWN0ZWQuX3ZpZXdzWzBdLmlkXG4gICAgICAgICAgICBpZiAoaXNSb290ICYmIGlzV3JvbmdSb290KSBzZWxlY3RlZC5zZXRSb290KHNlbGVjdGVkLnJvb3QpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaXNEZXNrdG9wKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPiA3NjhcbiAgICB9XG5cbiAgICB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9ICF0aGlzLnNjcm9sbExlZnRcbiAgICB9XG59XG4iXX0=