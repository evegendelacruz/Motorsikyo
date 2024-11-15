import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f55e3',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins'
  },

  insideContainer:{
    flex: 1,
    backgroundColor: '#f1f9ff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
  },

  insideHeaderCon:{
    backgroundColor:'#0f55e3',
    width:'100%',
    height: '20%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'flex-end',
  },

  insideHeader:{
    fontFamily:'PoppinsBold',
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 2,
  },

  deviceControllerCon: {
    backgroundColor: 'white',
    width: 330,
    padding: 10,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },

  deviceControllerTitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    textAlign: 'left',
  },

  deviceControllerSubtitle: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#555',
    textAlign: 'left',
    marginLeft: 40,
    alignItems: 'flex-start'
  },

  buttonGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 15
  },
  
  galleryButton: {
    backgroundColor: 'white',
    width: '48%', 
    padding: 15,
    borderRadius: 10,
    borderColor: '#ededed',
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  
  galleryButtonText: {
    marginTop: 10,
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
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
    marginTop: -10
  },
  checkboxLabel: {
    color: 'white', 
    marginLeft: 8,
    marginTop: 15,
    fontFamily: "Poppins", 
    fontSize: 12, 
    marginLeft:-1
  },

  iconContainer: {

  },
});

export default styles;
