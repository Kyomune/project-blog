import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "../CodeSnippet";
import Spinner from "../Spinner";
import dynamic from 'next/dynamic';
// import DivisionGroups from '../DivisionGroupsDemo'

const DivisionGroupsDemo = dynamic(() =>
  import("@/components/DivisionGroupsDemo"),
 { loading: () => <Spinner />,}
);

function MDXComponent({ content }) {
  return (
    <MDXRemote
      source={content}
      components={{
        pre: CodeSnippet,
        DivisionGroupsDemo,
      }}
    />
  );
}

export default MDXComponent;
