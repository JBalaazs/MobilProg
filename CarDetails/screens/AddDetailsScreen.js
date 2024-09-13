import { View, Text, TextInput, Button } from "react-native";
import { detailsType } from "../interfaces/InterfaceCollection";
import { useState } from "react";
import { styles } from "../design/Style";
import { POST } from "../endpoints/POST";

export default function AddDetailsScreen({ navigation }) {

    /*useState:*/

    const [details, setDetails] = useState(detailsType);

    /*onChange:*/

    const handleChange = (name, value) => {

        if(name != "registrationNumber")
        {

            const isValid = /^[A-Za-z]{0,}$/.test(value);

            if(isValid)
            {

                setDetails(prevData => ({

                    ...prevData,
                    [name]: value

                }));

            }

        }
        else
        {

            const isValid = /^[A-Z]{0,3}[0-9]{0,3}$/.test(value);

            if(isValid)
            {

                setDetails(prevData => ({

                    ...prevData,
                    registrationNumber: value

                }));

            }

        }

    }

    /*Function:*/

    const saveDetails = () => {

        POST().saveDetails(details);

        navigation.navigate("Home");

    }

    /*Return:*/

    return(

        <View style={styles.containerAddDetails}>

            <Text>AddDetails</Text>

            <TextInput
                placeholder="Brand"
                style={styles.inputAddDetails}
                onChangeText={(text) => handleChange("brand", text)}
                value={details.brand}
            />

            <TextInput
                placeholder="Model"
                style={styles.inputAddDetails}
                onChangeText={(text) => handleChange("model", text)}
                value={details.model}
            />

            <TextInput
                placeholder="Color"
                style={styles.inputAddDetails}
                onChangeText={(text) => handleChange("color", text)}
                value={details.color}
            />

            <TextInput
                placeholder="Registration number"
                style={styles.inputAddDetails}
                onChangeText={(text) => handleChange("registrationNumber", text)}
                value={details.registrationNumber}
            />

            <Button 
                title="Save"
                onPress={saveDetails}
            />

        </View>

    );

}