import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  
//TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
// Remove when solved.
/* tslint:disable */ 
template: `
  <div class="container-fluid custom-modal-container" *ngIf="visible">
      <div class="modal fade in" id="memberModal" tabindex="-1" role="dialog" aria-labelledby="memberModalLabel" aria-hidden="true" style="display: block;">
          <div class="modal-dialog modal-sm">
              <div class="modal-content">                        
                  <div class="modal-body">
                      <h5 class="text-center">Loading results</h5>
                      <div class="progress center-block">
                          <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                      </div>
                      <div class="text-center">
                        <button (click)="cancelSearch()" class="btn btn-sm btn-default">Delete article</button>
                        <button (click)="cancelSearch()" class="btn btn-sm btn-default">Cancel</button>        
                      </div>
                  </div>                        
              </div>
          </div>
      </div>    
  </div>
  <div class="modal-backdrop fade in" *ngIf="visible"></div>
  `, styles: [`
  .fade-in {
      opacity:0;  /* make things invisible upon start */
      animation:fadeIn ease-in .75;
      animation-fill-mode:forwards;
      animation-duration:.5s;
      animation-delay: .25s;
  }

  .fade-in-2 {
      opacity:0;  /* make things invisible upon start */
      animation:fadeIn ease-in 1;
      animation-fill-mode:forwards;
      animation-duration:.25s;
      animation-delay: .15s;
  }
  .modal-backdrop {
      top: 0px !important;
  }
`]
})

export class DeleteArticleModal implements OnInit, OnDestroy {

/**
* If embedded allows for setting the visibility state
* thru html
*/
@Input() public isVisible : boolean;

/**
* Listens for result state changes
*/



constructor(private ref: ChangeDetectorRef,
          private reportingService : ReportingService) {  
  this.isVisible = false;
}

ngOnInit() {
  //
  // for now, we want to show the processing modal up until 
  // all of the results have returned.
  //
 // This behavior may change depending on user feedback
  //

}


export class DeleteModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
