import { Provider, Injectable } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';
import { PEditorMenuPannelContribution, PEditorMenuPannelToolbarSlotContribution } from './components.contribution';

@Injectable()
export class PEditorMenuPannelModule extends BrowserModule {
  providers: Provider[] = [
    PEditorMenuPannelContribution,
    PEditorMenuPannelToolbarSlotContribution,
  ];
}
