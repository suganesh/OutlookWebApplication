import { Component, OnInit } from '@angular/core';
import { EmailListService } from 'src/app/services/email-list/email-list.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  emailList: any[];

  constructor(private emailListService: EmailListService) { }

  ngOnInit() {
    this.getEmails();
  }

  private getEmails(): void {
    this.emailListService.getEmailList().subscribe(this.getEmailsSuccess, this.getEmailsFailure);
  }

  private getEmailsSuccess = (emails: any[]) => {
    this.emailList = emails;
  }

  private getEmailsFailure = (error: HttpErrorResponse) => {
    console.log("The get email list api failed: ", error);
  }
}