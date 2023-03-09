import { Domain } from '@opensumi/ide-core-common';

import { ComponentContribution, ComponentRegistry, ComponentRegistryInfo, getIcon, SlotLocation, SlotRendererContribution, SlotRendererRegistry } from '@opensumi/ide-core-browser';
import { PEditorRightPannelView } from './components.view';
import { RightTabRenderer } from './components.slot';

@Domain(ComponentContribution)
export class PEditorRightPannelContribution implements ComponentContribution {
  registerComponent(registry: ComponentRegistry) {
    registry.register(
      'peditor-property-manager',
      [
        {
          id: 'peditor-property-manager',
          component: RightTabRenderer,
          name: '层级',
        },
        {
          id: 'peditor-property-manager2',
          component: PEditorRightPannelView,
          name: '属性管理器',
        },
      ],
      {
        containerId: 'peditor-property-manager',
        iconClass:getIcon('explorer'),
      },
      SlotLocation.right,
    );
  };
}

// @Domain(ComponentContribution)
// export class PEditorRightPannelContribution2 implements ComponentContribution {
//   registerComponent(registry: ComponentRegistry) {
//     registry.register(
//       'peditor-right-pannel2',
//       [
//         {
//           id: 'peditor-right-pannel2',
//           component: RightTabRenderer,
//           name: '右侧栏',
//         },
//       ],
//       {
//         containerId: 'peditor-right-pannel2',
//         iconClass:getIcon('explorer'),
//       },
//       SlotLocation.right,
//     );
//   };
// }

// 通过 SlotRendererContribution 替换顶部的 SlotRenderer，将默认的上下平铺模式改成横向的 flex 模式：
@Domain(SlotRendererContribution)
export class PEditorRightPannelToolbarSlotContribution implements SlotRendererContribution {
  registerRenderer(registry: SlotRendererRegistry) {
  //   registry.registerSlotRenderer(SlotLocation.right, PEditorRightPannelSlotRenderer);
    // registry.registerSlotRenderer(SlotLocation.right, RightTabRenderer);
  }
}
