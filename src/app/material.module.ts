import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule
    ]
})
export class MaterialModule { }
