import * as React from 'react';

import '@opensumi/antd-theme/lib/index.css';
import * as styles from './components.module.less';

import { useInjectable } from '@opensumi/ide-core-browser';
import { IFileServiceClient } from '@opensumi/ide-file-service';
import { IResource, ResourceService, WorkbenchEditorService } from '@opensumi/ide-editor';

export const FbxConverComponentsView = () => {
    const test = useInjectable<WorkbenchEditorService>(WorkbenchEditorService);
    //IFileServiceClient
    const data = test.currentResource?.uri;
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <div className={styles.components_wrap}>
            <button>导入资产  aaa{data?.toString()}bbb</button>
        </div>
    );
};
