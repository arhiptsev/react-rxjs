import React, { useContext } from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import { useObservable } from '../hooks/useObservable';
import { ajax } from 'rxjs/ajax';
import styled from 'styled-components';
import { RxContext } from '../common/state';


const PostCard = styled(Card)`
margin-bottom: 20px;
`;

const postObservable = ajax('https://jsonplaceholder.typicode.com/posts');

export const Main = () => {

  const { searchObservable } = useContext(RxContext);

  const postsRequset = useObservable(postObservable);

  const searchValue = useObservable(searchObservable);

  const posts: any[] = (postsRequset?.response || [])
    .filter(({ title }) => title.includes(searchValue || ""));

  return <Card>
    <CardContent>

      <Typography variant="h5" component="h2">
        Article List
      </Typography>

      {posts.map<any>(({ title, body }) =>
        <PostCard>
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {body}
            </Typography>
          </CardContent>
        </PostCard>
      )}
    </CardContent>
  </Card>
}