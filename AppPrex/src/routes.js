import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from './Pages/Login';
import RecoverPassword from './Pages/RecoverPassword';
import FormMenu from './Pages/FormMenu';
import Form from './Pages/Form';
import FormHistory from './Pages/FormHistory';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    RecoverPassword,
    FormMenu,
    Form,
    FormHistory,
  }),
);
export default Routes;
