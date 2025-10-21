"use client";

import type { FormProps } from "antd";
import { Button, Form, Input, Row, Col } from "antd";
import { Typography } from "antd";

type FieldType = {
  full_name?: string;
  username?: string;
  email?: string;
  password?: string;

  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
  errorInfo: any
) => {
  console.log("Failed:", errorInfo);
};



export default function Page() {
  const [form] = Form.useForm();
  const { Title } = Typography;

  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh"     
        }}
        
      >
        <Col lg={6} xs={24}>
          <Title className="text-center">Sign Up</Title>
          <Form
            layout="vertical"
            form={form}
            size="large"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ maxWidth: 400, margin: "0 auto", paddingTop: 24 }}
          >
            <Form.Item<FieldType>
              label="Full Name"
              name="full_name"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input placeholder="Enter Full Name" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
              ]}
            >
              <Input placeholder="Enter Your Email" />
            </Form.Item>

             <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Enter username" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Enter password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
