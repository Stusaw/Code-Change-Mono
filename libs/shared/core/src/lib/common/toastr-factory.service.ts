import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { ToastOptions } from "@ionic/core";
import { SubSink } from "subsink";

@Injectable()
export class ToastrFactoryService {
  public subscriptions: SubSink;
  private toast: HTMLIonToastElement;

  constructor(private _toastController: ToastController) {
    this.subscriptions = new SubSink();
    this.toast = new HTMLIonToastElement();
  }

  show = async (configuration: ToastOptions) => {
    let options: ToastOptions = {
      header: configuration.header || "System Message",
      position: configuration.position || "middle",
      message: configuration.message,
      duration: 3000 || configuration.duration
    };

    if (this.toast) {
      this.toast.dismiss();
    }

    this.toast = await this._toastController.create(options);
    await this.toast.present();
  };

  hide = async () => {
    if (this.toast) {
      await this.toast.dismiss();
    }
  };

  unsubscribe = () => {
    this.subscriptions.unsubscribe();
  };
}
