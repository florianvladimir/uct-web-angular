import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition-rules',
  templateUrl: './competition-rules.component.html',
  styleUrls: ['./competition-rules.component.scss']
})
export class CompetitionRulesComponent {

  constructor(public dialog: MatDialog) { 
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(CompetitionRulesDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  

}

@Component({
  selector: 'competition-rules-dialog',
  templateUrl: 'competition-rules-dialog.html',
  styleUrls: ['competition-rules-dialog.css']
})
export class CompetitionRulesDialog {

  constructor(
    public dialogRef: MatDialogRef<CompetitionRulesDialog>
    //@Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  acceptRules(): void {
    window.open("https://trackmaxx.ch/", "_blank");
    this.dialogRef.close();
  }

}
