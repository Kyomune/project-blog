import React from "react";

import { getBlogPostList } from "@/helpers/file-helpers";
import BlogSummaryCard from "../BlogSummaryCard";

async function Blogs() {
  const blogs = await getBlogPostList();

  return blogs.map(({ slug, title, abstract, publishedOn }) => (
    <BlogSummaryCard
      key={slug}
      slug={slug}
      title={title}
      abstract={abstract}
      publishedOn={new Date(publishedOn)}
    />
  ));
}

export default Blogs;
