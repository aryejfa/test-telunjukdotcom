import Head from "next/head";
import styles from "./Layout.module.css";
import HeaderUser from "../organisms/HeaderUser";
import Footer from "../organisms/Footer";

function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>Test Telunjuk.com | {pageTitle}</title>
        <meta name="description" content="Test Telunjuk.com"></meta>
      </Head>
      <div className={styles.container}>
        <HeaderUser />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
