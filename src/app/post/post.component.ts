import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Post} from "../app.component";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class PostComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Output() onRemove = new EventEmitter<number>()
  @Input() post: Post
  @ContentChild('info', {static: false}) infoRef: ElementRef

  constructor() {
    console.log('constructor')
  }

  removePost(){
this.onRemove.emit(this.post.id)
  }

  ngOnDestroy() {
    console.log('destroy')
  }


  ngAfterViewInit() {
    console.log("AView")
  }

  ngAfterViewChecked() {
    console.log('AViewChecked')
  }

  ngAfterContentChecked() {
    console.log("After Checed")
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngAfterContentInit() {
    console.log('STS')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange')

  }

  ngDoCheck() {
    console.log('DoCheck')
  }

}
