import { Command, CommandContribution, CommandRegistry, Domain } from '@opensumi/ide-core-common';

import { ComponentContribution, ComponentRegistry } from '@opensumi/ide-core-browser';
import { IMenuRegistry, MenuContribution, MenuId } from '@opensumi/ide-core-browser/lib/menu/next';
import { Autowired } from '@opensumi/di';
import { IMessageService } from '@opensumi/ide-overlay';

const ImportMenuBarId = 'menubar/import';
const IMPORT_ASSET_COMMAND: Command = {
  id: 'import.asset',
  label: '导入资产',
}

@Domain(MenuContribution, CommandContribution)
export class PEditorContextMenuContribution implements MenuContribution, CommandContribution {
  @Autowired(IMessageService)
  protected readonly message: IMessageService;

  registerMenus(registry: IMenuRegistry) {
    /*
    // 在 Menubar 区域注册一个新的菜单
    registry.registerMenubarItem(ImportMenuBarId, {
      label: '导入',
      order: 0,
    });

    registry.registerMenuItem(ImportMenuBarId, {
      command: IMPORT_ASSET_COMMAND.id,
    });
    // 注册二级菜单
    const SubMenuId = 'test/next';
    registry.registerMenuItem(ImportMenuBarId, {
      submenu: SubMenuId,
      label: 'Hover Me',
      group: '1_second',
    });

    registry.registerMenuItem(SubMenuId, {
      command: IMPORT_ASSET_COMMAND.id,
    });


    // 向已有的菜单注册新的命令，如文件树
    registry.registerMenuItem(MenuId.ExplorerContext, {
      command: IMPORT_ASSET_COMMAND.id,
      group: '0_test',
    });
    */
    // 向已有的菜单注册新的命令，如文件树
    registry.registerMenuItem(MenuId.ExplorerContext, {
        command: IMPORT_ASSET_COMMAND.id,
        group: '0_importasset',
    });

    registry.registerMenuItem(MenuId.MenubarFileMenu, {
        command: IMPORT_ASSET_COMMAND.id,
        group: '2_importasset',
    });
  }

  registerCommands(commands: CommandRegistry) {
    commands.registerCommand(IMPORT_ASSET_COMMAND, {
      execute: () => {
        this.message.info('Hello ~');
      },
    });
  }
}
