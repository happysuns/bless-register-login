/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/8
 */
import * as React from 'react';
import { routerPath } from '../cose/router.config';
import Form, { FormItem } from '../components/Form';
import { fields } from './fields';
import URL from '../constants/URL';
import { Request } from '../cose/Request';

export class Register extends React.Component<any> {
    /**
     * 跳转登录
     */
    goToLogin() {
        const {history} = this.props;
        history.push(routerPath.login);
    }

    /**
     * 提交
     * @param values
     */
    handleSubmit(values) {
        console.log(values);
        Request({
            url: URL.user,
            method: 'POST',
            body: JSON.stringify(values)
        }).then(res => {
            console.log(res);
            alert(res.describe);
        });
    }

    render() {
        // 注册config
        const registerConfig: Array<FormItem> = fields.concat({
            label: '验证码',
            type: 'text',
            name: 'checkValue',
            placeholder: '4位验证码',
            maxLength: 4
        });
        return (
            <Form fields={registerConfig}
                  buttonLabel="立即修改"
                  title="注册-"
                  onSubmit={this.handleSubmit.bind(this)}
            >
                <a href="javascript:void(0);"
                   onClick={this.goToLogin.bind(this)}
                >已经有帐号？登录</a>
            </Form>
        )
    }
}
