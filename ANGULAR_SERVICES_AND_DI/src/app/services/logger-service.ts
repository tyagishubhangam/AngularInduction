import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggerService{

    logData(){
        console.log("Logging event");
    }
}