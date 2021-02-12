import React from "react";
import { Form, Input, Icon} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import { Button, Block } from "components";

const LoginForm = props =>{
    return (
    <div>
    <div className="auth__top">
        <h2>Войти в чат</h2>
        <p>Авторизуйтесь что бы войти</p>
    </div>
      <Block>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
                hasFeedback
          name="username"
          rules={[
            {
              required: true,
              message: 'Логин сука напиши!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" style={{ fontSize: '16px', color: '#8c8c8c' }}/>} 
          placeholder="Username" 
          style={{ padding: '10px'}}
          size="large"/>
        </Form.Item>
        <Form.Item
          hasFeedback
          name="password"
          rules={[
            {
              required: true,
              message: 'Бабушка в трамвае в ахуе от тебя',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" style={{ fontSize: '16px', color: '#8c8c8c' }}/>}
            type="password"
            placeholder="Password"
            size="large"
            style={{ padding: '10px' }}
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Забыли пароль?
          </a>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Войти
          </Button>
          <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
        </Form.Item>
      </Form>
      </Block>
      </div>
    );
  
  };
  
  
  
  export default LoginForm; 