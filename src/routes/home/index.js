import { h, Component } from 'preact';
import style from './style';
import { Button } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class Home extends Component {

    render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<Button>Test</Button>
                <Tabs defaultActiveKey="1" onChange={()=>{}}>
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
				<p>This is the Home component.</p>
			</div>
		);
	}
}
