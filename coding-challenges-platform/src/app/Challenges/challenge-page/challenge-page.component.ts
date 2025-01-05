import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip'; // For difficulty badges, etc.
import { CodeeditorComponent } from "../codeeditor/codeeditor.component";
import { InputSwitchModule } from 'primeng/inputswitch';
import { PanelModule } from 'primeng/panel';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { dracula } from '@uiw/codemirror-theme-dracula';


interface TestCase {
  input: string;
  expected: string;
  output: string | null;
}

interface Language {
  name: string;
  value: string;
}

interface ThemeOption {
  name: string;
  value: string;
}

@Component({
  selector: 'app-challenge-page',
  standalone: true,
  imports: [CommonModule, DropdownModule,  SelectModule, BadgeModule, FormsModule, ButtonModule, TabsModule, CardModule, ChipModule, CodeeditorComponent,  InputSwitchModule, PanelModule ],
  templateUrl: './challenge-page.component.html',
  styleUrl: './challenge-page.component.scss',
})


export class ChallengePageComponent implements OnInit {
  challengeTitle = 'Two Sum Problem';
  selectedDifficulty = 'medium';
  challengeDescription = 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.';
  
  instructions = [
    'You may assume that each input would have exactly one solution.',
    'You may not use the same element twice.',
    'Return the answer in any order.'
  ];
  
  examples = [
    { input: '[2,7,11,15], target = 9', output: '[0,1]' },
    { input: '[3,2,4], target = 6', output: '[1,2]' },
  ];

  languages: Language[] = [
    { name: 'JavaScript', value: 'javascript' },
    { name: 'TypeScript', value: 'typescript' },
    { name: 'Python', value: 'python' }
  ];

  themes: ThemeOption[] = [
    { name: 'One Dark', value: 'One Dark' },
    { name: 'Dracula', value: 'Dracula' },
    { name: 'Light', value: 'Light' }
  ];

  selectedLanguage = 'javascript';
  selectedTheme = 'One Dark'; // Default theme
  initialCode = `function twoSum(nums, target) {
  // Write your solution here
}`;

  executionResult: string | null = null;
  loading = false;
  isSmallScreen = false;

  testCases: TestCase[] = [
    { input: '[2,7,11,15], target=9', expected: '[0,1]', output: null },
    { input: '[3,2,4], target=6', expected: '[1,2]', output: null }
  ];

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 992;
  }

  runCode() {
    this.loading = true;
    this.executionResult = 'Running code...'; 
    setTimeout(() => {
      this.executionResult = 'Output: [0,1]'; // Mock result
      this.testCases[0].output = '[0,1]';
      this.loading = false;
    }, 1000);
  }

  submitCode() {
    this.loading = true;
    this.executionResult = 'Submitting solution...';
    setTimeout(() => {
      this.executionResult = 'All test cases passed!';
      this.testCases = this.testCases.map(tc => ({ ...tc, output: tc.expected }));
      this.loading = false;
    }, 1000);
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'easy': return '#4caf50';
      case 'medium': return '#ff9800';
      case 'hard': return '#f44336';
      default: return '#999';
    }
  }

  goBack() {
    // Implement navigation logic
  }
}