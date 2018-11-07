import { useState, useEffect } from "react";
import * as contentful from "contentful";

function useFetchContent(opts) {
	
  const [posts, setPosts] = useState(null);
  let client = contentful.createClient({
    space: "placeholder",
    accessToken:
      'placeholder'
  });

  useEffect(() => {
    client.getEntries(opts).then(response => setPosts(response.items));
	}, []);
  return posts;
}

export default useFetchContent;