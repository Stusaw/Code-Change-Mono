import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'formly-field-slider',
  template: `
    <ion-grid>
      <ion-row>
        <ion-col size-xl="6" offset-xl="3" size-md="10" offset-md="1">
          <ion-slides pager="true" #slider [options]="{ autoHeight: true }">
            <ion-slide
              *ngFor="
                let field of field.fieldGroup;
                let index = index;
                let last = last
              "
            >
              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-text color="primary">
                      <ion-icon
                        size="large"
                        name="{{ field?.templateOptions?.icon }}"
                      ></ion-icon>
                      <h1>{{ field?.templateOptions?.label }}</h1>
                      <h6>{{ field?.templateOptions?.description }}</h6>
                    </ion-text>

                    <formly-field [field]="field"></formly-field>

                    <div
                      fxLayout="row"
                      fxLayoutAlign="{{
                        index == 0 ? 'end center' : 'space-between center'
                      }}"
                    >
                      <button
                        mat-flat-button
                        color="accent"
                        (click)="previous()"
                        *ngIf="index !== 0"
                        type="button"
                      >
                        {{ 'global.actions.previous' | translate }}
                      </button>
                      <button
                        mat-flat-button
                        color="accent"
                        (click)="next()"
                        *ngIf="!last"
                        [disabled]="!isValid(field)"
                      >
                        {{ 'global.actions.next' | translate }}
                      </button>
                      <button
                        mat-flat-button
                        color="accent"
                        *ngIf="last"
                        (click)="submit()"
                        [disabled]="!form.valid"
                        type="button"
                      >
                        {{ 'global.actions.continue' | translate }}
                      </button>
                    </div>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-slide>
          </ion-slides>
        </ion-col>
      </ion-row>
    </ion-grid>
  `,
})
export class FormlyFieldStepSlider extends FieldType {
  @ViewChild(IonSlides, { read: IonSlides, static: true }) slider!: IonSlides;

  async ngAfterViewInit() {
    // this._sliderService.slider = this.slider;
    await this.slider.lockSwipeToNext(true);
    await this.slider.lockSwipeToPrev(true);
   
  }

  async next() {
    await this.slider.lockSwipeToNext(false);
    await this.slider.slideNext();
    await this.slider.lockSwipeToNext(true);
    await this.slider.updateAutoHeight(10);
  }

  async previous() {
    await this.slider.lockSwipeToPrev(false);
    await this.slider.slidePrev();
    await this.slider.lockSwipeToPrev(true);
  }

  submit() {}

  isValid(field: FormlyFieldConfig): boolean | undefined {
    if (field.key) {
      return field?.formControl?.valid;
    }

    return field?.fieldGroup?.every((f) => this.isValid(f));
  }
}
