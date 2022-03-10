import { Fragment } from "react";
import Link from "next/link";

const news = () => {
  return (
    <Fragment>
      <div>news page</div>
      <ul>
        <li>
          <Link href="/news/nextjs-is-awesome">NextJS is awesome</Link>
        </li>
        <li>
          <Link href="/news/something-else">something else</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default news;
