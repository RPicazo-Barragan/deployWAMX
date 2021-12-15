import styles from "../../styles/linecard.module.scss";
import { Row, Col, Button } from "antd";
import MiniCard from '../components/miniCard'
import Link from "next/link";

function LineCard() {
    return (
        <>
            <Row className={styles.mainContainer}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className={styles.linetext}>
                        <h2>Robolution</h2>
                    </div>
                    <div className={styles.linetext2}>
                        <h2>Production Team:</h2>
                    </div>
                    <div className={styles.cardsWrapper}>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}  >
                    <div >
                        <h2 className={styles.lookgood} >Status</h2>
                    </div>
                    <div className={styles.status} >
                        <h2 className={styles.running}> Running </h2>
                        <Link href="/prodDetail">
                            <Button className={styles.btn} type="primary" shape="round" size='small'>
                                Details ...
                             </Button>
                        </Link>

                    </div>
                    <div>
                        <h2 className={styles.lookgood} >Production:US version</h2>
                    </div>

                </Col>
            </Row>
        </>
    )
}
export default LineCard;