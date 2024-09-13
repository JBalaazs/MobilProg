import { useEffect, useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { styles } from "../design/Style";
import { GET } from "../endpoints/GET";
import { detailsType } from "../interfaces/InterfaceCollection";

export default function ListScreen({ navigation }) {

    /*useState:*/

    const [cars, setCars] = useState([detailsType]);

    /*useEffect:*/

    useEffect(() => {

        GET().getCarDetails(setCars);

    }, []);

    /*Return:*/

    return(

        <ScrollView>

            <View style={styles.containerList}>

                {

                    cars.length > 0 && cars.map(c => (

                        <>

                            <View style={styles.detailsAndButtonList}>

                                <View key={c.Id} style={styles.detailsList}>
                                
                                    <Text style={styles.textList}>{c.brand}</Text>
                                    <Text style={styles.textList}>{c.model}</Text>
                                    <Text style={styles.textList}>{c.color}</Text>
                                    <Text style={styles.textList}>{c.registrationNumber}</Text>
                                
                                </View>

                                <Button
                                        title="Modify"
                                        onPress={() => navigation.navigate("Modify", { id: c.Id })}
                                />

                            </View>

                            <View style={styles.hrList} />

                        </>

                    ))

                }

            </View>

        </ScrollView>

    )

}