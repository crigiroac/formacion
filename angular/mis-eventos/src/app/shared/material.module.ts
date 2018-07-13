import { NgModule } from '@angular/core'
import { MatToolbarModule, 
    MatCardModule, 
    MatButtonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule
} from '@angular/material';


@NgModule({
    imports: [MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatListModule
    ],
    exports: [MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatListModule]
})
export class MaterialModule { }