import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
const { TextArea } = Input;

const AppContact = () => {
  return (
    <section id="#contact">
      <div className="block contactBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2> Get in Touch</h2>
            {/* <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum </p> */}
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="Full name"
              rules={[
                { required: true, message: "Please input your Full name!" },
              ]}
            >
              <Input placeholder="Full name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Email Address!" },
              ]}
            >
              <Input type="email" placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              name="Telephone"
              rules={[
                { required: true, message: "Please input your Telephone!" },
              ]}
            >
              <Input type="Telephone" placeholder="Telephone" />
            </Form.Item>
            <Form.Item
              name="Subject"
              rules={[
                { required: true, message: "Please input your Subject!" },
              ]}
            >
              <Input type="Subject" placeholder="Subject" />
            </Form.Item>
            <Form.Item
              name="massage"
              rules={[
                { required: true, message: "Please input your massage!" },
              ]}
            >
              <TextArea type="massage" placeholder="massage" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>I agree with terms and conditions.</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AppContact;
