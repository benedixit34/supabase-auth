"use client";

import type { FormProps } from "antd";
import { Button, Form, Input, Row, Col } from "antd";
import { Typography } from "antd";

type FieldType = {
  username?: string;
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

const DemoBox: React.FC<React.PropsWithChildren<{ value: number }>> = (
  props
) => <p className={`height-${props.value}`}>{props.children}</p>;

export default function Page() {
  const [form] = Form.useForm();
  const { Title } = Typography;

  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
          backgroundColor: "#f5f5f5",
          msOverflowY: "hidden"
        }}
      >
        <Col lg={6} xs={24}>
          <Title className="text-center">Login</Title>
          <Form
            layout="vertical"
            form={form}
            size="large"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ maxWidth: 400, margin: "0 auto", paddingTop: 24 }}
          >
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
