import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";

function MDXComponent({ content }) {
  return <MDXRemote source={content} />;
}

export default MDXComponent;
