import React, {useContext} from 'react';
import {View} from 'react-native';
import WalkThrough from '../screens/WalkThrogh';
import Login from '../screens/Login';
import Header from '../components/Header';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import MyTabs from './TabNaviagation';
import {UserContext} from '../context/UserContext';
import SplashLoading from '../screens/SplashLoading/SplashLoading';
import GetAQuote from '../screens/GetAQuote/GetAQuote';
import Otp from '../screens/Otp';
import PageTwo from '../screens/GetAQuote/PageTwo';
import PageThree from '../screens/GetAQuote/PageThree';
import TravelOne from '../screens/travelInsurance/TravelOne';
import TravelTwo from '../screens/travelInsurance/TravelTwo';
import TravelThree from '../screens/travelInsurance/TravelThree';
import Preview from '../screens/travelInsurance/Preview';
import ProceedToPay from '../screens/travelInsurance/ProceedToPay';
import TravelInsurancePlans from '../screens/travelInsurance/TravelInsurancePlans';
import FamilyApplicantInfo from '../screens/travelInsurance/FamilyApplicantInfo';
import FamilyInfo from '../screens/travelInsurance/FamilyInfo';
import FamilyBeneficiaryInfo from '../screens/travelInsurance/FamilyBeneficiaryInfo';
import FamilyProceedToPay from '../screens/travelInsurance/FamilyProceedToPay';
import FamilyPreview from '../screens/travelInsurance/FamilyPreview';
import Feedback from '../screens/Feedback/Feedback';
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

export const MainStack = () => {
  const horizontalAnimation = {
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="GetAQuote" component={GetAQuote} />
      <Stack.Screen
        name="PageTwo"
        component={PageTwo}
        options={horizontalAnimation}
      />
      <Stack.Screen
        name="PageThree"
        component={PageThree}
        options={horizontalAnimation}
      />
      <Stack.Screen name="TravelOne" component={TravelOne} />
      <Stack.Screen name="TravelTwo" component={TravelTwo} />
      <Stack.Screen name="TravelThree" component={TravelThree} />
      <Stack.Screen name="Preview" component={Preview} />
      <Stack.Screen name="ProceedToPay" component={ProceedToPay} />
      <Stack.Screen
        name="TravelInsurancePlans"
        component={TravelInsurancePlans}
      />
      <Stack.Screen
        name="FamilyApplicantInfo"
        component={FamilyApplicantInfo}
      />
      <Stack.Screen name="FamilyInfo" component={FamilyInfo} />
      <Stack.Screen
        name="FamilyBeneficiaryInfo"
        component={FamilyBeneficiaryInfo}
      />
      <Stack.Screen name="FamilyProceedToPay" component={FamilyProceedToPay} />
      <Stack.Screen name="FamilyPreview" component={FamilyPreview} />
      <Stack.Screen name="Feedback" component={Feedback} />

      {/* <Stack.Screen name="ExchangePolicy" component={ExchangePolicy} />
    <Stack.Screen name="Faqs" component={Faqs} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
    <Stack.Screen name="CategoryProduct" component={CategoryProduct}/> */}
    </Stack.Navigator>
  );
};

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Otp"
        component={Otp}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
export const StackNavigation = () => {
  const [user] = useContext(UserContext);
  const AppStack = createStackNavigator();

  const renderOnboarding = user => {
    return user.isUserFirstTime ? (
      <AppStack.Screen
        name="WalkThrough"
        component={WalkThrough}
        options={{headerShown: false}}
      />
    ) : (
      <AppStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{headerShown: false}}
      />
    );
  };
  const renderStack = user => {
    return user.isLoggedIn ? (
      <AppStack.Screen
        name="MainStack"
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
    ) : (
      renderOnboarding(user)
    );
  };
  return (
    <Stack.Navigator>
      {user.isLoggedIn === null ? (
        <>
          <AppStack.Screen
            name="SplashScreen"
            component={SplashLoading}
            options={{headerShown: false}}
          />
        </>
      ) : (
        renderStack(user)
      )}
    </Stack.Navigator>
  );
};
