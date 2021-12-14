import styles from "../../styles/login.module.scss";
import { Button, Row, Col, Form, Input } from "antd";
import Link from "next/link";

function LoginForm() {
    return (
        <>
            <Row className={styles.super}>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} >
                    <div className={styles.imagewrap}>
                        <img src="https://waldaschaff.com/wp-content/uploads/2021/04/Waldaschaff-Lingyun-Industrial-Logo-Header.png" alt="" />
                    </div>
                </Col>
                <Col xs={18} sm={18} md={18} lg={18} xl={18} >
                    <div className={styles.tittle}>
                        <h1>Production Managment</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className={styles.order} xs={24} sm={24} md={24} lg={24} xl={24} >
                    <div className={styles.formwrapper}>
                        <h2>Log In</h2>
                        <Form layout='vertical'>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input type="password" className={styles.InputPers} />
                            </Form.Item>
                        </Form>
                        <Link href="/productionScan">
                            <Button type="primary" htmlType="submit" className={styles.btn}>
                                Iniciar sesion
                        </Button>
                        </Link>

                    </div>
                </Col>
            </Row>


        </>
    )
}

export default LoginForm;