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
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Injectable } from '@angular/core';
import { ViewChild } from '@angular/core';
import { App } from 'ionic-angular';
import * as _color from 'color';
/** @type {?} */
var Color = _color;
var IonUniversalNavbar = /** @class */ (function () {
    function IonUniversalNavbar(app) {
        this.app = app;
        this.options = {
            color: '#00FF00',
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
        this.appendStyles();
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
    /**
     * @return {?}
     */
    IonUniversalNavbar.prototype.appendStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stylesElement = document.createElement('style');
        stylesElement.id = 'ion-universal-navbar-colors';
        stylesElement.innerHTML = "ion-navbar[color=primary] .toolbar-background.toolbar-background-md,\n        ion-navbar[color=primary] .toolbar-background.toolbar-background-ios,\n        ion-universal-navbar [header] {\n            " + this.getLinearGradient(this.options.color) + "\n        }\n        \n        @media(min-width: 768px) {\n            ion-navbar {\n                border-left: 1px solid " + this.options.color + ";\n            }\n\n            ion-tabs.tabs .tabbar a.tab-button[aria-selected=true] {\n                " + this.getLinearGradient(this.options.color) + "\n            }\n        }\n        \n        @media(max-width: 768px) {\n            ion-tabs.tabs .tabbar a.tab-button[aria-selected=true] .tab-button-icon,\n            ion-tabs.tabs .tabbar a.tab-button[aria-selected=true] .tab-button-text {\n                color: " + this.options.color + ";\n            }\n        }";
        if (!document.querySelector('#ion-universal-navbar-colors'))
            document.head.appendChild(stylesElement);
    };
    /**
     * @param {?} color
     * @return {?}
     */
    IonUniversalNavbar.prototype.getLinearGradient = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var gradientBottom = Color(color).rotate(10).hex();
        return "background: " + color + ";\n        /* Old browsers */\n        background: -moz-linear-gradient(top, " + color + " 0%, " + gradientBottom + " 100%);\n        /* FF3.6+ */\n        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, " + color + "), color-stop(100%, " + gradientBottom + "));\n        /* Chrome,Safari4+ */\n        background: -webkit-linear-gradient(top, " + color + " 0%, " + gradientBottom + " 100%);\n        /* Chrome10+,Safari5.1+ */\n        background: -o-linear-gradient(top, " + color + " 0%, " + gradientBottom + " 100%);\n        /* Opera 11.10+ */\n        background: -ms-linear-gradient(top, " + color + " 0%, " + gradientBottom + " 100%);\n        /* IE10+ */\n        background: linear-gradient(to bottom, " + color + " 0%, " + gradientBottom + " 100%);\n        /* W3C */\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='" + color + "', endColorstr='" + gradientBottom + "', GradientType=0);\n        /* IE6-9 */";
    };
    IonUniversalNavbar.decorators = [
        { type: Component, args: [{
                    selector: 'ion-universal-navbar',
                    template: "<nav [ngClass]=\"{ 'drawer': isDesktop(), 'scroll-left': scrollLeft}\">\n    <section (click)=\"toggleDrawer()\" header text-center *ngIf=\"isDesktop()\">\n        <span title> {{options.sidemenu.heading}} </span>\n    </section>\n    <ion-tabs name=\"ion-universal-tabs\" id=\"ion-universal-tabs\" tabsHighlight=\"tabsHighlight\" [tabsLayout]=\"options.tabs.layout\"\n        [tabsPlacement]=\"options.tabs.placement\" [selectedIndex]=\"options.tabs.selectedIndex\" #tabs [attr.hide]=\"options.hide\">\n        <ion-tab *ngFor=\"let tab of options.pages\" [root]=\"tab.getRoot()\" [rootParams]=\"tab.getRootParams()\" [tabTitle]=\"tab.getTitle()\"\n            [tabUrlPath]=\"tab.getUrlPath()\" [tabIcon]=\"tab.getIcon()\" [tabBadge]=\"tab.getBadge()\" [show]=\"tab.canShow()\">\n        </ion-tab>\n    </ion-tabs>\n</nav>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["ion-universal-navbar ion-tabs.tabs ion-tab .ion-page ion-content.content .scroll-content{margin-bottom:0!important}ion-universal-navbar .disable-navigation .tabbar *{pointer-events:none;opacity:.5}@media (min-width:768px){ion-universal-navbar{height:auto;display:block;z-index:100}ion-universal-navbar .drawer{width:100vw;height:100vw}ion-universal-navbar .drawer [header]{height:calc(56px - 0px);width:calc(280px);font-size:16px;font-weight:400;color:#fff;padding-top:16px;border:none;cursor:pointer;position:absolute;z-index:999999;margin-bottom:-2px;margin-right:-2px;box-shadow:1px 1px 5px rgba(0,0,0,.2)}ion-universal-navbar .drawer [header] ion-icon{vertical-align:middle;font-size:20px;margin-left:5px}ion-universal-navbar .drawer [footer]{position:fixed;bottom:20px;max-width:280px}ion-universal-navbar .drawer [footer] [footer-text]{color:#efefef;width:280px;text-align:center}ion-universal-navbar ion-tabs.tabs ion-tab{left:calc(0px + 280px);max-width:calc(100vw - 280px);background-color:#fff}ion-universal-navbar ion-tabs.tabs ion-tab .scroll-content{margin-bottom:0}ion-universal-navbar ion-tabs.tabs ion-tab ion-title{text-align:center}ion-universal-navbar ion-tabs.tabs .tabbar.show-tabbar{display:block;max-width:280px;position:relative;top:56px;box-shadow:1px 2px 4px rgba(0,0,0,.4);height:100vh;background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;padding:10px}ion-universal-navbar ion-tabs.tabs .tabbar.show-tabbar *{transition-property:all;transition-duration:.25s}ion-universal-navbar ion-tabs.tabs a.tab-button{text-align:left;display:block;padding:5px 10px 10px;max-width:999px;border-radius:30px;background:#fff;margin-bottom:10px}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-icon,ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-text{vertical-align:middle;color:#888;display:inline-block;margin-left:10px}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-icon:before{font-size:27px}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-text{padding:10px 10px 10px 0}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-badge{left:32px;top:12px;padding-top:2px}ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true]{padding:5px 10px 10px;font-weight:700;box-shadow:0 0 4px rgba(0,0,0,.4)}ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true] ion-icon.tab-button-icon,ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true] span.tab-button-text{-webkit-transform:none;transform:none;color:#fff}ion-universal-navbar ion-tabs.tabs a.tab-button:hover,ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true]{padding-left:75px;opacity:1}ion-universal-navbar ion-tabs.tabs a.tab-button:hover .tab-badge,ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true] .tab-badge{margin-left:66px}ion-universal-navbar ion-tabs.tabs a.tab-button.tab-hidden{display:none}}@media (max-width:768px){ion-universal-navbar ion-tabs .tabbar{transition-property:all;transition-duration:.35s}ion-universal-navbar ion-tabs .tabbar .tab-button .tab-button-text{display:none}ion-universal-navbar ion-tabs .tabbar .tab-button .tab-button-icon{color:rgba(0,0,0,.4)}ion-universal-navbar ion-tabs .tabbar .tab-button .tab-button-icon:before{font-size:30px}ion-universal-navbar ion-tabs .tabbar .tab-badge{padding-top:3px;margin-top:16px;margin-right:16px}ion-universal-navbar ion-tabs[hide=true] .tabbar{margin-bottom:-100%}ion-universal-navbar ion-tabs[hide=true] ion-tab .fixed-content,ion-universal-navbar ion-tabs[hide=true] ion-tab .scroll-content{margin-bottom:0}}"]
                }] },
        { type: Injectable }
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uLXVuaXZlcnNhbC1uYXZiYXIvIiwic291cmNlcyI6WyJsaWIvaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUVuQyxPQUFPLEtBQUssTUFBTSxNQUFNLE9BQU8sQ0FBQTs7SUFDekIsS0FBSyxHQUFHLE1BQU07QUFFcEI7SUE0QkksNEJBQW9CLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBbEJWLFlBQU8sR0FBUTtZQUM3QixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN6QixJQUFJLEVBQUU7Z0JBQ0YsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLFNBQVMsRUFBRSxRQUFRO2dCQUNuQixhQUFhLEVBQUUsQ0FBQzthQUNuQjtTQUNKLENBQUE7UUFJRCxxQkFBZ0IsR0FBWSxJQUFJLENBQUE7SUFLaEMsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7SUFDMUIsQ0FBQzs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVB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QkFDUCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxvMEJBQWtEO29CQUVsRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3hDO2dCQUVBLFVBQVU7OztnQkFaRixHQUFHOzs7MEJBZVAsS0FBSyxTQUFDLFNBQVM7dUJBWWYsU0FBUyxTQUFDLE1BQU07O0lBMEZyQix5QkFBQztDQUFBLEFBaEhELElBZ0hDO1NBeEdZLGtCQUFrQjs7O0lBRTNCLHFDQVVDOztJQUVELGtDQUE0Qjs7SUFFNUIsOENBQWdDOztJQUNoQyx3Q0FBbUI7O0lBQ25CLHNDQUFhOzs7OztJQUVELGlDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gdW5pdmVyc2FsIG5hdmJhciBjb21wb25lbnQuXG4gKi9cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEFwcCB9IGZyb20gJ2lvbmljLWFuZ3VsYXInXG5cbmltcG9ydCAqIGFzIF9jb2xvciBmcm9tICdjb2xvcidcbmNvbnN0IENvbG9yID0gX2NvbG9yXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaW9uLXVuaXZlcnNhbC1uYXZiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydpb24tdW5pdmVyc2FsLW5hdmJhci5jb21wb25lbnQuc2NzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJb25Vbml2ZXJzYWxOYXZiYXIge1xuXG4gICAgQElucHV0KCdvcHRpb25zJykgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBjb2xvcjogJyMwMEZGMDAnLFxuICAgICAgICBwYWdlczogW10sXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBzaWRlbWVudTogeyBoZWFkaW5nOiAnJyB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgICBsYXlvdXQ6ICdpY29uLXRvcCcsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZCgndGFicycpIHRhYnM6IGFueVxuXG4gICAgaXNGaXJzdFRhYlNlbGVjdDogYm9vbGVhbiA9IHRydWVcbiAgICBzY3JvbGxMZWZ0OiBib29sZWFuXG4gICAgbGFzdFZpZXc6IGFueVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHA6IEFwcCkge1xuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRTdHlsZXMoKVxuICAgICAgICB0aGlzLmhpZGVNb2RhbE9uQmFjaygpXG4gICAgfVxuXG4gICAgaGlkZU1vZGFsT25CYWNrKCkge1xuICAgICAgICB0aGlzLmFwcC52aWV3V2lsbEVudGVyLnN1YnNjcmliZSgodmlldykgPT4ge1xuICAgICAgICAgICAgbGV0IGNsb3NlTW9kYWwgPSB0aGlzLmxhc3RWaWV3ICYmIHRoaXMubGFzdFZpZXcuaXNPdmVybGF5XG4gICAgICAgICAgICBpZiAoY2xvc2VNb2RhbCkgdGhpcy5sYXN0Vmlldy5kaXNtaXNzKClcbiAgICAgICAgICAgIHRoaXMubGFzdFZpZXcgPSB2aWV3XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZml4VGFiU2VsZWN0KCkge1xuICAgICAgICB0aGlzLnRhYnMuaW9uQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdFRhYlNlbGVjdCkgcmV0dXJuXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3RUYWJTZWxlY3QgPSBmYWxzZVxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy50YWJzLmdldFNlbGVjdGVkKClcbiAgICAgICAgICAgIGlmICghc2VsZWN0ZWQgfHwgIXNlbGVjdGVkLl92aWV3cyB8fCAhKHNlbGVjdGVkLl92aWV3cy5sZW5ndGggPiAwKSkgcmV0dXJuXG4gICAgICAgICAgICBsZXQgaXNSb290ID0gc2VsZWN0ZWQuX3ZpZXdzICYmICEoc2VsZWN0ZWQuX3ZpZXdzLmxlbmd0aCA+IDEpXG4gICAgICAgICAgICBsZXQgaXNXcm9uZ1Jvb3QgPSBzZWxlY3RlZC5yb290ICE9PSBzZWxlY3RlZC5fdmlld3NbMF0uaWRcbiAgICAgICAgICAgIGlmIChpc1Jvb3QgJiYgaXNXcm9uZ1Jvb3QpIHNlbGVjdGVkLnNldFJvb3Qoc2VsZWN0ZWQucm9vdClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpc0Rlc2t0b3AoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OFxuICAgIH1cblxuICAgIHRvZ2dsZURyYXdlcigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0gIXRoaXMuc2Nyb2xsTGVmdFxuICAgIH1cblxuICAgIGFwcGVuZFN0eWxlcygpIHtcbiAgICAgICAgbGV0IHN0eWxlc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgICAgIHN0eWxlc0VsZW1lbnQuaWQgPSAnaW9uLXVuaXZlcnNhbC1uYXZiYXItY29sb3JzJ1xuICAgICAgICBzdHlsZXNFbGVtZW50LmlubmVySFRNTCA9IGBpb24tbmF2YmFyW2NvbG9yPXByaW1hcnldIC50b29sYmFyLWJhY2tncm91bmQudG9vbGJhci1iYWNrZ3JvdW5kLW1kLFxuICAgICAgICBpb24tbmF2YmFyW2NvbG9yPXByaW1hcnldIC50b29sYmFyLWJhY2tncm91bmQudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyxcbiAgICAgICAgaW9uLXVuaXZlcnNhbC1uYXZiYXIgW2hlYWRlcl0ge1xuICAgICAgICAgICAgJHt0aGlzLmdldExpbmVhckdyYWRpZW50KHRoaXMub3B0aW9ucy5jb2xvcil9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBpb24tbmF2YmFyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7dGhpcy5vcHRpb25zLmNvbG9yfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLXRhYnMudGFicyAudGFiYmFyIGEudGFiLWJ1dHRvblthcmlhLXNlbGVjdGVkPXRydWVdIHtcbiAgICAgICAgICAgICAgICAke3RoaXMuZ2V0TGluZWFyR3JhZGllbnQodGhpcy5vcHRpb25zLmNvbG9yKX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGlvbi10YWJzLnRhYnMgLnRhYmJhciBhLnRhYi1idXR0b25bYXJpYS1zZWxlY3RlZD10cnVlXSAudGFiLWJ1dHRvbi1pY29uLFxuICAgICAgICAgICAgaW9uLXRhYnMudGFicyAudGFiYmFyIGEudGFiLWJ1dHRvblthcmlhLXNlbGVjdGVkPXRydWVdIC50YWItYnV0dG9uLXRleHQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoaXMub3B0aW9ucy5jb2xvcn07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1gXG4gICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lvbi11bml2ZXJzYWwtbmF2YmFyLWNvbG9ycycpKSBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlc0VsZW1lbnQpXG4gICAgfVxuXG4gICAgZ2V0TGluZWFyR3JhZGllbnQoY29sb3IpIHtcbiAgICAgICAgbGV0IGdyYWRpZW50Qm90dG9tID0gQ29sb3IoY29sb3IpLnJvdGF0ZSgxMCkuaGV4KClcblxuICAgICAgICByZXR1cm4gYGJhY2tncm91bmQ6ICR7Y29sb3J9O1xuICAgICAgICAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAke2NvbG9yfSAwJSwgJHtncmFkaWVudEJvdHRvbX0gMTAwJSk7XG4gICAgICAgIC8qIEZGMy42KyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAke2NvbG9yfSksIGNvbG9yLXN0b3AoMTAwJSwgJHtncmFkaWVudEJvdHRvbX0pKTtcbiAgICAgICAgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHtjb2xvcn0gMCUsICR7Z3JhZGllbnRCb3R0b219IDEwMCUpO1xuICAgICAgICAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAke2NvbG9yfSAwJSwgJHtncmFkaWVudEJvdHRvbX0gMTAwJSk7XG4gICAgICAgIC8qIE9wZXJhIDExLjEwKyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgJHtjb2xvcn0gMCUsICR7Z3JhZGllbnRCb3R0b219IDEwMCUpO1xuICAgICAgICAvKiBJRTEwKyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yfSAwJSwgJHtncmFkaWVudEJvdHRvbX0gMTAwJSk7XG4gICAgICAgIC8qIFczQyAqL1xuICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScke2NvbG9yfScsIGVuZENvbG9yc3RyPScke2dyYWRpZW50Qm90dG9tfScsIEdyYWRpZW50VHlwZT0wKTtcbiAgICAgICAgLyogSUU2LTkgKi9gXG4gICAgfVxufVxuIl19