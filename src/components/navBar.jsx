import styles from "../../styles/Navbar.module.scss";
import { Button, Row, Col } from "antd";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className={styles.top}>
          <div >
            <img src="https://waldaschaff.com/wp-content/uploads/2021/04/Waldaschaff-Lingyun-Industrial-Logo-Header.png" alt="" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className={styles.topleft}>
            <h2>Waldaschaff Automotive Mexico</h2>
            <Link href="/">
              <Button className={styles.btn}>Log Out</Button>
            </Link>
          </div>
        </Col>
      </Row>

      <Row className={styles.center}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={styles.right}>
            <Link href="/linesOverview">
              <h3>Home</h3>
            </Link>
            <Link  href="/newOrder">
            <h3>New Order</h3>
            </Link>

            <Link href="/alloperators">
              <h3>Production Team</h3>
            </Link>

            <Link  href="/productionScan">
            <h3>Start Production</h3>
            </Link>

            <h3>Production Roll</h3>
            <Link href="/newOperator">
              <h3>New Operator</h3>
            </Link>

          </div>
        </Col>
      </Row>
    </>
  );
}

export default Navbar;
