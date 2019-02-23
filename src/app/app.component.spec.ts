import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterModule, Router } from '@angular/router';
import { ArticleCardComponent } from './artilce-card/artilce-card.component';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatDialog } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule,
        FormsModule,
        MatInputModule,
        MatButtonModule
      ],
      declarations: [
        AppComponent,
        ArticleCardComponent,
        ArticleComponent
      ],
      providers: [MatDialog]
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'project-one'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('project-one');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to project-one!');
  // });
  it("Search Method", ()=>{
      const myC = TestBed.createComponent(AppComponent);
      const myObj = myC.debugElement.componentInstance;
      myObj.title = 'fashion';
      myObj.search();
      expect(myObj.toggle).toBeTruthy();      
  })
});


// describe('MyTestSuite', ()=>{

//   it('CaseOne', ()=>{

//   })
// })