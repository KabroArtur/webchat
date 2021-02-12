import React, { Component } from "react";
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber } from 'antd';

import {Link} from 'react-router-dom';
import { UserOutlined, LockOutlined,MailOutlined, ExclamationCircleTwoTone } from '@ant-design/icons';

import { Button, Block } from "components";


class RegisterForm extends Component{
  render(){
    const success = true;

    return (
    <div>
    <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Регистр</p>
    </div>
      <Block>
        {!success ? (
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
          <Input
          prefix={<UserOutlined className="site-form-item-icon" style={{ fontSize: '16px', color: '#8c8c8c' }}/>}
          placeholder="Логин, пример: Dolbaeb" 
          size="large"/>
        </Form.Item>
        <Form.Item
        hasFeedback
          name="email"
          rules={[
            {
              required: true,
              message: 'Логин сука напиши!',
            },
          ]}
        >
          <Input placeholder="email" 
          type="email" 
          size="large"
          prefix={<MailOutlined className="site-form-item-icon" style={{ fontSize: '16px', color: '#8c8c8c' }}/>}
/>
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
            placeholder="Мозгой своей придумай пароль"
            size="large"
          />
        </Form.Item><Form.Item
        hasFeedback
          name="password__2"
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
            placeholder="Мозгой своей придумай пароль"
            size="large"
          />
        </Form.Item>
        
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Сколько ждать можно
          </Button>
          <Link className="auth__register-link" to="/login">Уже авторизован Уебан?</Link>
        </Form.Item>
      </Form>
        ): (
          <div className="auth__seccess-block">
            <div><ExclamationCircleTwoTone/></div>
            <h3>Подтвердите свой аккаунт</h3>
            <p>text</p>
          </div>
        )}
      </Block>
      </div>
    );
        }
  };
  
  
  
  export default RegisterForm; 