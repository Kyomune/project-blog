import React from "react";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import MDXComponent from "@/components/MDXComponent";

async function BlogPost({ params }) {
  const { postSlug } = params;

  const post = await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={post.frontmatter.title}
        publishedOn={post.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXComponent content={post.content} />
      </div>
    </article>
  );
}

export default BlogPost;
