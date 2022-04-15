import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import faker from 'faker';
import CommentDetail from './CommentDetail.js';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);



const App = () => {
    return (
<div className="ui container comments">

    {/* Commenter 1 */}
   <CommentDetail/>

    {/* Commenter 2 */}
    <CommentDetail/>

    {/* Commenter 3 */}
    <CommentDetail/>

</div>

    );
};

root.render(<App/>);


