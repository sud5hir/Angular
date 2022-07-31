import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  webSocketEndPoint: string = 'wss://localhost:7258/ws';
  appComponent: AppComponent;
  private socket: any;

  constructor(appComponent: AppComponent) {
    this.appComponent = appComponent;
  }

  _connect() {
    this.socket = new WebSocket(this.webSocketEndPoint);
    this.socket.addEventListener("open", ((ev: { data: any; }) => {
      console.log('opened')
    }));
    this.socket.addEventListener("message", ((ev: { data: any; }) => {
      debugger;
      var messageBox: string = ev.data;
      console.log('message object', ev.data);
      this.onMessageReceived(ev.data);
    }
    ));
  }
  _disconnect() {
    if (this.socket !== null) {
      this.socket.close();
    }
    console.log("Disconnected");
  }
  // on error, schedule a reconnection attempt
  errorCallBack(error: any) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this._connect();
    }, 5000);
  }

  onMessageReceived(message) {
    debugger;
    console.log("Message Recieved from Server :: " + message);
    this.appComponent.handleMessage((message));
  }
  _send(message: any) {
    console.log("calling logout api via web socket");
    var requestAsJson = JSON.stringify(message);
    this.socket.send(requestAsJson);
  }
}
