"use client"

import Game from '@/components/Game';
import store from '@/lib/store';
import Image from 'next/image'
import 'react-chessground/dist/styles/chessground.css';
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <main>
      <div>
        <h1>Play chess like your life depends on it</h1>
        <Provider store={store}>
        <Game />
        </Provider>
      </div>
    </main>
  )
}


// class Demo extends React.Component {
//   render() {
//     return <Chessground />;
//   }
// }