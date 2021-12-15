import styles from "../../styles/scanStation.module.scss";
import { Button, Row, Col, Form, Input, InputNumber, Select } from "antd";
import Modales from "../components/modal";
import LineCard from "./lineCard";
import React, { useState, useRef } from "react";
const { Option } = Select;
import Navbar from "./navBar.jsx";

function ScanStation() {
  const [contPar, setcontPar] = useState(0);
  const [contTotal, setcontTotal] = useState(0);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(true);

  const handleEnter = (name) => {
    console.log(contPar);
    console.log(contTotal);
    const { lectura } = name;
    console.log("Has presionado enter", lectura);
    setcontPar(contPar + 1);
    setcontTotal(contTotal + 1);
    if (contPar == 17) {
      setcontPar(0);
      setVisible(true);
    }
    document.getElementById("scanner").value = " ";
  };

  const handleModalButton = () => {
    setVisible(false);
    document.getElementById("modalInput").value = " ";
  };

  return (
    <>
      <Navbar />
      <Row className={styles.marginBody}>
        <Col xs={24} sm={24} md={14} lg={14} xl={14} className={styles.top}>
          {show ? (
            //Codigo para antes de iniciar produccion

            <Col xs={24} sm={24} md={14} lg={14} xl={14} className={styles.top}>
              <Form layout="vertical" name="order-datas">
                <Form.Item
                  className={styles.formItem}
                  label="N° de orden de produccion"
                  name="ordenProductionNumber"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, ingresa N° de Producción",
                    },
                  ]}
                >
                  <Input placeholder="" />
                </Form.Item>
                <Form.Item
                  className={styles.formItem}
                  name="modele"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, ingresa tu nombre",
                    },
                  ]}
                  label="Modelo a producir"
                >
                  <Select
                    style={{ width: "70%" }}
                    defaultValue="Seleccione un modelo"
                  >
                    <Option value="cmsUS">CMS US</Option>
                    <Option value="cmsECE">CMS ECE</Option>
                    <Option value="cmsG42">CMS G-42</Option>
                    <Option value="cmsG42Rcar">CMS G-42 RCAR</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className={styles.formItem}
                  name="partsToProduce"
                  rules={[
                    {
                      required: false,
                      message: "Por favor, ingresa tu nombre",
                    },
                  ]}
                  label="Piezas a Producir"
                >
                  <InputNumber
                    size="large"
                    min={18}
                    max={500}
                    defaultValue={100}
                  />
                </Form.Item>
              </Form>
            </Col>
          ) : (
            <div style={{ color: "blue" }}>
             <LineCard></LineCard>
            </div>
           
          )}

          <div className={styles.button_submit}>
            <Button
              htmlType="submit"
              className={styles.submit}
              onClick={() => {
                console.log("cambio de div", show);
                setShow(!show);
              }}
            >
              {show ? "Iniciar Produccion" : "Produccion Corriendo"}
            </Button>
          </div>
        </Col>

        <Col xs={24} sm={24} md={6} lg={6} xl={6} className={styles.dropZone}>
          <Form
            layout="vertical"
            name="normal_login"
            className="login-form"
            onFinish={handleEnter}
          >
            <Form.Item
              className={styles.input_item}
              name="lectura"
              rules={[{ required: false, message: "Por favor, escanea pieza" }]}
            >
              <Input id="scanner" autoComplete="off" />
            </Form.Item>

            <h1>Contador Parcial</h1>
            <h2 className={styles.counter}>{contPar}</h2>
            <h1>Contador Total</h1>
            <h2 className={styles.counter}>{contTotal}</h2>
          </Form>
        </Col>
        <Modales
          visible={visible}
          onOk={handleModalButton}
          id="modalInput"
          title="Rack Completo"
          text="Por favor escanea la etiqueta de notificación para continuar"
        ></Modales>
      </Row>
    </>
  );
}

export default ScanStation;
