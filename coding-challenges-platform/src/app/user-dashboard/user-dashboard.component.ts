import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';
import { Panel } from 'primeng/panel';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [ CommonModule, MenubarModule, CardModule,  ButtonModule, ChipModule, BadgeModule, Panel, TabsModule ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent implements OnInit {
  menuItems: any[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'Stats' },
      { label: 'Kata' },
      { label: 'Solutions' },
      { label: 'Translations' },
      { label: 'Collections' },
      { label: 'Kumite' },
      { label: 'Social' },
      { label: 'Discourse' }
    ];
  }
}