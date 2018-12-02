import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';



const App= () => {
  return(
    <div className="ui container comments">
      <CommentDetail author="george" time="yesterday" text="nothing is certain" img = {faker.image.avatar()} />
      <CommentDetail author="no" time="tomorrow" text="some things are sauce" img = {faker.image.avatar()} />
      <CommentDetail author="hellyes" time="rightnow" text="all people lie" img = {faker.image.avatar()} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
