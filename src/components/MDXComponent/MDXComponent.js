import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "../CodeSnippet";
import Spinner from "../Spinner";
import dynamic from "next/dynamic";
// import DivisionGroups from '../DivisionGroupsDemo'

const DivisionGroupsDemo = dynamic(
  () => import("@/components/DivisionGroupsDemo"),
  { loading: () => <Spinner /> }
);

const CircularColorsDemo = dynamic(
  () => import("@/components/CircularColorsDemo"),
  { loading: () => <Spinner /> }
);

function MDXComponent({ content }) {
  return (
    <MDXRemote
      source={content}
      components={{
        pre: CodeSnippet,
        DivisionGroupsDemo,
        CircularColorsDemo,
      }}
    />
  );
}

export default MDXComponent;
