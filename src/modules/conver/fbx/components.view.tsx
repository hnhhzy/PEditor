import * as React from 'react';

import '@opensumi/antd-theme/lib/index.css';
import * as styles from './components.module.less';

import { useInjectable } from '@opensumi/ide-core-browser';
import { IFileServiceClient } from '@opensumi/ide-file-service';
import { IResource, ResourceService, WorkbenchEditorService } from '@opensumi/ide-editor';

declare function MainJS(url?: string): void;


export const FbxConverComponentsView = () => {
    const test = useInjectable<WorkbenchEditorService>(WorkbenchEditorService);
    // IFileServiceClient
    const data = test.currentResource?.uri;
    const script = document.createElement('script');
    script.src = 'plugins\\PEngine.js';
    script.async = true;
    document.body.appendChild(script);
    script.onload = function() {
        // 脚本文件已经加载完成，可以执行脚本文件中的函数
        new MainJS(data?.toString());
    };

    // {data?.toString()}
    return (
        <div className={styles.components_wrap}>
            <canvas className={styles.canvasImage} id="webgl"></canvas>
        </div>
    );
};
