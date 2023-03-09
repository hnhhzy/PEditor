import { Tree } from 'antd';
import type { DataNode, DirectoryTreeProps } from 'antd/es/tree';
import React from 'react';

const { DirectoryTree } = Tree;

const treeData: DataNode[] = [
    {
        title: 'Demo',
        key: '1',
        children: [
            { title: 'Model(1)', key: '1-1', isLeaf: false },
            {
                title: 'Model', key: '1-2', isLeaf: false, children: [
                    {
                        title: 'Root', key: '1-2-1', isLeaf: false, children: [
                            { title: 'Bip001', key: '1-2-1-1-1', isLeaf: false },
                            { title: 'Skeleton01', key: '1-2-1-1-2', isLeaf: true },
                            { title: 'Sword01', key: '1-2-1-1-3', isLeaf: true },
                        ],
                    },
                    {
                        title: 'berserk_silhouette_man', key: '1-2-2', isLeaf: true,
                    },
                    {
                        title: 'Game_Menu', key: '1-2-3', isLeaf: true,
                    },
                    {
                        title: 'little_background_frame', key: '1-2-4', isLeaf: true,
                    },
                ],
            },
        ],
    },
];

export const RightTabRenderer: React.FC = () => {
    const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
        console.log('Trigger Select', keys, info);
    };

    const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
        console.log('Trigger Expand', keys, info);
    };

    return (
        <DirectoryTree
            multiple
            defaultExpandAll
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
        />
    );
};
