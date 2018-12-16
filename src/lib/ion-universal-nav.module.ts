/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Component module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from 'ionic-angular'
import { IonUniversalNav } from './ion-universal-nav.component'

@NgModule({
    imports: [IonicModule, CommonModule],
    declarations: [IonUniversalNav],
    exports: [IonUniversalNav]
})
export class IonUniversalNavModule { }