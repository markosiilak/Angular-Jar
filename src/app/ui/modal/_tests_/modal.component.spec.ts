import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';

import { ModalComponent } from '../modal.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ModalComponent', () => {
  let component: ModalComponentTestHost;
  let fixture: ComponentFixture<ModalComponentTestHost>;

  beforeEach(async(() => {
    /**
     * @uijar ModalComponent
     * @hostcomponent ModalComponentTestHost
     */
    TestBed.configureTestingModule({
      declarations: [ ModalComponent, ModalComponentTestHost ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponentTestHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /** @uijarexample Modal with padding */
  it('should be created and set padding to "true"', () => {
    component.padding = true;
    component.text = 'Lorem ipsum dolor sit amet...';
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.directive(ModalComponent)).classes.padding).toBeTruthy();
  });

  /** @uijarexample Card without padding */
  it('should be created and set padding to "false"', () => {
    component.padding = false;
    component.text = 'Lorem ipsum dolor sit amet...';
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.directive(ModalComponent)).classes.padding).toBeFalsy();
  });
});

@Component({
  selector: 'app-modal-test-host',
  template: `
    <app-modal [padding]="padding">{{text}}</app-modal>
  `
})
class ModalComponentTestHost {
  padding: boolean;
  text: string;
}
