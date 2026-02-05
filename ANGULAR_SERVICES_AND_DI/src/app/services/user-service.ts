import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../models/User";
import { LoggerService } from "./logger-service";

@Injectable(
    {
        providedIn:'root'
    }
)
export class UserService{
    constructor(private logger: LoggerService){

    }
    userClicked : EventEmitter<User> = new EventEmitter<User>();

    users: User[] = [
        new User('John', 'Male'),
        new User('Cathie', 'female')
    ];

    GreetUser(){
        alert("User Greet success");
    }

    GetAllUsers(){
        return this.users;
        
    }

    CreateUser(name: string, gender: string ){
        let user = new User(name, gender);
        this.users.push(user);
        this.logger.logData();
    }

    OnShowUserDetails(user:User){
        this.userClicked.emit(user);
    }
}