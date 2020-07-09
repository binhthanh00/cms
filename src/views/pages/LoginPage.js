import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Card, Spin, Alert } from "antd"; 
import {login} from '../../api/index'
// import React, { Component } from 'react';
// import { login } from '../api/index'
    
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 8,
    },
  };
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {
            username: "",
            password: "",
        },
        message: {
            err: "",
            success: "",
        },
        loading: false,
    }
}

btnLogin = () => {
    this.setState({ loading: true, message: {}})
    login(this.state.data).then(res => {
        if (res.data.token) {
            console.log("Login successful!")
            localStorage.setItem("token", res.data.token)
            // redirect to homepage
            setTimeout(() => {
                window.location.href = "/"
            }, 1000)
            this.setState({ message: { success: "Successful!"}} )
        }
        this.setState({ loading: false})
    }).catch(err => {
        console.log(err.response);
        this.setState({ loading: false});
        this.setState({ message: { err: err.response.data.err}} )
    })
}

onDataChange = (event) => {
    this.setState({ data: { ...this.state.data, [event.target.name]: event.target.value } })
}
  render() {
    const{data, message, loading} =this.state;
    console.log(data)
    return (
      <div>
        <Card title="Login Page" style={{textAlign: "center"}}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
            username: data.username,
            password: data.password
          }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input name="username" defaultValue={data.username} onChange={this.onDataChange}/>
            {/* <Input /> value={data.username} onChange={this.onDataChange} */}
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password  name="password" defaultValue={data.password} onChange={this.onDataChange}/>
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={this.btnLogin} disabled={loading}>
              {loading ? <Spin /> :"Submit"}
              
            </Button>
          </Form.Item>
          <Alert message="Error Text" type="error" />
        </Form>
        </Card>
      
      </div>
    );
 }
}
