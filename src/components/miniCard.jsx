import styles from "../../styles/minicard.module.scss";
import Link from "next/link";

function MiniCard() {

    return (
        <>
            <Link href="/operator">
                <div className={styles.mainwrapper}>
                    <div>
                        <img src='/images/operador.jpeg' alt="" />
                    </div>
                    <div className={styles.spanwrap}>
                        <span>
                            Christian
                   </span>
                    </div>
                </div>
            </Link>

        </>
    )

}

export default MiniCard;