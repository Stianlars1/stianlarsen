import { PortableText, PortableTextComponents } from "@portabletext/react";
import React, { ReactElement } from "react";

// Assuming you have a TypeScript type for your Portable Text content
import { urlFor } from "@/lib/sanity";
import { PortableTextBlock } from "@portabletext/types";

interface SanityContentProps {
  value: PortableTextBlock[]; // This should match the structure of your Portable Text content
}

const myPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <>
        <img
          style={{ marginTop: "1rem" }}
          src={urlFor(value)}
          alt={value.altText || "No alt text"}
        />
        <blockquote style={{ textAlign: "center", margin: "0 auto" }}>
          ({value.caption})
        </blockquote>
      </>
    ),
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },

  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="h1">{children}</h1>,
    h2: ({ children }) => <h2 className="h2">{children}</h2>,
    h3: ({ children }) => <h3 className="h3">{children}</h3>,
    h4: ({ children }) => <h4 className="h4">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="">{children}</ul>,
    number: ({ children }) => <ol className="">{children}</ol>,

    // Ex. 2: rendering custom lists
  },

  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "initial", marginLeft: "24px" }}>
        {children}
      </li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
  // Add more customizations as needed
};

const SanityContent: React.FC<SanityContentProps> = ({
  value,
}): ReactElement => {
  console.log("value", value);
  return (
    <article className="article-wrapper">
      <PortableText value={value} components={myPortableTextComponents} />
      <br />
    </article>
  );
};

export default SanityContent;