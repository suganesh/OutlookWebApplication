import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatTreeModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { DirectoryListComponent } from './home/directory-list/directory-list.component';
import { EmailListComponent } from './home/email-list/email-list.component';
import { MessageDisplayComponent } from './home/message-display/message-display.component';
import { EmailComponent } from './home/email-list/email/email.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectoryListService } from './services/directory-list/directory-list.service';
import { EmailListService } from './services/email-list/email-list.service';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FocusPipe } from './shared/common/pipes/focus.pipe';
import { EmailFilterPipe } from './shared/common/pipes/email-filter.pipe';
import { TabMenuComponent } from './home/tab-menu/tab-menu.component';
import { DeletedEmailsComponent } from './home/email-list/deleted-emails/deleted-emails.component';
import { FilterFlagPipe } from './shared/common/pipes/filter-flag.pipe';
import { SentItemsComponent } from './home/email-list/sent-items/sent-items.component';
import { DraftsComponent } from './home/email-list/drafts/drafts.component';
import { JunkEmailComponent } from './home/email-list/junk-email/junk-email.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    DirectoryListComponent,
    EmailListComponent,
    MessageDisplayComponent,
    EmailComponent,
    FocusPipe,
    EmailFilterPipe,
    TabMenuComponent,
    DeletedEmailsComponent,
    FilterFlagPipe,
    SentItemsComponent,
    DraftsComponent,
    JunkEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTreeModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DirectoryListService,
    EmailListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
