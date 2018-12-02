import { useState, useEffect } from "react";
import * as contentful from "contentful";

function useFetchArticles(opts, topic = []) {
  
  const [posts, setPosts] = useState(null);
  let client = contentful.createClient({
    space: '2iv1kkxpi49n',
    accessToken: '9f107a2c5d2c997c6d4ba77d5ceeb43bbc1e2c645acda49b42acc943cb6406d9'
  });

  useEffect(() => {
    client.getEntries(opts).then(response => {
      setPosts(response.items);
    });
	}, topic);
  return {posts};
}

export default useFetchArticles;