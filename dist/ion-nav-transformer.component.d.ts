/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Responsive navbar component.
 */
import { App } from 'ionic-angular';
export declare class IonNavTransformer {
    private app;
    tabs: any;
    options: any;
    isFirstTabSelect: boolean;
    scrollLeft: boolean;
    lastView: any;
    constructor(app: App);
    ngOnInit(): void;
    hideModalOnBack(): void;
    fixTabSelect(): void;
    screenIsDesktopSized(): boolean;
    toggleDrawer(): void;
}
