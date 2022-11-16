import react from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CharacterItem = (props) => {


    //console.log(JSON.stringify(props.character.status));
    const status = props.character.status;
    let bg = '#000000';

    switch (status) {
        case 'Alive':
            bg = '#10C620';
            break;
        case 'Deceased':
            bg = '#FB2D20';
            break;
        case 'Presumed dead':
            bg = '#B20AE3';
            break;
        default:
            break;
    }


    return(
        <View style={myStyle.row_container}>

            <View style={{width:'3%', height:'100%', backgroundColor:bg}}></View>
            
            <View style={myStyle.image_container}>
                <Image style={myStyle.image} source={{uri: props.character.img}} />
            </View>

            <View style={myStyle.name_container}>
                <Text style={myStyle.name}>{props.character.name}</Text>
                <Text>{props.character.nickname}</Text>
                <View style={myStyle.line}></View>
                <Text style={myStyle.occupation}>{props.character.occupation}</Text>
            </View>

          </View>
    )
}

const myStyle = StyleSheet.create({
    row_container: {
        width:'100%', flexDirection:'row', marginBottom:12,
        borderTopLeftRadius:0, borderTopRightRadius:12,
        borderBottomLeftRadius:0, borderBottomRightRadius:12,
        backgroundColor:'#ffffff'
      },
      image: {width:'100%', height:105},
      image_container: {width:'30%',},
      line:{width:'100%', height:1, backgroundColor:'#ebebeb', marginVertical:5},
      name_container : {width:'67%', padding:10},
      name: {fontSize:17, fontWeight:'700', color:'#17b890'},
      occupation: {fontSize:10, fontStyle:'italic'}
});

export default CharacterItem;