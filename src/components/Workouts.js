import {Image, Text, TouchableOpacity, View} from "react-native";
import {workouts} from "../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient} from "expo-linear-gradient";
import {HeartIcon} from "react-native-heroicons/solid";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";


export default function SortCategories(){
    const navigation = useNavigation();

    return(
        <View className="mx-4 flex-row justify-between flex-wrap">
            {
                workouts.map((item, index) => {
                    return(
                        <WorkoutCard navigation={navigation} item={item} key={index} />
                    )
                })
            }
        </View>
    )
}

const WorkoutCard = ({item, navigation}) => {

    const [isFavourite, toggleIsFavourite] = useState(false)

    return(
        <TouchableOpacity
            onPress={() => navigation.navigate('Workout', {...item})}
            style={{width: wp(44), height: wp(65)}}
            className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
        >
            <Image source={item.image} style={{width: wp(44), height: wp(65), borderRadius: 35}} className="absolute" />

            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.8)',]}
                style={{width: wp(44), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                className="absolute bottom-0"/>

            <TouchableOpacity onPress={() => toggleIsFavourite(!isFavourite)} style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}} className="absolute top-1 right-3 rounded-full p-3">
                <HeartIcon size={wp(5)} color={isFavourite? 'red' : 'white'} />
            </TouchableOpacity>

            <Text style={{fontSize: wp(4)}} className="text-white font-semibold">{item.title}</Text>
            <Text style={{fontSize: wp(2.2)}} className="text-white font-semibold">{item.shortDescription}</Text>
        </TouchableOpacity>
    )
}
