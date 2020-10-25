import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import Page from "./page";

/**
 * @type {import("@mdx-js/react").MDXProviderComponentsProp}
 */
const components = {
  wrapper: (props) => <Page {...props} />,
  h1: (props) => <h1 {...props} />,
  p: (props) => <p {...props} />,
  a: (props) => {
    const isExternal = props?.href && props?.href.startsWith("http");

    if (isExternal)
      return <a {...props} rel="noopener noreferrer" target="_blank" />;

    return (
      <Link href={props.href}>
        <a>{props.children}</a>
      </Link>
    );
  },
};

const MDXWrapper = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXWrapper;
