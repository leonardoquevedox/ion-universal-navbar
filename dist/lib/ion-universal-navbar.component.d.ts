/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description universal navbar component.
 */
import { App } from 'ionic-angular';
export declare class IonUniversalNavbar {
    private app;
    options: any;
    tabs: any;
    isFirstTabSelect: boolean;
    scrollLeft: boolean;
    lastView: any;
    constructor(app: App);
    ngOnInit(): void;
    hideModalOnBack(): void;
    fixTabSelect(): void;
    isDesktop(): boolean;
    toggleDrawer(): void;
    appendStyles(): void;
    getLinearGradient(color: any): string;
}
