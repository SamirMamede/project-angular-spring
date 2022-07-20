import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CurriculumService } from './../services/curriculum.service';
import { Curriculum } from './../model/curriculum';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  curriculum$: Observable<Curriculum[]>;
  displayedColumns = ['nome', 'competencias', 'vagaDesejada', 'numeroContato', 'linkedin', 'actions'];

  ///curriculumService: CurriculumService;

  constructor(
    private curriculumService: CurriculumService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
     ) {
    // this.curriculum = [];
    //this.curriculumService = new CurriculumService;
    this.curriculum$ = this.curriculumService.list()
    .pipe(
      catchError(error => {
        this.onError("Erro ao carregar lista de curriculums !!");
        return of([])
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
