import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})

export class ServerComponent {
    // Databinding - String Interpolation
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    // checkOnlineStatus() {
    //     return this.serverStatus === 'online';
    // }
}
