import React, {useState} from 'react';
import AlertModal from '../components/AlertModal';
export const ModalContext = React.createContext({});

// const ICONS = {
//   alert: Alert,
//   internet: Internet,
//   success: Success,
// };

export const ModalProvider = ({children}) => {
  const [state, setState] = useState({
    visible: false,
    type: 'success',
    cancelText: '',
    confirmText: '',
    onCancelPress: '',
    Icon: null,
    onCrossPress: '',
    loader: false,
    message: '',
    subMsg: '',
    subMsg2: '',
    uri: '',
    onBackPress: false,
    showCancelButton: false,
    showConfirmButton: false,
    showCrossIcon: false,
    onButtonPress: () => {},
    onBack: () => {},
  });

  return (
    <ModalContext.Provider value={[state, setState]}>
      {children}
      {state.visible ? (
        <AlertModal
          visible={state.visible}
          onPress={() => setState(state => ({...state, visible: false}))}
          action={state.action}
          uri={state.uri}
          onBack={() => setState(state => ({...state, visible: false}))}
          message={state.message}
        />
      ) : null}
    </ModalContext.Provider>
  );
};
