import React from "react";
import Head from "next/head";
function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charset="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title> {title}</title>
    </Head>
  );
}
Meta.defaultProps = {
  title: "webDev NewZ",
  keywords: "web development, programming ",
  description: "get the latest new in web dev",
};

export default Meta;
