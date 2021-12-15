import React from "react";
import { Modal, Button,Input } from "antd";
import styles from "../../styles/modal.module.css";
import Link from "next/link";

class Modales extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, text, visible, onOk,id } = this.props;
    return (
      <div>
        <Modal
          className={styles.modales}
          visible={visible}
          onOk={onOk}
          footer={[
            <Input
            className = "styles.input"
            id= {id}
            >
              
            </Input>,
              <Button
                key="submit"
                type="primary"
                onClick={onOk}
                className={styles.button}
              >
               GUARDAR
              </Button>
          ]}
        >
          <p className={styles.text}>{title}</p>
          <p className={styles.text}>{text}</p>
        </Modal>
      </div>
    );
  }
}

export default Modales;