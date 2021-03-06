import React, { Component } from 'react'
import { Form, Icon, Input, Button} from 'antd';
class Register extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.Api('post','/registry',values).then(res=>{
                if(res.data.code===0){
                    alert(res.data.msg)
                    return
                }
                alert(res.data.msg)
                this.props.history.push('/login')
            })
          }
        });
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        return <div className='box'>
        <h2>注册界面 <small>ZHUCE</small> </h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            提交
          </Button>
        </Form.Item>
      </Form>
        </div>
    }
}
export default  Form.create({ name: 'normal_login' })(Register)