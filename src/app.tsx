import { Component } from 'react';
import 'taro-ui/dist/style/index.scss' // 引入组件样式
import './app.less';
import { RecoilRoot } from 'recoil';

class App extends Component {
  // componentDidMount() {
  // }
  //
  // componentDidShow() {
  // }
  //
  // componentDidHide() {
  // }
  //
  // componentDidCatchError() {
  // }

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <RecoilRoot>
        {this.props.children}
      </RecoilRoot>
    );
  }
}

export default App;
