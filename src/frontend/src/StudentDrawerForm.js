import React from 'react';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import {addStudent} from "./client";
const { Option } = Select;


function StudentDrawerForm({showDrawer,setShowDrawer}){
    const onClose = () => setShowDrawer(false);

    const onFinish = student => {
        console.log(JSON.stringify(student, null, 2))
        addStudent(student)
            .then(() => {
                console.log("student added")
            }).catch(err => {
            console.log(err)
            })
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2))
    }
    return (
        <>
            <Drawer
                title="Add a new student"
                width={720}
                onClose={onClose}
                visible={showDrawer}
                bodyStyle={{
                    paddingBottom: 80,
                }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical"
                      hideRequiredMark
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter name',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter name" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter email',
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Please enter email"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select your gender',
                                    },
                                ]}
                            >
                                <Select placeholder="Please select your gender">
                                    <Option value="MALE">MALE</Option>
                                    <Option value="FEMALE">FEMALE</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item>
                                <Button type="primary" htmlType={"submit"}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
}
export  default  StudentDrawerForm;



