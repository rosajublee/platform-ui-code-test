import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  subscription: Subscription;
  browserRefresh = false;
//browser refresh
  constructor(private router: Router) {
    this.subscription = router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.browserRefresh = !router.navigated;
        }

        if(this.browserRefresh === true){
          let tempSelectedProviders = JSON.parse(localStorage.getItem('selectedProviders'));
            let tempUnselectedProviders = JSON.parse(localStorage.getItem('unselectedProviders'));

            let isAppFirstLoading: boolean=false;
            if(tempSelectedProviders === null || tempSelectedProviders === undefined
            && tempUnselectedProviders === null || tempUnselectedProviders === undefined)
            {
              isAppFirstLoading = true;
            }
            else{
              this.selectedProviders=tempSelectedProviders;
              this.unselectedProviders=tempUnselectedProviders;
            }
          if(this.selectedProviders === null || this.selectedProviders === undefined){
            this.selectedProviders = [];
          }
          if(this.unselectedProviders === null || this.unselectedProviders === undefined){
            this.unselectedProviders = [];
          }
          console.log(this.unselectedProviders);
        }
    });
  }

  ngOnInit(){

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    
}
//cache clear reset
public reset(){
  this.unselectedProviders=[
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];
  this.selectedProviders=[];

  localStorage.removeItem('unselectedProviders');
  localStorage.setItem('unselectedProviders', JSON.stringify(this.unselectedProviders));
  localStorage.removeItem('selectedProviders');
  localStorage.setItem('selectedProviders', JSON.stringify(this.selectedProviders));
}
//unselected list
  public associate(id: any, event: any) {
    event.preventDefault();
    const index = this.unselectedProviders.findIndex(x => x.id === id);
    if (index > -1) {
      const obj = this.unselectedProviders[index];
      this.selectedProviders.push(obj);
      this.unselectedProviders.splice(index, 1);
    }
    localStorage.removeItem('unselectedProviders');
    localStorage.setItem('unselectedProviders', JSON.stringify(this.unselectedProviders));
    localStorage.removeItem('selectedProviders');
    localStorage.setItem('selectedProviders', JSON.stringify(this.selectedProviders));
  }
  //selected list
  public deassociate(id: any, event: any) {
    event.preventDefault();
    const index = this.selectedProviders.findIndex(x => x.id === id);
    if (index > -1) {
      const obj = this.selectedProviders[index];
      this.unselectedProviders.push(obj);
      this.selectedProviders.splice(index, 1);
    }
    event.stopPropagation();
    localStorage.removeItem('unselectedProviders');
    localStorage.setItem('unselectedProviders', JSON.stringify(this.unselectedProviders));
    localStorage.removeItem('selectedProviders');
    localStorage.setItem('selectedProviders', JSON.stringify(this.selectedProviders));
  }

}
