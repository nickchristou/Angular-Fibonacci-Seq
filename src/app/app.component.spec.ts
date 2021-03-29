import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fibonacci-seq'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fibonacci-seq');
  });
  /* Empty input*/
  it(`should notify invalid input (empty)`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	button.triggerEventHandler('click', null);
    expect(app.output).toEqual('Must be valid and positive integer');
  });
  /* Negative int*/
  it(`should notify invalid input (negative)`, (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	fixture.whenStable().then(() => {
		let input = fixture.debugElement.query(By.css('input'));
		let el = input.nativeElement;
		el.value = '-1';
		button.triggerEventHandler('click', null);
		expect(app.output).toEqual('Must be valid and positive integer');
		done();
		});
	});
  /* non - int*/
  it(`should notify invalid input (not an int)`, (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	fixture.whenStable().then(() => {
		let input = fixture.debugElement.query(By.css('input'));
		let el = input.nativeElement;
		el.value = '1.5';
		button.triggerEventHandler('click', null);
		expect(app.output).toEqual('Must be valid and positive integer');
		done();
		});
	});
  /* nonsense input*/
  it(`should notify invalid input (character input)`, (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	fixture.whenStable().then(() => {
		let input = fixture.debugElement.query(By.css('input'));
		let el = input.nativeElement;
		el.value = 'test!';
		button.triggerEventHandler('click', null);
		expect(app.output).toEqual('Must be valid and positive integer');
		done();
		});
	});
  /* Sequence 0*/
  it(`should be output 0`, (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	fixture.whenStable().then(() => {
		let input = fixture.debugElement.query(By.css('input'));
		let el = input.nativeElement;
		el.value = '0';
		button.triggerEventHandler('click', null);
		expect(app.output).toEqual('0');
		done();
		});
	});
  /* Sequence 1*/
  it(`should be output 1`, (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	fixture.whenStable().then(() => {
		let input = fixture.debugElement.query(By.css('input'));
		let el = input.nativeElement;
		el.value = '1';
		button.triggerEventHandler('click', null);
		expect(app.output).toEqual('1');
		done();
		});
	});
  /* Sequence 5*/
  it(`should be output 5`, (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	fixture.whenStable().then(() => {
		let input = fixture.debugElement.query(By.css('input'));
		let el = input.nativeElement;
		el.value = '5';
		button.triggerEventHandler('click', null);
		expect(app.output).toEqual('5');
		done();
		});
	});
  /* Sequence 10*/
  it(`should be output 55`, (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	fixture.whenStable().then(() => {
		let input = fixture.debugElement.query(By.css('input'));
		let el = input.nativeElement;
		el.value = '10';
		button.triggerEventHandler('click', null);
		expect(app.output).toEqual('55');
		done();
		});
	});
  /* Sequence 20*/
  it(`should be output 6765`, (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	fixture.whenStable().then(() => {
		let input = fixture.debugElement.query(By.css('input'));
		let el = input.nativeElement;
		el.value = '20';
		button.triggerEventHandler('click', null);
		expect(app.output).toEqual('6765');
		done();
		});
	});

});
