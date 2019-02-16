/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const Color = _color;
export class IonUniversalNavbar {
    /**
     * @param {?} app
     */
    constructor(app) {
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
    ngOnInit() {
        this.appendStyles();
        this.hideModalOnBack();
    }
    /**
     * @return {?}
     */
    hideModalOnBack() {
        this.app.viewWillEnter.subscribe((/**
         * @param {?} view
         * @return {?}
         */
        (view) => {
            /** @type {?} */
            let closeModal = this.lastView && this.lastView.isOverlay;
            if (closeModal)
                this.lastView.dismiss();
            this.lastView = view;
        }));
    }
    /**
     * @return {?}
     */
    fixTabSelect() {
        this.tabs.ionChange.subscribe((/**
         * @return {?}
         */
        () => {
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
        }));
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
    /**
     * @return {?}
     */
    appendStyles() {
        /** @type {?} */
        let stylesElement = document.createElement('style');
        stylesElement.id = 'ion-universal-navbar-colors';
        stylesElement.innerHTML = `ion-navbar[color=primary] .toolbar-background.toolbar-background-md,
        ion-navbar[color=primary] .toolbar-background.toolbar-background-ios,
        ion-universal-navbar [header] {
            ${this.getLinearGradient(this.options.color)}
        }
        
        @media(min-width: 768px) {
            ion-navbar {
                border-left: 1px solid ${this.options.color};
            }

            ion-tabs.tabs .tabbar a.tab-button[aria-selected=true] {
                ${this.getLinearGradient(this.options.color)}
            }
        }
        
        @media(max-width: 768px) {
            ion-tabs.tabs .tabbar a.tab-button[aria-selected=true] .tab-button-icon,
            ion-tabs.tabs .tabbar a.tab-button[aria-selected=true] .tab-button-text {
                color: ${this.options.color};
            }
        }`;
        if (!document.querySelector('#ion-universal-navbar-colors'))
            document.head.appendChild(stylesElement);
    }
    /**
     * @param {?} color
     * @return {?}
     */
    getLinearGradient(color) {
        /** @type {?} */
        let gradientBottom = Color(color).rotate(10).hex();
        return `background: ${color};
        /* Old browsers */
        background: -moz-linear-gradient(top, ${color} 0%, ${gradientBottom} 100%);
        /* FF3.6+ */
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, ${color}), color-stop(100%, ${gradientBottom}));
        /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top, ${color} 0%, ${gradientBottom} 100%);
        /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(top, ${color} 0%, ${gradientBottom} 100%);
        /* Opera 11.10+ */
        background: -ms-linear-gradient(top, ${color} 0%, ${gradientBottom} 100%);
        /* IE10+ */
        background: linear-gradient(to bottom, ${color} 0%, ${gradientBottom} 100%);
        /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='${color}', endColorstr='${gradientBottom}', GradientType=0);
        /* IE6-9 */`;
    }
}
IonUniversalNavbar.decorators = [
    { type: Component, args: [{
                selector: 'ion-universal-navbar',
                template: "<nav [ngClass]=\"{ 'drawer': isDesktop(), 'scroll-left': scrollLeft}\">\n    <section (click)=\"toggleDrawer()\" header text-center *ngIf=\"isDesktop()\">\n        <span title> {{options.sidemenu.heading}} </span>\n    </section>\n    <ion-tabs name=\"ion-universal-tabs\" id=\"ion-universal-tabs\" tabsHighlight=\"tabsHighlight\" [tabsLayout]=\"options.tabs.layout\"\n        [tabsPlacement]=\"options.tabs.placement\" [selectedIndex]=\"options.tabs.selectedIndex\" #tabs [attr.hide]=\"options.hide\">\n        <ion-tab *ngFor=\"let tab of options.pages\" [root]=\"tab.getRoot()\" [rootParams]=\"tab.getRootParams()\" [tabTitle]=\"tab.getTitle()\"\n            [tabUrlPath]=\"tab.getUrlPath()\" [tabIcon]=\"tab.getIcon()\" [tabBadge]=\"tab.getBadge()\" [show]=\"tab.canShow()\">\n        </ion-tab>\n    </ion-tabs>\n</nav>",
                encapsulation: ViewEncapsulation.None,
                styles: ["ion-universal-navbar ion-tabs.tabs ion-tab .ion-page ion-content.content .scroll-content{margin-bottom:0!important}ion-universal-navbar .disable-navigation .tabbar *{pointer-events:none;opacity:.5}@media (min-width:768px){ion-universal-navbar{height:auto;display:block;z-index:100}ion-universal-navbar .drawer{width:100vw;height:100vw}ion-universal-navbar .drawer [header]{height:calc(5.6rem - 0px);width:calc(28rem);font-size:1.6rem;font-weight:400;color:#fff;padding-top:1.6rem;border:none;cursor:pointer;position:absolute;z-index:999999;margin-bottom:-.2rem;margin-right:-.2rem;box-shadow:1px 1px .5rem rgba(0,0,0,.2)}ion-universal-navbar .drawer [header] ion-icon{vertical-align:middle;font-size:2rem;margin-left:.5rem}ion-universal-navbar .drawer [footer]{position:fixed;bottom:2rem;max-width:28rem}ion-universal-navbar .drawer [footer] [footer-text]{color:#efefef;width:28rem;text-align:center}ion-universal-navbar ion-tabs.tabs ion-tab{left:calc(0rem + 28rem);max-width:calc(100vw - 28rem);background-color:#fff}ion-universal-navbar ion-tabs.tabs ion-tab .scroll-content{margin-bottom:0}ion-universal-navbar ion-tabs.tabs ion-tab ion-title{text-align:center}ion-universal-navbar ion-tabs.tabs .tabbar.show-tabbar{display:block;max-width:28rem;position:relative;top:5.6rem;box-shadow:1px .2rem .4rem rgba(0,0,0,.4);height:100vh;background-color:#fff;border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;padding:1rem}ion-universal-navbar ion-tabs.tabs .tabbar.show-tabbar *{transition-property:all;transition-duration:.25s}ion-universal-navbar ion-tabs.tabs a.tab-button{text-align:left;display:block;padding:.5rem 1rem 1rem;max-width:999px;border-radius:3rem;background:#fff;margin-bottom:1rem}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-icon,ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-text{vertical-align:middle;color:#888;display:inline-block;margin-left:1rem}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-icon:before{font-size:2.7rem}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-text{padding:1rem 1rem 1rem 0}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-badge{left:3.2rem;top:1.2rem;padding-top:.2rem}ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true]{padding:.5rem 1rem 1rem;font-weight:700;box-shadow:0 0 .4rem rgba(0,0,0,.4)}ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true] ion-icon.tab-button-icon,ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true] span.tab-button-text{-webkit-transform:none;transform:none;color:#fff}ion-universal-navbar ion-tabs.tabs a.tab-button:hover,ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true]{padding-left:7.5rem;opacity:1}ion-universal-navbar ion-tabs.tabs a.tab-button:hover .tab-badge,ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true] .tab-badge{margin-left:6.6rem}ion-universal-navbar ion-tabs.tabs a.tab-button.tab-hidden{display:none}}@media (max-width:768px){ion-universal-navbar ion-tabs .tabbar{transition-property:all;transition-duration:.35s}ion-universal-navbar ion-tabs .tabbar .tab-button .tab-button-text{display:none}ion-universal-navbar ion-tabs .tabbar .tab-button .tab-button-icon{color:rgba(0,0,0,.4)}ion-universal-navbar ion-tabs .tabbar .tab-button .tab-button-icon:before{font-size:3rem}ion-universal-navbar ion-tabs .tabbar .tab-badge{padding-top:.3rem;margin-top:1.6rem;margin-right:1.6rem}ion-universal-navbar ion-tabs[hide=true] .tabbar{margin-bottom:-100%}ion-universal-navbar ion-tabs[hide=true] ion-tab .fixed-content,ion-universal-navbar ion-tabs[hide=true] ion-tab .scroll-content{margin-bottom:0}}"]
            }] },
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uLXVuaXZlcnNhbC1uYXZiYXIvIiwic291cmNlcyI6WyJsaWIvaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUVuQyxPQUFPLEtBQUssTUFBTSxNQUFNLE9BQU8sQ0FBQTs7TUFDekIsS0FBSyxHQUFHLE1BQU07QUFVcEIsTUFBTTs7OztJQW9CRixZQUFvQixHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQWxCVixZQUFPLEdBQVE7WUFDN0IsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDekIsSUFBSSxFQUFFO2dCQUNGLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixTQUFTLEVBQUUsUUFBUTtnQkFDbkIsYUFBYSxFQUFFLENBQUM7YUFDbkI7U0FDSixDQUFBO1FBSUQscUJBQWdCLEdBQVksSUFBSSxDQUFBO0lBS2hDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUMxQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFF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bUJBWWYsU0FBUyxTQUFDLE1BQU07Ozs7SUFaakIscUNBVUM7O0lBRUQsa0NBQTRCOztJQUU1Qiw4Q0FBZ0M7O0lBQ2hDLHdDQUFtQjs7SUFDbkIsc0NBQWE7Ozs7O0lBRUQsaUNBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiB1bml2ZXJzYWwgbmF2YmFyIGNvbXBvbmVudC5cbiAqL1xuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnaW9uaWMtYW5ndWxhcidcblxuaW1wb3J0ICogYXMgX2NvbG9yIGZyb20gJ2NvbG9yJ1xuY29uc3QgQ29sb3IgPSBfY29sb3JcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpb24tdW5pdmVyc2FsLW5hdmJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICdpb24tdW5pdmVyc2FsLW5hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2lvbi11bml2ZXJzYWwtbmF2YmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElvblVuaXZlcnNhbE5hdmJhciB7XG5cbiAgICBASW5wdXQoJ29wdGlvbnMnKSBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIGNvbG9yOiAnIzAwRkYwMCcsXG4gICAgICAgIHBhZ2VzOiBbXSxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICAgIHNpZGVtZW51OiB7IGhlYWRpbmc6ICcnIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICAgIGxheW91dDogJ2ljb24tdG9wJyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKCd0YWJzJykgdGFiczogYW55XG5cbiAgICBpc0ZpcnN0VGFiU2VsZWN0OiBib29sZWFuID0gdHJ1ZVxuICAgIHNjcm9sbExlZnQ6IGJvb2xlYW5cbiAgICBsYXN0VmlldzogYW55XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcDogQXBwKSB7XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFwcGVuZFN0eWxlcygpXG4gICAgICAgIHRoaXMuaGlkZU1vZGFsT25CYWNrKClcbiAgICB9XG5cbiAgICBoaWRlTW9kYWxPbkJhY2soKSB7XG4gICAgICAgIHRoaXMuYXBwLnZpZXdXaWxsRW50ZXIuc3Vic2NyaWJlKCh2aWV3KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2xvc2VNb2RhbCA9IHRoaXMubGFzdFZpZXcgJiYgdGhpcy5sYXN0Vmlldy5pc092ZXJsYXlcbiAgICAgICAgICAgIGlmIChjbG9zZU1vZGFsKSB0aGlzLmxhc3RWaWV3LmRpc21pc3MoKVxuICAgICAgICAgICAgdGhpcy5sYXN0VmlldyA9IHZpZXdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaXhUYWJTZWxlY3QoKSB7XG4gICAgICAgIHRoaXMudGFicy5pb25DaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0VGFiU2VsZWN0KSByZXR1cm5cbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdFRhYlNlbGVjdCA9IGZhbHNlXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnRhYnMuZ2V0U2VsZWN0ZWQoKVxuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZCB8fCAhc2VsZWN0ZWQuX3ZpZXdzIHx8ICEoc2VsZWN0ZWQuX3ZpZXdzLmxlbmd0aCA+IDApKSByZXR1cm5cbiAgICAgICAgICAgIGxldCBpc1Jvb3QgPSBzZWxlY3RlZC5fdmlld3MgJiYgIShzZWxlY3RlZC5fdmlld3MubGVuZ3RoID4gMSlcbiAgICAgICAgICAgIGxldCBpc1dyb25nUm9vdCA9IHNlbGVjdGVkLnJvb3QgIT09IHNlbGVjdGVkLl92aWV3c1swXS5pZFxuICAgICAgICAgICAgaWYgKGlzUm9vdCAmJiBpc1dyb25nUm9vdCkgc2VsZWN0ZWQuc2V0Um9vdChzZWxlY3RlZC5yb290KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlzRGVza3RvcCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoID4gNzY4XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJhd2VyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbExlZnQgPSAhdGhpcy5zY3JvbGxMZWZ0XG4gICAgfVxuXG4gICAgYXBwZW5kU3R5bGVzKCkge1xuICAgICAgICBsZXQgc3R5bGVzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICAgICAgc3R5bGVzRWxlbWVudC5pZCA9ICdpb24tdW5pdmVyc2FsLW5hdmJhci1jb2xvcnMnXG4gICAgICAgIHN0eWxlc0VsZW1lbnQuaW5uZXJIVE1MID0gYGlvbi1uYXZiYXJbY29sb3I9cHJpbWFyeV0gLnRvb2xiYXItYmFja2dyb3VuZC50b29sYmFyLWJhY2tncm91bmQtbWQsXG4gICAgICAgIGlvbi1uYXZiYXJbY29sb3I9cHJpbWFyeV0gLnRvb2xiYXItYmFja2dyb3VuZC50b29sYmFyLWJhY2tncm91bmQtaW9zLFxuICAgICAgICBpb24tdW5pdmVyc2FsLW5hdmJhciBbaGVhZGVyXSB7XG4gICAgICAgICAgICAke3RoaXMuZ2V0TGluZWFyR3JhZGllbnQodGhpcy5vcHRpb25zLmNvbG9yKX1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGlvbi1uYXZiYXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHt0aGlzLm9wdGlvbnMuY29sb3J9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tdGFicy50YWJzIC50YWJiYXIgYS50YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0ge1xuICAgICAgICAgICAgICAgICR7dGhpcy5nZXRMaW5lYXJHcmFkaWVudCh0aGlzLm9wdGlvbnMuY29sb3IpfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgaW9uLXRhYnMudGFicyAudGFiYmFyIGEudGFiLWJ1dHRvblthcmlhLXNlbGVjdGVkPXRydWVdIC50YWItYnV0dG9uLWljb24sXG4gICAgICAgICAgICBpb24tdGFicy50YWJzIC50YWJiYXIgYS50YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0gLnRhYi1idXR0b24tdGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5vcHRpb25zLmNvbG9yfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWBcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW9uLXVuaXZlcnNhbC1uYXZiYXItY29sb3JzJykpIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVzRWxlbWVudClcbiAgICB9XG5cbiAgICBnZXRMaW5lYXJHcmFkaWVudChjb2xvcikge1xuICAgICAgICBsZXQgZ3JhZGllbnRCb3R0b20gPSBDb2xvcihjb2xvcikucm90YXRlKDEwKS5oZXgoKVxuXG4gICAgICAgIHJldHVybiBgYmFja2dyb3VuZDogJHtjb2xvcn07XG4gICAgICAgIC8qIE9sZCBicm93c2VycyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICR7Y29sb3J9IDAlLCAke2dyYWRpZW50Qm90dG9tfSAxMDAlKTtcbiAgICAgICAgLyogRkYzLjYrICovXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICR7Y29sb3J9KSwgY29sb3Itc3RvcCgxMDAlLCAke2dyYWRpZW50Qm90dG9tfSkpO1xuICAgICAgICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAke2NvbG9yfSAwJSwgJHtncmFkaWVudEJvdHRvbX0gMTAwJSk7XG4gICAgICAgIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICR7Y29sb3J9IDAlLCAke2dyYWRpZW50Qm90dG9tfSAxMDAlKTtcbiAgICAgICAgLyogT3BlcmEgMTEuMTArICovXG4gICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAke2NvbG9yfSAwJSwgJHtncmFkaWVudEJvdHRvbX0gMTAwJSk7XG4gICAgICAgIC8qIElFMTArICovXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7Y29sb3J9IDAlLCAke2dyYWRpZW50Qm90dG9tfSAxMDAlKTtcbiAgICAgICAgLyogVzNDICovXG4gICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyR7Y29sb3J9JywgZW5kQ29sb3JzdHI9JyR7Z3JhZGllbnRCb3R0b219JywgR3JhZGllbnRUeXBlPTApO1xuICAgICAgICAvKiBJRTYtOSAqL2BcbiAgICB9XG59XG4iXX0=