import React, { Component } from 'react'
import { Form, Icon, Input, Button} from 'antd';
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.Api('post','/login',values).then(res=>{
                if(res.data.code===1){
                    localStorage.setItem('token',res.data.token)
                    this.props.history.push('/swiper')
                }
            })
          }
        });
      }
      handleClick(){
        this.props.history.push('/register')
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        return <div className='box'>
        <h2>登录界面  <small>DENGLU</small> </h2>
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
            登录
          </Button>
          <Button type="primary" onClick={this.handleClick.bind(this)}>
            注册
          </Button>
        </Form.Item>
      </Form>
        </div>
    }
}
export default  Form.create({ name: 'normal_login' })(Login)