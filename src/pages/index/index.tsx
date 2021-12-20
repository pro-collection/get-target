import { FC } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton, AtTabBar } from 'taro-ui';

import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import './index.less';
import { useRecoilState } from 'recoil';
import numberAtom from './store/number';


const Index: FC = () => {
  const [state, setState] = useRecoilState(numberAtom);

  const add = () => setState(state + 1);
  const decrease = () => setState(state - 1);

  return (
    <View className='index'>
      <View>
        <Text className='at-article__h3'>{state}</Text>
      </View>
      <View className='at-row at-row--wrap'>
        <View className='at-col at-col-6'>
          <AtButton onClick={add}>
            添加
          </AtButton>
        </View>
        <View className='at-col at-col-6'>
          <AtButton onClick={decrease}>
            减少
          </AtButton>
        </View>
      </View>
    </View>
  );
};

export default Index;
