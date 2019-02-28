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
                styles: ["ion-universal-navbar ion-tabs.tabs ion-tab .ion-page ion-content.content .scroll-content{margin-bottom:0!important}ion-universal-navbar .disable-navigation .tabbar *{pointer-events:none;opacity:.5}@media (min-width:768px){ion-universal-navbar{height:auto;display:block;z-index:100}ion-universal-navbar .drawer{width:100vw;height:100vw}ion-universal-navbar .drawer [header]{height:calc(5.6rem - 0px);width:calc(28rem);font-size:1.6rem;font-weight:400;color:#fff;padding-top:1.6rem;border:none;cursor:pointer;position:absolute;z-index:999999;margin-bottom:-.2rem;margin-right:-.2rem;box-shadow:1px 1px .5rem rgba(0,0,0,.2)}ion-universal-navbar .drawer [header] ion-icon{vertical-align:middle;font-size:2rem;margin-left:.5rem}ion-universal-navbar .drawer [footer]{position:fixed;bottom:2rem;max-width:28rem}ion-universal-navbar .drawer [footer] [footer-text]{color:#efefef;width:28rem;text-align:center}ion-universal-navbar ion-tabs.tabs ion-tab{left:calc(0rem + 28rem);max-width:calc(100vw - 28rem);background-color:#fff}ion-universal-navbar ion-tabs.tabs ion-tab .scroll-content{margin-bottom:0}ion-universal-navbar ion-tabs.tabs ion-tab ion-title{text-align:center}ion-universal-navbar ion-tabs.tabs .tabbar.show-tabbar{display:block;max-width:28rem;position:relative;top:5.6rem;box-shadow:1px .2rem .4rem rgba(0,0,0,.4);height:100vh;background-color:#fff;border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;padding:1rem}ion-universal-navbar ion-tabs.tabs .tabbar.show-tabbar *{transition-property:all;transition-duration:.25s}ion-universal-navbar ion-tabs.tabs a.tab-button{text-align:left;display:block;padding:.5rem 1rem 1rem;max-width:999px;border-radius:3rem;background:#fff;margin-bottom:1rem}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-icon,ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-text{vertical-align:middle;color:#888;display:inline-block;margin-left:1rem}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-icon:before{font-size:2.7rem}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-button-text{padding:1rem 1rem 1rem 0}ion-universal-navbar ion-tabs.tabs a.tab-button .tab-badge{left:3.2rem;top:1.2rem;padding-top:.2rem}ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true]{padding:.5rem 1rem 1rem;font-weight:700;box-shadow:0 0 .4rem rgba(0,0,0,.4)}ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true] ion-icon.tab-button-icon,ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true] span.tab-button-text{-webkit-transform:none;transform:none;color:#fff}ion-universal-navbar ion-tabs.tabs a.tab-button:hover,ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true]{padding-left:2rem;opacity:1}ion-universal-navbar ion-tabs.tabs a.tab-button:hover .tab-badge,ion-universal-navbar ion-tabs.tabs a.tab-button[aria-selected=true] .tab-badge{margin-left:1.5rem}ion-universal-navbar ion-tabs.tabs a.tab-button.tab-hidden{display:none}}@media (max-width:768px){ion-universal-navbar ion-tabs .tabbar{transition-property:all;transition-duration:.35s}ion-universal-navbar ion-tabs .tabbar .tab-button .tab-button-text{display:none}ion-universal-navbar ion-tabs .tabbar .tab-button .tab-button-icon{color:rgba(0,0,0,.4)}ion-universal-navbar ion-tabs .tabbar .tab-button .tab-button-icon:before{font-size:3rem}ion-universal-navbar ion-tabs .tabbar .tab-badge{padding-top:.3rem;margin-top:1.6rem;margin-right:1.6rem}ion-universal-navbar ion-tabs[hide=true] .tabbar{margin-bottom:-100%}ion-universal-navbar ion-tabs[hide=true] ion-tab .fixed-content,ion-universal-navbar ion-tabs[hide=true] ion-tab .scroll-content{margin-bottom:0}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uLXVuaXZlcnNhbC1uYXZiYXIvIiwic291cmNlcyI6WyJsaWIvaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUVuQyxPQUFPLEtBQUssTUFBTSxNQUFNLE9BQU8sQ0FBQTs7TUFDekIsS0FBSyxHQUFHLE1BQU07QUFVcEIsTUFBTTs7OztJQW9CRixZQUFvQixHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQWxCVixZQUFPLEdBQVE7WUFDN0IsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDekIsSUFBSSxFQUFFO2dCQUNGLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixTQUFTLEVBQUUsUUFBUTtnQkFDbkIsYUFBYSxFQUFFLENBQUM7YUFDbkI7U0FDSixDQUFBO1FBSUQscUJBQWdCLEdBQVksSUFBSSxDQUFBO0lBS2hDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7O2dCQUNsQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDekQsSUFBSSxVQUFVO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7UUFDeEIsQ0FBQyxFQUFDLENBQUE7SUFDTixDQUFDOzs7O0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtnQkFBRSxPQUFNO1lBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUE7O2dCQUN6QixRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFBRSxPQUFNOztnQkFDdEUsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3pELFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN6RCxJQUFJLE1BQU0sSUFBSSxXQUFXO2dCQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzlELENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQzs7OztJQUVELFNBQVM7UUFDTCxPQUFPLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFBO0lBQ2xDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDdEMsQ0FBQzs7OztJQUVELFlBQVk7O1lBQ0osYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ25ELGFBQWEsQ0FBQyxFQUFFLEdBQUcsNkJBQTZCLENBQUE7UUFDaEQsYUFBYSxDQUFDLFNBQVMsR0FBRzs7O2NBR3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7Ozs7eUNBS2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLOzs7O2tCQUl6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7eUJBT25DLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSzs7VUFFakMsQ0FBQTtRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLDhCQUE4QixDQUFDO1lBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDekcsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLOztZQUNmLGNBQWMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUVsRCxPQUFPLGVBQWUsS0FBSzs7Z0RBRWEsS0FBSyxRQUFRLGNBQWM7O3FGQUVVLEtBQUssdUJBQXVCLGNBQWM7O21EQUU1RSxLQUFLLFFBQVEsY0FBYzs7OENBRWhDLEtBQUssUUFBUSxjQUFjOzsrQ0FFMUIsS0FBSyxRQUFRLGNBQWM7O2lEQUV6QixLQUFLLFFBQVEsY0FBYzs7NEVBRUEsS0FBSyxtQkFBbUIsY0FBYztvQkFDOUYsQ0FBQTtJQUNoQixDQUFDOzs7WUE5R0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLG8wQkFBa0Q7Z0JBRWxELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN4QztZQUVBLFVBQVU7OztZQVpGLEdBQUc7OztzQkFlUCxLQUFLLFNBQUMsU0FBUzttQkFZZixTQUFTLFNBQUMsTUFBTTs7OztJQVpqQixxQ0FVQzs7SUFFRCxrQ0FBNEI7O0lBRTVCLDhDQUFnQzs7SUFDaEMsd0NBQW1COztJQUNuQixzQ0FBYTs7Ozs7SUFFRCxpQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIHVuaXZlcnNhbCBuYXZiYXIgY29tcG9uZW50LlxuICovXG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdpb25pYy1hbmd1bGFyJ1xuXG5pbXBvcnQgKiBhcyBfY29sb3IgZnJvbSAnY29sb3InXG5jb25zdCBDb2xvciA9IF9jb2xvclxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2lvbi11bml2ZXJzYWwtbmF2YmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2lvbi11bml2ZXJzYWwtbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnaW9uLXVuaXZlcnNhbC1uYXZiYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW9uVW5pdmVyc2FsTmF2YmFyIHtcblxuICAgIEBJbnB1dCgnb3B0aW9ucycpIG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgY29sb3I6ICcjMDBGRjAwJyxcbiAgICAgICAgcGFnZXM6IFtdLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgc2lkZW1lbnU6IHsgaGVhZGluZzogJycgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgICAgbGF5b3V0OiAnaWNvbi10b3AnLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoJ3RhYnMnKSB0YWJzOiBhbnlcblxuICAgIGlzRmlyc3RUYWJTZWxlY3Q6IGJvb2xlYW4gPSB0cnVlXG4gICAgc2Nyb2xsTGVmdDogYm9vbGVhblxuICAgIGxhc3RWaWV3OiBhbnlcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwOiBBcHApIHtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kU3R5bGVzKClcbiAgICB9XG5cbiAgICBoaWRlTW9kYWxPbkJhY2soKSB7XG4gICAgICAgIHRoaXMuYXBwLnZpZXdXaWxsRW50ZXIuc3Vic2NyaWJlKCh2aWV3KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2xvc2VNb2RhbCA9IHRoaXMubGFzdFZpZXcgJiYgdGhpcy5sYXN0Vmlldy5pc092ZXJsYXlcbiAgICAgICAgICAgIGlmIChjbG9zZU1vZGFsKSB0aGlzLmxhc3RWaWV3LmRpc21pc3MoKVxuICAgICAgICAgICAgdGhpcy5sYXN0VmlldyA9IHZpZXdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaXhUYWJTZWxlY3QoKSB7XG4gICAgICAgIHRoaXMudGFicy5pb25DaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0VGFiU2VsZWN0KSByZXR1cm5cbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdFRhYlNlbGVjdCA9IGZhbHNlXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnRhYnMuZ2V0U2VsZWN0ZWQoKVxuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZCB8fCAhc2VsZWN0ZWQuX3ZpZXdzIHx8ICEoc2VsZWN0ZWQuX3ZpZXdzLmxlbmd0aCA+IDApKSByZXR1cm5cbiAgICAgICAgICAgIGxldCBpc1Jvb3QgPSBzZWxlY3RlZC5fdmlld3MgJiYgIShzZWxlY3RlZC5fdmlld3MubGVuZ3RoID4gMSlcbiAgICAgICAgICAgIGxldCBpc1dyb25nUm9vdCA9IHNlbGVjdGVkLnJvb3QgIT09IHNlbGVjdGVkLl92aWV3c1swXS5pZFxuICAgICAgICAgICAgaWYgKGlzUm9vdCAmJiBpc1dyb25nUm9vdCkgc2VsZWN0ZWQuc2V0Um9vdChzZWxlY3RlZC5yb290KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlzRGVza3RvcCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoID4gNzY4XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJhd2VyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbExlZnQgPSAhdGhpcy5zY3JvbGxMZWZ0XG4gICAgfVxuXG4gICAgYXBwZW5kU3R5bGVzKCkge1xuICAgICAgICBsZXQgc3R5bGVzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICAgICAgc3R5bGVzRWxlbWVudC5pZCA9ICdpb24tdW5pdmVyc2FsLW5hdmJhci1jb2xvcnMnXG4gICAgICAgIHN0eWxlc0VsZW1lbnQuaW5uZXJIVE1MID0gYGlvbi1uYXZiYXJbY29sb3I9cHJpbWFyeV0gLnRvb2xiYXItYmFja2dyb3VuZC50b29sYmFyLWJhY2tncm91bmQtbWQsXG4gICAgICAgIGlvbi1uYXZiYXJbY29sb3I9cHJpbWFyeV0gLnRvb2xiYXItYmFja2dyb3VuZC50b29sYmFyLWJhY2tncm91bmQtaW9zLFxuICAgICAgICBpb24tdW5pdmVyc2FsLW5hdmJhciBbaGVhZGVyXSB7XG4gICAgICAgICAgICAke3RoaXMuZ2V0TGluZWFyR3JhZGllbnQodGhpcy5vcHRpb25zLmNvbG9yKX1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGlvbi1uYXZiYXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHt0aGlzLm9wdGlvbnMuY29sb3J9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tdGFicy50YWJzIC50YWJiYXIgYS50YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0ge1xuICAgICAgICAgICAgICAgICR7dGhpcy5nZXRMaW5lYXJHcmFkaWVudCh0aGlzLm9wdGlvbnMuY29sb3IpfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgaW9uLXRhYnMudGFicyAudGFiYmFyIGEudGFiLWJ1dHRvblthcmlhLXNlbGVjdGVkPXRydWVdIC50YWItYnV0dG9uLWljb24sXG4gICAgICAgICAgICBpb24tdGFicy50YWJzIC50YWJiYXIgYS50YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0gLnRhYi1idXR0b24tdGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5vcHRpb25zLmNvbG9yfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWBcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW9uLXVuaXZlcnNhbC1uYXZiYXItY29sb3JzJykpIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVzRWxlbWVudClcbiAgICB9XG5cbiAgICBnZXRMaW5lYXJHcmFkaWVudChjb2xvcikge1xuICAgICAgICBsZXQgZ3JhZGllbnRCb3R0b20gPSBDb2xvcihjb2xvcikucm90YXRlKDEwKS5oZXgoKVxuXG4gICAgICAgIHJldHVybiBgYmFja2dyb3VuZDogJHtjb2xvcn07XG4gICAgICAgIC8qIE9sZCBicm93c2VycyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICR7Y29sb3J9IDAlLCAke2dyYWRpZW50Qm90dG9tfSAxMDAlKTtcbiAgICAgICAgLyogRkYzLjYrICovXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICR7Y29sb3J9KSwgY29sb3Itc3RvcCgxMDAlLCAke2dyYWRpZW50Qm90dG9tfSkpO1xuICAgICAgICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAke2NvbG9yfSAwJSwgJHtncmFkaWVudEJvdHRvbX0gMTAwJSk7XG4gICAgICAgIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICR7Y29sb3J9IDAlLCAke2dyYWRpZW50Qm90dG9tfSAxMDAlKTtcbiAgICAgICAgLyogT3BlcmEgMTEuMTArICovXG4gICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAke2NvbG9yfSAwJSwgJHtncmFkaWVudEJvdHRvbX0gMTAwJSk7XG4gICAgICAgIC8qIElFMTArICovXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7Y29sb3J9IDAlLCAke2dyYWRpZW50Qm90dG9tfSAxMDAlKTtcbiAgICAgICAgLyogVzNDICovXG4gICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyR7Y29sb3J9JywgZW5kQ29sb3JzdHI9JyR7Z3JhZGllbnRCb3R0b219JywgR3JhZGllbnRUeXBlPTApO1xuICAgICAgICAvKiBJRTYtOSAqL2BcbiAgICB9XG59XG4iXX0=