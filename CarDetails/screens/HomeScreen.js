import { View, Button} from "react-native";
import { styles } from "../design/Style";

export default function HomeScreen({ navigation }) {

    return(

        <View style={styles.containerHome}>

            <View style={styles.boxHome}>

                <Button 
                    title="Add details"
                    onPress={() => navigation.navigate("AddDetails")}
                />

                <Button 
                    title="List details"
                    onPress={() => navigation.navigate("List")}
                />

            </View>

        </View>

    );

}