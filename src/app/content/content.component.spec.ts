import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContentComponent } from './content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {

  let fixture: ComponentFixture<ContentComponent>;
  let appElement: DebugElement;
  let appComponent: ContentComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatTabsModule
      ],
      declarations: [
        ContentComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentComponent);
    appElement = fixture.debugElement.componentInstance;
    appComponent = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(appElement).toBeTruthy();
  });

  // Remove below for test.
  it(`should have as title 'content-section'`, () => {
   expect(appComponent.title).toEqual('content-section');
  });

  it(`should set the username as Boy when display name function is called with true`, () => {
    appComponent.displayName(true);
    expect(appComponent.flag).toEqual(true);
    expect(appComponent.userName).toEqual('Boy');
  });

  it(`should set the username as Girl when display name function is called with false`, () => {
    appComponent.displayName(false);
    expect(appComponent.flag).toEqual(false);
    expect(appComponent.userName).toEqual('Girl');
  });
  //
});
