import { Provider, Injectable } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';
import { PEditorRightPannelContribution } from './components.contribution';

@Injectable()
export class PEditorRightPannelModule extends BrowserModule {
  providers: Provider[] = [
    PEditorRightPannelContribution,
    // PEditorRightPannelToolbarSlotContribution,
  ];
}
