import React, { useState } from 'react';

import { Button, Checkbox, Col, InputNumber, Row, Select, Slider, Tabs } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { EnterOutlined, SaveOutlined } from '@ant-design/icons';
import 'antd/dist/antd.dark.less';
import styles from './componets-layout.module.less';

const { TabPane } = Tabs;

export const PEditorRightPannelView = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [tabSelect, setTabSelect] = useState<string>('1');

  // checkbox更改状态时触发
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onPhChange = (e: number) => {
    console.log(`${e}`);
    setInputValue(e);
  };
  const onTabClick = (key: string) => {
    setTabSelect(key);
  };

  return (
    <div className={styles.all}>
      <Tabs activeKey={tabSelect} onTabClick={onTabClick}>
        <TabPane tab="Model" key="1">
          <div className={styles.tab1Module}>
            <div className={styles.lineText}>场景</div>

            <div className={styles.itemsDiv}>
              <label>缩放系数</label>
              <div className={styles.content}>
                <input type='text' value='10' />
              </div>
            </div>

            {/* <div className={styles.itemsDiv}>
              <label>转换单位</label>
              <div className={styles.content}>
                <Checkbox defaultChecked={true} onChange={onChange}><span className={styles.checkboxlabel}>1cm (文件) to 0.01m(Unity)</span></Checkbox>
              </div>
            </div>
            <div className={styles.itemsDiv}>
              <label>导入 Blendshapes</label>
              <div className={styles.content}>
                <Checkbox defaultChecked={true} onChange={onChange}></Checkbox>
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>导入可见性</label>
              <div className={styles.content}>
                <Checkbox defaultChecked={true} onChange={onChange}></Checkbox>
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>导入相机</label>
              <div className={styles.content}>
                <Checkbox defaultChecked={true} onChange={onChange}></Checkbox>
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>导入灯光</label>
              <div className={styles.content}>
                <Checkbox defaultChecked={true} onChange={onChange}></Checkbox>
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>保持层次结构</label>
              <div className={styles.content}>
                <Checkbox onChange={onChange}></Checkbox>
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>按名称对层级视图排序</label>
              <div className={styles.content}>
                <Checkbox defaultChecked={true} onChange={onChange}></Checkbox>
              </div>
            </div>

            <div className={styles.lineText}>网格</div>

            <div className={styles.itemsDiv}>
              <label>网格压缩</label>
              <div className={styles.content}>
                <Select
                  defaultValue="0"
                  style={{ width: '100%' }}
                  options={[
                    { value: '0', label: '关闭' },
                    { value: '1', label: '打开' },
                  ]}
                />
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>读/写已启用</label>
              <div className={styles.content}>
                <Checkbox onChange={onChange}></Checkbox>
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>优化网格</label>
              <div className={styles.content}>
                <Select
                  defaultValue="0"
                  style={{ width: '100%' }}
                  options={[
                    { value: '0', label: 'Everything' },
                  ]}
                />
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>生成碰撞器</label>
              <div className={styles.content}>
                <Checkbox onChange={onChange}></Checkbox>
              </div>
            </div>
            <div className={styles.lineText}>几何体</div>

            <div className={styles.itemsDiv}>
              <label>保留四边形</label>
              <div className={styles.content}>
                <Checkbox onChange={onChange}></Checkbox>
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>焊接顶点</label>
              <div className={styles.content}>
                <Checkbox defaultChecked={true} onChange={onChange}></Checkbox>
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>索引格式</label>
              <div className={styles.content}>
                <Select
                  defaultValue="0"
                  style={{ width: '100%' }}
                  options={[
                    { value: '0', label: '自动' },
                    { value: '1', label: '手动' },
                  ]}
                />
              </div>
            </div>


            <div className={styles.itemsDiv}>
              <label>旧版混合形状法线</label>
              <div className={styles.content}>
                <Checkbox defaultChecked={true} onChange={onChange}></Checkbox>
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>法线</label>
              <div className={styles.content}>
                <Select
                  defaultValue="0"
                  style={{ width: '100%' }}
                  options={[
                    { value: '0', label: '导入' },
                  ]}
                />
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>混合形状法线</label>
              <div className={styles.content}>
                <Select
                  defaultValue="0"
                  style={{ width: '100%' }}
                  options={[
                    { value: '0', label: 'Calculate' },
                  ]}
                />
              </div>
            </div>
            <div className={styles.itemsDiv}>
              <label>法线模式</label>
              <div className={styles.content}>
                <Select
                  defaultValue="0"
                  style={{ width: '100%' }}
                  options={[
                    { value: '0', label: 'Area And Angle Weighted' },
                  ]}
                />
              </div>
            </div>


            <div className={styles.itemsDiv}>
              <label>平滑度源</label>
              <div className={styles.content}>
                <Select
                  defaultValue="0"
                  style={{ width: '100%' }}
                  options={[
                    { value: '0', label: 'Prefer Smoothing Groups' },
                  ]}
                />
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>平滑角度</label>
              <div className={styles.content}>
                <Row>
                  <Col span={18}>
                    <Slider
                      min={0}
                      max={100}
                      onChange={onPhChange}
                      value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                  </Col>
                  <Col span={6}>
                    <InputNumber
                      min={0}
                      max={100}
                      style={{ margin: '0', width: '100%', textAlign: 'center' }}
                      value={inputValue}
                      onChange={onPhChange}
                    />
                  </Col>
                </Row>
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>切线</label>
              <div className={styles.content}>
                <Select
                  defaultValue="0"
                  style={{ width: '100%' }}
                  options={[
                    { value: '0', label: 'Calculate Mikktspace' },
                  ]}
                />
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>交换 UVs</label>
              <div className={styles.content}>
                <Checkbox onChange={onChange}></Checkbox>
              </div>
            </div>

            <div className={styles.itemsDiv}>
              <label>生成光照贴图 UVs</label>
              <div className={styles.content}>
                <Checkbox onChange={onChange}></Checkbox>
              </div>
            </div> */}
            <div className={styles.buttonDiv}>
              <Button type="primary" icon={<SaveOutlined />} size={'small'}>
                保存
              </Button>
              <Button icon={<EnterOutlined />} size={'small'}>
                重置
              </Button>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Animation" key="2">
          <div>tab2</div>
        </TabPane>
        <TabPane tab="Materials" key="3">
          <div>tab3</div>
        </TabPane>
      </Tabs>
    </div>
  );
};
