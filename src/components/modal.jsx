import React from "react";
import { Modal, Button,Input } from "antd";
import styles from "../../styles/modal.module.css";


class Modales extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, text, visible, onOk,id,key } = this.props;
    return (
      <div>
        <Modal
          className={styles.modales}
          visible={visible}
          onOk={onOk}
        >
          <p className={styles.text}>{title}</p>
          <p className={styles.text}>{text}</p>

          <Input
            className = "styles.input"
            id= {id}
            >
              
            </Input>
              <Button
                key={key}
                type="primary"
                onClick={onOk}
                className={styles.button}
              >
               GUARDAR
              </Button>
        </Modal>
      </div>
    );
  }
}

export default Modales;