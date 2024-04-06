import React from "react";

import styles from "./homepage.module.css";
import Blogs from "@/components/Blogs";
import Spinner from "@/components/Spinner";

async function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {/* TODO: Iterate over the data read from the file system! */}
      <React.Suspense fallback={<Spinner />}>
        <Blogs />
      </React.Suspense>
    </div>
  );
}

export default Home;
