import { Provider, Injectable } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';
import { PEditorContextMenuContribution } from './index.contribution';

@Injectable()
export class PEditorContextMenuModule extends BrowserModule {
  providers: Provider[] = [
    PEditorContextMenuContribution,
  ];
}
