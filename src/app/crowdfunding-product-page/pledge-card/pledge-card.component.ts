import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RewardsDailogComponent } from '../modal/rewards-dailog/rewards-dailog.component';

@Component({
  selector: 'pledge-card',
  templateUrl: './pledge-card.component.html',
  styleUrls: ['./pledge-card.component.scss'],
})
export class PledgeCardComponent implements OnInit {
  @Input() data: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openRewardDailog(): void {
    const dialogRef = this.dialog.open(RewardsDailogComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
