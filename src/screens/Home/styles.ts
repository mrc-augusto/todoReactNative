import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#0D0D0D',
  },
  header:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  main:{
    position: 'relative',
    flex:1,
    marginTop: 127,
    backgroundColor: '#1A1A1A'
  },

  form:{
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
    position: 'absolute',
    top: 115,
    gap: 8
  },

  input:{
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#F2F2F2',
    fontSize: 16,
    borderColor: '#0D0D0D',
    borderWidth: 1
  },

  button:{
    width: 52,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 8
  }


  
})