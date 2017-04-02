import { Injectable } from '@angular/core';

@Injectable()

export class PubSub{
    eventCallbacks = [];
    on = (eventName: string, callback: any) => {
        this.eventCallbacks.push({eventName: eventName, callback: callback});
    }

    off = (eventName: string, callback: any) => {
        this.eventCallbacks.splice(this.eventCallbacks.indexOf(this.eventCallbacks.find(f => { return (f.eventName === eventName && f.callback === callback)})), 1);
    }

    fire = (eventName: string, data: any) => {
        this.eventCallbacks.forEach(eventCallback => {
            if ( eventCallback.eventName === eventName){
                eventCallback.callback(data);
            }
        })
    }
}