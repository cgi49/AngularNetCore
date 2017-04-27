import { Component } from '@angular/core';

@Component({
    selector: 'helloworld',
    template: require('./helloworld.component.html')
})
export class HelloWorldComponent {
    public entity: any = {};
    constructor() {
        this.entity['prop'] = 'Bonjour';
    }
}