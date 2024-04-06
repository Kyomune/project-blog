import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "../CodeSnippet";

function MDXComponent({ content }) {
  return (
    <MDXRemote
      source={content}
      components={{
        pre: CodeSnippet,
      }}
    />
  );
}

export default MDXComponent;
