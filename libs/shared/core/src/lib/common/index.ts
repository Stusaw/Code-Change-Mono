import { LocalStorageService } from './local-storage.service';
import { SettingsService } from './settings.service';
import { ToastrFactoryService } from './toastr-factory.service';

export * from './local-storage.service';
export * from './settings.service';
export * from './toastr-factory.service';

export const AppCommonServices = [
  ToastrFactoryService,
  LocalStorageService,
  SettingsService,
];
