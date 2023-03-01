import { Provider, Injectable } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';

import { FbxConverComponentsContribution } from './components.contribution';

@Injectable()
export class FbxConverComponentsModule extends BrowserModule {
  providers: Provider[] = [
    FbxConverComponentsContribution
  ];
}