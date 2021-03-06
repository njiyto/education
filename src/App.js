import React from 'react';
import { Route, Link } from "react-router-dom";
import { Context } from './context';

import Contacts from './Contacts/index';
import Example1 from './Example1/index';
import Example2 from './Example2/index';
import Example3 from './Example3/index';
import Example4 from './Example4/index';
import Example5 from './Example5/index';
import Example6 from './Example6/index';
import Example7 from './Example7/index';
import Example8 from './Example8/index';
import Example9 from './Example9/index';
import Example10 from './Example10/index';
import Example11 from './Example11/index';

import './App.css';

function App() {

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20, padding: 20 }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(el => (
          <Link
            style={{ padding: 10, backgroundColor: '#ccc', marginLeft: 10, borderRadius: 6 }}
            key={el} to={!el ? `/contacts` :`/example${el}`}
          >
            {el === 0 ? `contacts` :`example${el}`}
          </Link>
        ))}
      </div>
      <Route path='/contacts' component={Contacts} />
      <Route path="/example1" render={() => <Example1/> } />
      <Route path="/example2" component={Example2} />
      <Route path="/example3" component={Example3} />
      <Route path="/example4" component={Example4} />
      <Route path="/example5" component={Example5} />
      <Route path="/example6" component={Example6} />
      <Route path="/example7" component={Example7} />
      <Route path="/example8" component={Example8} />
      <Route path="/example9" component={Example9} />
      <Route path="/example10" render={() => (
        <Context.Consumer>
          {(store) => (
            <Example10 store={store}/>
          )}
        </Context.Consumer>
      )} />
      <Route path="/example11" component={Example11} />
    </div>
  );
}

export default App;
