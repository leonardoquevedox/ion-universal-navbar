/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description universal navbar component.
 */

import { App } from 'ionic-angular'

import { Component, Input } from '@angular/core'
import { Injectable } from '@angular/core'
import { ViewChild } from '@angular/core'

@Component({
    selector: 'ion-universal-navbar',
    templateUrl: 'ion-universal-navbar.component.html',
    styleUrls: ['ion-universal-navbar.component.scss']
})

@Injectable()
export class IonUniversalNavbar {

    @Input('options') options: any = {
        sidemenu: { heading: '' },
        tabs: {
            layout: 'icon-top',
            placement: 'bottom',
            selectedIndex: 0
        },
        pages: [],
        hide: false
    }

    @ViewChild('tabs') tabs: any

    isFirstTabSelect: boolean = true
    scrollLeft: boolean
    lastView: any

    constructor(private app: App) { }

    ngOnInit() {
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
}
