import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../Home/styles";
import { Tasks } from "../../Components/Tasks";

export function Home(){
  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Text> iu</Text>
      </View>

      <View style={styles.main}>
        <Tasks/>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor='#808080'
        />
        <TouchableOpacity style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>     
      </View>

    </View>
  )
}