import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from '../routes/stack';


export default function Routes(){
  return(
    <NavigationContainer>
      <StackRoutes></StackRoutes>
    </NavigationContainer>
  );
}