import { Injectable, ViewContainerRef, Type } from '@angular/core';

export interface DialogButton {
    name: string;
    title: string;
}

export interface DialogOptions {
    title?: string;
    content?: string | Type<any>;
    buttons?: DialogButton[];
    defaultButton?: string;
    cancelButton?: string;
    confirmButton?: string;
}

const defaultDialogOptions: DialogOptions = {};

export function findFirstNonNull(...args: any[]) {

}

@Injectable()
export class DialogService {
    private vieContainer: ViewContainerRef;

    public setViewContainer(viewContainer: ViewContainerRef) {

    }

    public showDialog() {

    }
}

