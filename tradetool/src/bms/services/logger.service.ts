import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerSingltonService {

  logs: string[] = []; // capture logs for testing

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
}
export class FileLogger extends LoggerSingltonService {
  private _randomNo = '';

  constructor() {
    super();
    console.log('FileLogger Constructed');
    this._randomNo = 'App ' + Math.floor(Math.random() * 1000 + 1);
  }
  get RandomNo() {
    return this._randomNo;
  }
}
export class Logger1 {
  logs: string[] = []; // capture logs for testing

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
}
@Injectable()
export class AppNonSingletonService {
  private _randomNo = '';

  constructor() {
    console.log('AppService Constructed');
    this._randomNo = 'App ' + Math.floor(Math.random() * 1000 + 1);
  }

  get RandomNo() {
    return this._randomNo;
  }
}
