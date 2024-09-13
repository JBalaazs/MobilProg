import React from "react";
import { useEffect, useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { detailsType } from "../interfaces/InterfaceCollection";
import { styles } from "../design/Style";
import { GET } from "../endpoints/GET";
import { PUT } from "../endpoints/PUT";
import { DELETE } from "../endpoints/DELETE";

export default function ModifyScreen({ route, navigation }) {

    const { id } = route.params;

    /*useState:*/

    const [details, setDetails] = useState([detailsType]);
    const [inputCar, setInputCar] = useState(detailsType);

    /*useEffect:*/

    useEffect(() => {

        GET().getCarDetails(setDetails);
            
    }, []);

    /*onChange:*/

    const handleChange = (name, value) => {

        if(inputCar)
        {

            if(name != "registrationNumber")
            {
        
                const isValid = /^[A-Za-z]{0,}$/.test(value);
        
                if(isValid)
                {
        
                    setInputCar(prevData => ({
        
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
        
                    setInputCar(prevData => ({
        
                        ...prevData,
                        registrationNumber: value
        
                    }));
        
                }
        
            }

        }

    }

    /*Function:*/

    const findPair = () => {
    
        return details.find(d => d.Id == id) || null;
    
    }

    if(inputCar.brand == '')
    {

        const foundCar = findPair();

        if(foundCar) {

            setInputCar(foundCar);

        }

    }

    const updateCar = () => {

        PUT().modifyCar(inputCar);

        navigation.navigate("Home");

    }

    const deleteCar = () => {

        DELETE().deleteCar(id);

        navigation.navigate("Home");

    }

    return(

        <>
    
            {

                inputCar &&

                <View style={styles.containerModify}>

                    <Text>Modify details</Text>

                    <TextInput
                        placeholder="Brand"
                        style={styles.inputModify}
                        onChangeText={(text) => handleChange("brand", text)}
                        value={inputCar.brand}
                    />

                    <TextInput
                        placeholder="Model"
                        style={styles.inputModify}
                        onChangeText={(text) => handleChange("model", text)}
                        value={inputCar.model}
                    />

                    <TextInput
                        placeholder="Color"
                        style={styles.inputModify}
                        onChangeText={(text) => handleChange("color", text)}
                        value={inputCar.color}
                    />

                    <TextInput
                        placeholder="Registration number"
                        style={styles.inputModify}
                        onChangeText={(text) => handleChange("registrationNumber", text)}
                        value={inputCar.registrationNumber}
                    />

                    <Button 
                        title="Modify"
                        onPress={updateCar}
                    />

                    <Button 
                        title="Delete"
                        onPress={deleteCar}
                    />

                </View>

            }
        
        </>
        
    )

}