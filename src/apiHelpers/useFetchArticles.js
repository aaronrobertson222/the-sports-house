import { useState, useEffect } from "react";
import client from './contentfulClient';

function useFetchArticles(opts, topic = []) {
  
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    client.getEntries(opts).then(response => {
      setPosts(response.items);
    });
	}, topic);
  return {posts};
}

export default useFetchArticles;