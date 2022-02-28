import type { NextPage } from 'next'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { agePlusOne, changeAll } from '../src/reducers/FooReducer';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const foo = useSelector(state => state.foo.value);

  return (
    <main>
      <Link href="/">Switch Page</Link>
      <h1>Page 2</h1>

      <p>{foo.name}</p>
      <p>{foo.age}</p>

      <button onClick={() => {
        dispatch(agePlusOne(null));
      }}>Plus One</button>

      <button onClick={() => {
        dispatch(changeAll({ name:'Chris', age:38 }));
      }}>Set Chris</button>

    </main>
  )
}

export default Home
