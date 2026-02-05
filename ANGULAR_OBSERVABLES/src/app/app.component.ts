import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'ANGULAR_OBSERVABLES';
  data: any[] = [];

  // // 1: Creating an observable
  // Here setting values at single next
  // myObservable = new Observable((observer)=>{
  //   observer.next([1,2,3,4,5])
  // });

// -----------------------------------------------------------------------

  // // Now lets have multiple nexts                                      
  // myObservable = new Observable((observer)=>{
  //   setTimeout(()=>{observer.next(1)}, 1000);
  //   setTimeout(()=>{observer.next(2)}, 2000);
  //   setTimeout(()=>{observer.next(3)}, 3000);
  //   setTimeout(()=>{observer.next(4)}, 4000);
  //   setTimeout(()=>{observer.next(5)}, 5000);
  //   setTimeout(()=>{observer.next(6)}, 6000);
  // })

  // // Creating Subscriber
  // GetAsyncData(){

  //   this.myObservable.subscribe((val: any)=>{
  //     this.data.push(val)
  //   })
  // }

//----------------------------------------------------------------------

  // // Now Lets Implement for error
  // myObservable = new Observable((observer)=>{
  //   setTimeout(()=>{observer.next(1)}, 1000);
  //   setTimeout(()=>{observer.next(2)}, 2000);
  //   setTimeout(()=>{observer.next(3)}, 3000);
  //   setTimeout(()=>{observer.error(new Error("An Error Occoured"))}, 4000);
  //   setTimeout(()=>{observer.next(5)}, 5000);
  //   setTimeout(()=>{observer.next(6)}, 6000);
  // })

  // // Creating in Subscriber second callback for error
  // GetAsyncData(){

  //   this.myObservable.subscribe((val: any)=>{
  //     this.data.push(val)
  //   },
  //   (err)=>{
  //     alert(err.message);
  //   }
  // )
  // }

  // --------------------------------------------------------------------------

   // Now Lets Implement for complete
  // myObservable = new Observable((observer)=>{
  //   setTimeout(()=>{observer.next(1)}, 1000);
  //   setTimeout(()=>{observer.next(2)}, 2000);
  //   setTimeout(()=>{observer.next(3)}, 3000);
  //   setTimeout(()=>{observer.next(5)}, 4000);
  //   setTimeout(()=>{observer.next(6)}, 5000);
  //   setTimeout(()=>{observer.complete()}, 6000);
  // })

  // // Creating in Subscriber third callback is for completed
  // GetAsyncData(){

  //   this.myObservable.subscribe((val: any)=>{
  //     this.data.push(val)
  //   },
  //   (err)=>{
  //     alert(err.message);
  //   },
  //   ()=>{
  //     alert("Event Completed");
  //   }
  // )
  // }

  // latest way
  // GetAsyncData(){

  //   this.myObservable.subscribe({
  //     next:(val: any)=>{
  //       this.data.push(val);
  //     },
  //     error(err){
  //       alert(err.message)
  //     },
  //     complete(){
  //       alert("all streaming completed")
  //     }
  //   })
  // }

  // ---------------------------------------------------------------

  // Using of()
  // array1 = [1,2,3,4,5];
  // array2 = ['a','b','c', 'd'];
  // myObservable = of(this.array1, this.array2, '20', 100,true);

  // GetAsyncData(){
  //   this.myObservable.subscribe({
  //     next: (val: any)=>{
  //       this.data.push(val);
  //       console.log(this.data)
  //     },
  //     error(err){
  //       alert(err.message)
  //     },
  //     complete(){
  //       alert("all data streamed successfully");
  //     }
  //   });
  // }

  //  ---------------------------------------------------------------

  // Using from()
  
  array1 = [1,2,3,4,5];
  // array2 = ['a','b','c', 'd'];
  // myObservable = from(this.array1);

  // ------------------------------------------
  // Using promises here
  // promiseData = new Promise((resolve, reject)=>{
  //   resolve([1,2,3,4,5])
  // })
  // myObservable = from(this.promiseData);
  // // ---------------------------------------------

  // GetAsyncData(){
  //   this.myObservable.subscribe({
  //     next: (val: any)=>{
  //       this.data.push(val);
  //       console.log(this.data)
  //     },
  //     error(err){
  //       alert(err.message)
  //     },
  //     complete(){
  //       alert("all data streamed successfully");
  //     }
  //   });
  // }

  // ------------------------------------------
  // using fromEvent() operator
  @ViewChild('btnRef')
  btnRef : ElementRef;

  createBtnObs;

  buttonClicked(){
    let cnt = 0;
    this.createBtnObs = fromEvent(this.btnRef.nativeElement, 'click')
                                .subscribe({
                                  next: (data: any)=>{
                                    console.log(data);
                                    this.addChild(++cnt);
                                  }
                                })
  }

  ngAfterViewInit(){
    this.buttonClicked();
  }
  addChild(cnt){
    let div = document.createElement('div');
    div.innerText = "item " + cnt;
    document.getElementById('container').appendChild(div);
  }


}
