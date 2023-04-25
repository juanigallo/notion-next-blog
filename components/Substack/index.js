import styles from "../../styles/Home.module.scss";

const Substack = () => {
  return (
    <>
      <p className={styles.cta}>
        Ready to fuel your ideas with FundIt? 🚀 <br />
        Subscribe to our newsletter for insider tips, success stories, and the
        latest updates on our Web3 crowdfunding protocol. 💡🌐 Stay ahead of the
        curve and join the FundIt community today!
      </p>
      <iframe
        src="https://fundit.substack.com/embed"
        width="480"
        height="320"
        style={{
          border: "1px solid #3d3d3d",
          borderRadius: "5px",
          background: "#1c1d1e",
          margin: "auto",
          width: "100%",
        }}
        frameborder="0"
        scrolling="no"
      ></iframe>
    </>
  );
};

export default Substack;
