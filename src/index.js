import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Tabs,Icon,Button} from 'antd';

import {WaitDemo} from "./WaitDemo";

import registerServiceWorker from './registerServiceWorker';


class Demo extends React.Component {

    panes = [
        {
            title: 'home',
            icon:'check',
            key: 'home',
            closeable:false
        },
        {
            title: 'Sale',
            icon:'android',
            key: 'sale'
        },
        {
            title: 'Account',
            icon:'apple',
            key: 'account'
        },
        {
            title: 'System',
            icon:'windows',
            key: 'system'
        },
        {
            title: 'Help',
            icon:'chrome',
            key: 'help'
        },
    ];

    constructor(props) {
        super(props);

        this.state = {

            activeForm : 'home',

            panes : this.panes

        }
    }


    handleTabOnChange = (activeForm) => {

        this.setState(
            {
                activeForm:activeForm
            }
        )


    }

    getTab(option) {
        return (
            <div>
                <Icon type={option.icon}/>
                {option.title}
            </div>
        );
    }

    handleTabOnEdit = (activeForm,action)=>
    {
        if(action === 'remove')
        {
            const panes = this.state.panes;

            console.log('panes',panes);

            const index = panes.findIndex(r=>
            {
                return r.key === activeForm;
            })

            if(index >= 1)
            {
                panes.splice(index,1);
            }

            this.setState(
                {
                    panes:panes,
                    activeForm : panes[index - 1].key
                })
        }

        console.log(action,activeForm);


    }


    render() {
        return (

            <Tabs
                hideAdd
                type="editable-card"
                onChange={this.handleTabOnChange}
                onEdit={this.handleTabOnEdit}
                activeKey={this.state.activeForm}
                style={{height: '100%'}}>
                {
                    this.state.panes.map(r => {
                        return (
                            <Tabs.TabPane tab={this.getTab(r)} key={r.key} closable={r.closeable}>
                                <div style={contentStyle}>
                                    <h1>{r.title}</h1>

                                    <WaitDemo/>

                                    <div style={bottomBarStyle} >

                                        <div style={toolBarStyle}>

                                            <Button icon="android" style={toolItemStyle} />

                                            <Button icon="apple" style={toolItemStyle} />

                                            <Button icon="windows" style={toolItemStyle} />
                                        </div>

                                    </div>

                                </div>
                            </Tabs.TabPane>)
                    })
                }
            </Tabs>

        );
    }


}

const toolItemStyle =
    {
        marginLeft:5,
        marginRight:5,
        float:'right',
        height:32,
        width:32,
    }

const toolBarStyle =
{

}


const bottomBarStyle =
    {
        left:0,
        right:0,
        height:32,
        position:'absolute',
        bottom:0
    }

const contentStyle = {
    position: 'absolute',
    height: 'auto',
    top: 50,
    bottom: 10,
    left: 10,
    right: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'transparent',
}


ReactDOM.render(<Demo/>, document.getElementById('root'));
registerServiceWorker();
