import Head from "next/head";
import ProductioS  from '../src/components/scanStation.jsx';

function productionScanView() {
  return (
    <>
      <Head>
        <title>Waldaschaff-Scan Station</title>
      </Head>
      <ProductioS />
    </>
  );
}

export default productionScanView;