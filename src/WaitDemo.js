import React from 'react'

import {Spin} from 'antd';

class WaitDemo extends React.Component
{
    constructor(props)
    {
        super(props)

    }

    render()
    {
        return(

            <div>
                <Spin size={'large'} spinning={true}></Spin>
            </div>

        );
    }

}

export {WaitDemo}