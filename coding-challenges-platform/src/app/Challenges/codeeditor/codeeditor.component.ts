import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { EditorState, Extension, Compartment } from '@codemirror/state';
import { EditorView, basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { dracula } from '@uiw/codemirror-theme-dracula';

 

@Component({
  selector: 'app-codeeditor',
  standalone: true,
  imports: [],
  templateUrl: './codeeditor.component.html',
  styleUrl: './codeeditor.component.scss'
})
export class CodeeditorComponent implements OnInit, OnChanges {
  @ViewChild('editorHost', { static: true }) editorHost!: ElementRef<HTMLDivElement>;
  @Input() initialCode: string = '';
  @Input() theme: string = 'One Dark'; // Default theme
  private editorView!: EditorView;
  private themeCompartment = new Compartment();

  ngOnInit(): void {
    this.initializeEditor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['theme'] && !changes['theme'].firstChange) {
      this.updateTheme();
    }
  }

  private initializeEditor() {
    const startState = EditorState.create({
      doc: this.initialCode,
      extensions: [
        basicSetup,
        javascript(),
        this.themeCompartment.of(this.getThemeExtension(this.theme))
      ]
    });

    this.editorView = new EditorView({
      state: startState,
      parent: this.editorHost.nativeElement
    });
  }

  private updateTheme(): void {
    this.editorView.dispatch({
      effects: this.themeCompartment.reconfigure(this.getThemeExtension(this.theme))
    });
  }

  private getThemeExtension(theme: string) {
    switch (theme) {
      case 'One Dark':
        return oneDark;
      case 'Dracula':
        return dracula; 
      case 'Light':
        return []; 
      default:
        return [];
    }
  }
  

  public getCode(): string {
    return this.editorView.state.doc.toString();
  }
}