import { ComponentRegistryInfo, useInjectable } from '@opensumi/ide-core-browser';
import * as React from 'react';
import { TabRendererBase } from '@opensumi/ide-main-layout/lib/browser/tabbar/renderer.view';
import { LeftTabPanelRenderer, RightTabPanelRenderer } from '@opensumi/ide-main-layout/lib/browser/tabbar/panel.view';
import { TabbarServiceFactory, TabbarService } from '@opensumi/ide-main-layout/lib/browser/tabbar/tabbar.service';


export const PEditorRightPannelSlotRenderer: (props: {
  className: string;
  components: ComponentRegistryInfo[];
}) => any = ({ className, components }) => {
  const tmp = components.map(item => item.views[0].component!);
  return (
    <div className={className} style={{ display: 'flex', justifyContent: 'space-between' }}>
      {tmp.map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
};

export const EmptyRightTabbarRenderer: React.FC = () => {
  const tabbarService: TabbarService = useInjectable(TabbarServiceFactory)('right');
  tabbarService.barSize = 0;
  return <div style={{ width: 0 }} />;
};


export const RightTabRenderer = ({
  className,
  components,
}: {
  className: string;
  components: ComponentRegistryInfo[];
}) => (
  <TabRendererBase
    side='right'
    direction='right-to-left'
    className='right-slot'
    components={components}
    TabbarView={EmptyRightTabbarRenderer}
    TabpanelView={RightTabPanelRenderer}
  />
);
