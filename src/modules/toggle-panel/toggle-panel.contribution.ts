import { Autowired } from '@opensumi/di';
import {
  Domain,
  Command,
  CommandRegistry,
  CommandContribution,
  SlotLocation,
} from '@opensumi/ide-core-browser';
import { IMainLayoutService } from '@opensumi/ide-main-layout';

namespace LAYOUT_TOGGLE_COMMANDS {
  export const CATEGORY = 'Toggle';

  export const toggleRightPanel: Command = {
    category: CATEGORY,
    id: 'toggle.command.toggleRightPanel',
    label: 'Toggle Right Panel',
  };
}

@Domain(CommandContribution)
export class TogglePanelSampleContribution implements CommandContribution {
  @Autowired(IMainLayoutService)
  private readonly layoutService: IMainLayoutService;

  private show = true;

  registerCommands(registry: CommandRegistry) {
    registry.registerCommand(LAYOUT_TOGGLE_COMMANDS.toggleRightPanel, {
      execute: () => {
        const isVisible = this.layoutService.isVisible(SlotLocation.right);
        this.layoutService.toggleSlot(SlotLocation.right, !isVisible);
      },
    });
  }
}
