import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
    Start: undefined;
    Login: undefined;
    SignUp: undefined;
    Tabs: undefined;
}

export type StartScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Start'>
export type LoginScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Login'>
export type SignUpScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'SignUp'>
export type TabsScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Tabs'>

export type PropsType = StartScreenNavigationProp | 
SignUpScreenNavigationProp | LoginScreenNavigationProp | 
TabsScreenNavigationProp;