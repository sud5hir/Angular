import { Component } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websocketsignalrangular';
  webSocketAPI: any;
  greeting: any;
  name: any;
  ngOnInit() {
    this.webSocketAPI = new WebSocketService(new AppComponent());
  }

  connect() {
    this.webSocketAPI._connect();
  }

  disconnect() {
    this.webSocketAPI._disconnect();
  }

  sendMessage() {
    this.webSocketAPI._send(this.name);
  }

  handleMessage(message) {
    debugger;
    this.name = message.substring(0, 20);
  }
}
