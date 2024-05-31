// styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0F14',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 142,
    height: 142,
    marginTop: 90,
  },
  input: {
    height: 48,
    width: 340,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#828282',
    color: 'white',
    borderRadius: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#828282',
    borderRadius: 8,
    height: 48,
    width: 340,
    paddingRight: 10,
    marginVertical: 10,
  },
  passwordInput: {
    flex: 1,
    color: 'white',
    marginLeft: 10,
  },
  buttonLayout: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 340,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
},
});
