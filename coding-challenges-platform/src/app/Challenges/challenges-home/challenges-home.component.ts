import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Card, CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { Select } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { Checkbox } from 'primeng/checkbox';
import { FloatLabel } from 'primeng/floatlabel';
import { Chip } from 'primeng/chip';

@Component({
  selector: 'app-challenges-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    DropdownModule,
    ButtonModule,
    Select,
    Checkbox,
    InputTextModule,
    FloatLabel,
    ReactiveFormsModule,
    Chip
    
  ],
  templateUrl: './challenges-home.component.html',
  styleUrl: './challenges-home.component.scss',
})
export class ChallengesHomeComponent {

  challenges = [
    {
      title: 'Array Manipulation Challenge',
      description: 'Solve problems using arrays and optimize your code.',
      difficulty: 'Intermediate',
      collection: 'Data Structures',
      date: '2023-12-01',
    },
    {
      title: 'Sorting Algorithm Challenge',
      description: 'Implement various sorting algorithms and analyze their efficiency.',
      difficulty: 'Advanced',
      collection: 'Algorithms',
      date: '2023-12-02',
    },
    {
      title: 'Basic String Operations',
      description: 'Learn string manipulation with beginner-level problems.',
      difficulty: 'Beginner',
      collection: 'Basic Programming',
      date: '2023-11-30',
    },
    {
      title: 'Graph Traversal',
      description: 'Understand graph algorithms like BFS and DFS.',
      difficulty: 'Advanced',
      collection: 'Algorithms',
      date: '2023-12-03',
    },
  ];

  filteredChallenges = [...this.challenges]; // Holds the filtered challenges

  filters = {
    keyword: '',
    difficulty: null,
    collection: null,
    sort: null,
  };

  difficultyOptions = [
    { label: 'All', value: null },
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Advanced', value: 'Advanced' },
  ];

  collectionOptions = [
    { label: 'All', value: null },
    { label: 'Basic Programming', value: 'Basic Programming' },
    { label: 'Data Structures', value: 'Data Structures' },
    { label: 'Algorithms', value: 'Algorithms' },
  ];

  sortOptions = [
    { label: 'Latest', value: 'latest' },
    { label: 'Oldest', value: 'oldest' },
  ];

  constructor() {}

  ngOnInit(): void {}

  applyFilters() {
    this.filteredChallenges = this.challenges
      .filter((challenge) => {
        // Filter by keyword
        return (
          !this.filters.keyword ||
          challenge.title
            .toLowerCase()
            .includes(this.filters.keyword.toLowerCase())
        );
      })
      .filter((challenge) => {
        // Filter by difficulty
        return (
          this.filters.difficulty === null ||
          challenge.difficulty === this.filters.difficulty
        );
      })
      .filter((challenge) => {
        // Filter by collection
        return (
          this.filters.collection === null ||
          challenge.collection === this.filters.collection
        );
      });

    // Sort by date
    if (this.filters.sort) {
      this.filteredChallenges.sort((a, b) =>
        this.filters.sort === 'latest'
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }
  }
}