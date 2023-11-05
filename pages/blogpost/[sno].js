import { useRouter } from "next/router";
import React from "react";

const Post = () => {
  const router = useRouter();
  const { sno } = router.query;
  return (
    <div>
      <h1>Title of the page {sno}</h1>
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, soluta in.
        Nulla amet distinctio repellendus vero, molestias, voluptate eum a
        soluta voluptatum quos similique suscipit delectus, quisquam deleniti
        sunt in?
      </div>
    </div>
  );
};

export default Post;
