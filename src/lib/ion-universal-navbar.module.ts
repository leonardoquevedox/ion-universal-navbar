/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Component module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from 'ionic-angular'
import { IonUniversalNavbar } from './ion-universal-navbar.component'

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [IonUniversalNavbar],
    exports: [IonUniversalNavbar]
})
export class IonUniversalNavbarModule { }