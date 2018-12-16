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
export class IonUniversalNavbar {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uLXVuaXZlcnNhbC1uYXZiYXIvIiwic291cmNlcyI6WyJsaWIvaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRW5DLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQVN6QyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBbUIzQixZQUFvQixHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQWpCVixZQUFPLEdBQVE7WUFDN0IsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDekIsSUFBSSxFQUFFO2dCQUNGLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixTQUFTLEVBQUUsUUFBUTtnQkFDbkIsYUFBYSxFQUFFLENBQUM7YUFDbkI7U0FDSixDQUFBO1FBSUQscUJBQWdCLEdBQVksSUFBSSxDQUFBO0lBSUEsQ0FBQzs7OztJQUVqQyxRQUFRO1FBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQzFCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7O2dCQUNsQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDekQsSUFBSSxVQUFVO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOzs7O0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQUUsT0FBTTtZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFBOztnQkFDekIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQUUsT0FBTTs7Z0JBQ3RFLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O2dCQUN6RCxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekQsSUFBSSxNQUFNLElBQUksV0FBVztnQkFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5RCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ0wsT0FBTyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTtJQUNsQyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3RDLENBQUM7OztZQTFESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsbzBCQUFrRDs7YUFFckQ7WUFFQSxVQUFVOzs7O1lBWkYsR0FBRzs7O3NCQWVQLEtBQUssU0FBQyxTQUFTO21CQVdmLFNBQVMsU0FBQyxNQUFNOzs7O0lBWGpCLHFDQVNDOztJQUVELGtDQUE0Qjs7SUFFNUIsOENBQWdDOztJQUNoQyx3Q0FBbUI7O0lBQ25CLHNDQUFhOzs7OztJQUVELGlDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gdW5pdmVyc2FsIG5hdmJhciBjb21wb25lbnQuXG4gKi9cblxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnaW9uaWMtYW5ndWxhcidcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaW9uLXVuaXZlcnNhbC1uYXZiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydpb24tdW5pdmVyc2FsLW5hdmJhci5jb21wb25lbnQuc2NzcyddXG59KVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW9uVW5pdmVyc2FsTmF2YmFyIHtcblxuICAgIEBJbnB1dCgnb3B0aW9ucycpIG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgcGFnZXM6IFtdLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgc2lkZW1lbnU6IHsgaGVhZGluZzogJycgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgICAgbGF5b3V0OiAnaWNvbi10b3AnLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoJ3RhYnMnKSB0YWJzOiBhbnlcblxuICAgIGlzRmlyc3RUYWJTZWxlY3Q6IGJvb2xlYW4gPSB0cnVlXG4gICAgc2Nyb2xsTGVmdDogYm9vbGVhblxuICAgIGxhc3RWaWV3OiBhbnlcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwOiBBcHApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsT25CYWNrKClcbiAgICB9XG5cbiAgICBoaWRlTW9kYWxPbkJhY2soKSB7XG4gICAgICAgIHRoaXMuYXBwLnZpZXdXaWxsRW50ZXIuc3Vic2NyaWJlKCh2aWV3KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2xvc2VNb2RhbCA9IHRoaXMubGFzdFZpZXcgJiYgdGhpcy5sYXN0Vmlldy5pc092ZXJsYXlcbiAgICAgICAgICAgIGlmIChjbG9zZU1vZGFsKSB0aGlzLmxhc3RWaWV3LmRpc21pc3MoKVxuICAgICAgICAgICAgdGhpcy5sYXN0VmlldyA9IHZpZXdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaXhUYWJTZWxlY3QoKSB7XG4gICAgICAgIHRoaXMudGFicy5pb25DaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0VGFiU2VsZWN0KSByZXR1cm5cbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdFRhYlNlbGVjdCA9IGZhbHNlXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnRhYnMuZ2V0U2VsZWN0ZWQoKVxuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZCB8fCAhc2VsZWN0ZWQuX3ZpZXdzIHx8ICEoc2VsZWN0ZWQuX3ZpZXdzLmxlbmd0aCA+IDApKSByZXR1cm5cbiAgICAgICAgICAgIGxldCBpc1Jvb3QgPSBzZWxlY3RlZC5fdmlld3MgJiYgIShzZWxlY3RlZC5fdmlld3MubGVuZ3RoID4gMSlcbiAgICAgICAgICAgIGxldCBpc1dyb25nUm9vdCA9IHNlbGVjdGVkLnJvb3QgIT09IHNlbGVjdGVkLl92aWV3c1swXS5pZFxuICAgICAgICAgICAgaWYgKGlzUm9vdCAmJiBpc1dyb25nUm9vdCkgc2VsZWN0ZWQuc2V0Um9vdChzZWxlY3RlZC5yb290KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlzRGVza3RvcCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoID4gNzY4XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJhd2VyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbExlZnQgPSAhdGhpcy5zY3JvbGxMZWZ0XG4gICAgfVxufVxuIl19