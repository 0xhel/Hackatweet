import Home from '../components/Home';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from '../components/HomePage';


function Index() {
  const user = useSelector((state) => state.user.value);
  return user.token ? <HomePage /> : <Home />;
}

export default Index;
