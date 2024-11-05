import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f55e3',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins'
  },

  header: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headingTitle: {
    color: 'white',
    fontFamily: 'PoppinsBold',
    fontSize: 26,
  },
  
  subheadingTitle: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 13,
    alignSelf: 'center'
  },

  pageTitle: {
    fontFamily: 'PoppinsBold',
    marginTop: 20,
    color: 'white',
    fontSize: 25,
    marginLeft: -210,
  },

  logoImage: {
    width: 170,
    height: 170,
    alignSelf: 'center',
  },

  textInput: {
    fontFamily: "Poppins",
    fontSize: 15,
    width: 290,
    height: 50,  
    borderColor: '#6edf3e', 
    margin: 10,
  },

  button: {
    fontFamily: 'PoppinsBold',
    fontSize: 20,
    paddingVertical: 7, 
    paddingHorizontal: 5, 
    margin: 10,
  },

  scrollContent: {
    padding: 26,
  },

  checkboxContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    fontFamily: "Poppins",
  },
  checkboxLabel: {
    color: 'white', 
    marginLeft: 8,
    marginBottom: -2,
    fontFamily: "Poppins", 
    fontSize: 13, 
    marginLeft:-1
  },

  iconContainer: {

  },
});

export default styles;
