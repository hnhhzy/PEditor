import { Domain } from '@opensumi/ide-core-common';

import { ComponentContribution, ComponentRegistry, ComponentRegistryInfo, SlotLocation, SlotRendererContribution, SlotRendererRegistry } from '@opensumi/ide-core-browser';
import { PEditorRightPannelView } from './components.view';
import { PEditorRightPannelSlotRenderer, RightTabRenderer } from './components.slot';

@Domain(ComponentContribution)
export class PEditorRightPannelContribution implements ComponentContribution {
  registerComponent(registry: ComponentRegistry) {
    registry.register(
      'peditor-right-pannel',
      [
        {
          id: 'peditor-right-pannel',
          component: PEditorRightPannelView,
          name: '右侧栏',
        },
      ],
      {
        containerId: 'peditor-right-pannel',
      },
      SlotLocation.right,
    );
  }
}

// 通过 SlotRendererContribution 替换顶部的 SlotRenderer，将默认的上下平铺模式改成横向的 flex 模式：
@Domain(SlotRendererContribution)
export class PEditorRightPannelToolbarSlotContribution implements SlotRendererContribution {
  registerRenderer(registry: SlotRendererRegistry) {
     registry.registerSlotRenderer(SlotLocation.right, PEditorRightPannelSlotRenderer);
    // registry.registerSlotRenderer(SlotLocation.right, RightTabRenderer);
  }
}
