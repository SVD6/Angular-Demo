import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSecretComponent } from './main-secret.component';

describe('MainSecretComponent', () => {
  let component: MainSecretComponent;
  let fixture: ComponentFixture<MainSecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
