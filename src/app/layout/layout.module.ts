import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatListModule],
  exports: [SidebarComponent],
})
export class LayoutModule {}
