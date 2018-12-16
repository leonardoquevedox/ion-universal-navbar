/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description universal navbar component.
 */


import { Component, Input, ViewEncapsulation } from '@angular/core'
import { Injectable } from '@angular/core'
import { ViewChild } from '@angular/core'

import { App } from 'ionic-angular'

import * as _color from 'color'
const Color = _color

@Component({
    selector: 'ion-universal-navbar',
    templateUrl: 'ion-universal-navbar.component.html',
    styleUrls: ['ion-universal-navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

@Injectable()
export class IonUniversalNavbar {

    @Input('options') options: any = {
        color: '#00FF00',
        pages: [],
        hide: false,
        sidemenu: { heading: '' },
        tabs: {
            layout: 'icon-top',
            placement: 'bottom',
            selectedIndex: 0
        }
    }

    @ViewChild('tabs') tabs: any

    isFirstTabSelect: boolean = true
    scrollLeft: boolean
    lastView: any

    constructor(private app: App) {
    }
    
    ngOnInit() {
        this.appendStyles()
        this.hideModalOnBack()
    }

    hideModalOnBack() {
        this.app.viewWillEnter.subscribe((view) => {
            let closeModal = this.lastView && this.lastView.isOverlay
            if (closeModal) this.lastView.dismiss()
            this.lastView = view
        })
    }

    fixTabSelect() {
        this.tabs.ionChange.subscribe(() => {
            if (!this.isFirstTabSelect) return
            this.isFirstTabSelect = false
            let selected = this.tabs.getSelected()
            if (!selected || !selected._views || !(selected._views.length > 0)) return
            let isRoot = selected._views && !(selected._views.length > 1)
            let isWrongRoot = selected.root !== selected._views[0].id
            if (isRoot && isWrongRoot) selected.setRoot(selected.root)
        })
    }

    isDesktop() {
        return window.innerWidth > 768
    }

    toggleDrawer() {
        this.scrollLeft = !this.scrollLeft
    }

    appendStyles() {
        let stylesElement = document.createElement('style')
        stylesElement.id = 'ion-universal-navbar-colors'
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
        }`
        if (!document.querySelector('#ion-universal-navbar-colors')) document.head.appendChild(stylesElement)
    }

    getLinearGradient(color) {
        let gradientBottom = Color(color).rotate(10).hex()

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
        /* IE6-9 */`
    }
}
