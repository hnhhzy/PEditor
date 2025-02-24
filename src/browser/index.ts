const win = window as any;
win.Buffer = win.BufferBridge;
if (!(window as any).process) {
  (window as any).process = {
    browser: true,
    env: (window as any).env,
    listener: () => [],
  };
}

import '@opensumi/ide-i18n';
import { ElectronBasicModule } from '@opensumi/ide-electron-basic/lib/browser';
import { renderApp } from './app';

import { MainLayoutModule } from '@opensumi/ide-main-layout/lib/browser';
import { MenuBarModule } from '@opensumi/ide-menu-bar/lib/browser';
import { MonacoModule } from '@opensumi/ide-monaco/lib/browser';
import { WorkspaceModule } from '@opensumi/ide-workspace/lib/browser';
import { StatusBarModule } from '@opensumi/ide-status-bar/lib/browser';
import { EditorModule } from '@opensumi/ide-editor/lib/browser';
import { ExplorerModule } from '@opensumi/ide-explorer/lib/browser';
import { FileTreeNextModule } from '@opensumi/ide-file-tree-next/lib/browser';
import { FileServiceClientModule } from '@opensumi/ide-file-service/lib/browser';
import { StaticResourceModule } from '@opensumi/ide-static-resource/lib/browser';
import { SearchModule } from '@opensumi/ide-search/lib/browser';
import { FileSchemeModule } from '@opensumi/ide-file-scheme/lib/browser';
import { OutputModule } from '@opensumi/ide-output/lib/browser';
import { QuickOpenModule } from '@opensumi/ide-quick-open/lib/browser';
import { ClientCommonModule, BrowserModule, ConstructorOf } from '@opensumi/ide-core-browser';
import { ThemeModule } from '@opensumi/ide-theme/lib/browser';

import { OpenedEditorModule } from '@opensumi/ide-opened-editor/lib/browser';
import { OutlineModule } from '@opensumi/ide-outline/lib/browser';
import { PreferencesModule } from '@opensumi/ide-preferences/lib/browser';
import { ToolbarModule } from '@opensumi/ide-toolbar/lib/browser';
import { OverlayModule } from '@opensumi/ide-overlay/lib/browser';
import { ExtensionStorageModule } from '@opensumi/ide-extension-storage/lib/browser';
import { StorageModule } from '@opensumi/ide-storage/lib/browser';
import { SCMModule } from '@opensumi/ide-scm/lib/browser';

import { MarkersModule } from '@opensumi/ide-markers/lib/browser';
import { WebviewModule } from '@opensumi/ide-webview';
import { MarkdownModule } from '@opensumi/ide-markdown';

import { LogModule } from '@opensumi/ide-logs/lib/browser';
import { WorkspaceEditModule } from '@opensumi/ide-workspace-edit/lib/browser';
import { ExtensionModule } from '@opensumi/ide-extension/lib/browser';
import { DecorationModule } from '@opensumi/ide-decoration/lib/browser';
import { DebugModule } from '@opensumi/ide-debug/lib/browser';
import { VariableModule } from '@opensumi/ide-variable/lib/browser';
import { KeymapsModule } from '@opensumi/ide-keymaps/lib/browser';
import { MonacoEnhanceModule } from '@opensumi/ide-monaco-enhance/lib/browser/module';

import { TerminalNextModule } from '@opensumi/ide-terminal-next/lib/browser';
import { CommentsModule } from '@opensumi/ide-comments/lib/browser';

import { ClientAddonModule } from '@opensumi/ide-addons/lib/browser';
import { TaskModule } from '@opensumi/ide-task/lib/browser';

import { DemoModule } from 'modules/demo';
import { LocalBasicModule } from 'modules/basic/browser';

import { customLayoutConfig } from './layout';
import { MiniDesktopModule } from './module';

import { ExtensionManagerModule } from '../extensionManager/browser';
import { PEditorContextMenuModule } from 'modules/peditor-context-menu';
import { FbxConverComponentsModule } from 'modules/conver/fbx';
import { TogglePanelSampleModule } from 'modules/toggle-panel';
import { SlotLocation } from '@opensumi/ide-core-browser';
import { PEditorRightPannelLayout } from 'modules/peditor-right-pannel/components-layout';
import { PEditorRightPannelModule } from 'modules/peditor-right-pannel';

export const CommonBrowserModules: ConstructorOf<BrowserModule>[] = [
  MainLayoutModule,
  OverlayModule,
  LogModule,
  ClientCommonModule,
  MenuBarModule,
  MonacoModule,
  StatusBarModule,
  EditorModule,
  ExplorerModule,
  FileTreeNextModule,
  FileServiceClientModule,
  StaticResourceModule,
  SearchModule,
  FileSchemeModule,
  OutputModule,
  QuickOpenModule,
  MarkersModule,
  ThemeModule,
  WorkspaceModule,
  ExtensionStorageModule,
  StorageModule,
  OpenedEditorModule,
  OutlineModule,
  PreferencesModule,
  ToolbarModule,
  WebviewModule,
  MarkdownModule,
  WorkspaceEditModule,
  SCMModule,
  DecorationModule,
  DebugModule,
  VariableModule,
  KeymapsModule,
  TerminalNextModule,
  ExtensionModule,
  ExtensionManagerModule,
  MonacoEnhanceModule,
  ClientAddonModule,
  CommentsModule,
  TaskModule,
  MiniDesktopModule,
  LocalBasicModule,
];

renderApp({
  appName: 'PEditor',
  modules: [...CommonBrowserModules, ElectronBasicModule, DemoModule,
    PEditorContextMenuModule,FbxConverComponentsModule,TogglePanelSampleModule,
    PEditorRightPannelModule,
  ],
  layoutConfig: customLayoutConfig,
//  layoutConfig: {
//   ...customLayoutConfig,
//   ...{[SlotLocation.top]: {
//     modules: ['@opensumi/ide-menu-bar', 'peditor-right-pannel'],
//   }},
//   'rightPannelAction': {
//     modules: ['peditor-right-pannel'],
//   },
// },
  layoutComponent: PEditorRightPannelLayout,
});
