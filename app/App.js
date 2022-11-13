import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput, Image,
   ActivityIndicator, StyleSheet, Alert, FlatList } from 'react-native';


const App = () => {

  const [searchName, setSearchName] = useState('characters');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const doSomething = async() => {
    setIsLoading(true);
    const api = `https://www.breakingbadapi.com/api/${searchName}`;
    const response = await fetch(api, {
      method: 'get'
    });
    const data = await response.json();
    setResults(data);
    setIsLoading(false);
  }



  return(
    <View style={myStyle.container}>
      <View style={{width:'100%', flexDirection:'row', height:'10%'}}>
        <View style={{width:'75%', justifyContent:'center'}}>

            <TextInput
              style={{
                width:'98%',
                borderRadius:6,
                fontSize:18,
                paddingVertical:10,
                backgroundColor:'#fff'
              }}
              value={searchName}
              onChangeText={x => {setSearchName(x)}}
              keyboardType="default"
              placeholder="Type search..."
              autoCapitalize='none'
              secureTextEntry={false}

            />

        </View>
        <View style={{width:'25%', justifyContent:'center', alignItems:'center'}}>
        {
        isLoading 
        ? (<ActivityIndicator size='large' color='#17B890' />) 
        : (
          <TouchableOpacity style={myStyle.btn} onPress={doSomething}>
            <Text style={myStyle.btntext}>Search</Text>
          </TouchableOpacity>
        )
      }
        </View>
      </View>


      <View style={{width:'100%', height:'90%'}}>
      {
        results ? (
          <FlatList
          data={results}
          keyExtractor={item => item.char_id}
          renderItem={itemRow => 
          <View style={myStyle.row_container}>
              <View style={myStyle.image_container}>
                <Image style={myStyle.image} source={{uri: itemRow.item.img}} />
              </View>
              <View style={myStyle.name_container}>
                <Text style={myStyle.name}>{itemRow.item.name}</Text>
                <Text>{itemRow.item.nickname}</Text>
                <View style={myStyle.line}></View>
                <Text style={myStyle.occupation}>{itemRow.item.occupation}</Text>
              </View>
          </View>}
        />
        ) : (
          <Text>No results</Text>
        )
      }
      </View>



    </View>
  )
}

const myStyle = StyleSheet.create({
  line:{
    width:'100%', height:1, backgroundColor:'#ebebeb', marginVertical:5
  },
  image: {
    width:'100%', height:105
  },
  row_container: {
    width:'100%', flexDirection:'row', marginBottom:12,
    borderTopLeftRadius:0, borderTopRightRadius:12,
    borderBottomLeftRadius:0, borderBottomRightRadius:12,
    backgroundColor:'#ffffff'
  },
  image_container: {
    width:'30%',
  },
  name_container : {
    width:'70%', padding:10
  },
  name: {
    fontSize:17, fontWeight:'700', color:'#17b890'
  },
  occupation: {
    fontSize:10, fontStyle:'italic'
  },
  btn:{width:'100%', paddingVertical:10,
  alignItems:'center', backgroundColor:'#17B890',
  borderRadius:6
  },
  btntext: {color:'#DEE5E5', fontSize:22, fontWeight:'700'},
  container: {flex:1, padding:30,
    backgroundColor:'#DEE5E5'}
});

export default App;