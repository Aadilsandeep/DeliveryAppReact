import React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
//these are icons for the on to be made delivery app
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';

export default function Home({navigation}) {
  const [pressedButtonIndex,setState] = useState('');
  

  const renderCatergoryItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={
          
          [
          styles.categoryitem,{ backgroundColor: item.selected ? colors.primary :'#fed8b1'}
          
        ]}
       
        
        >
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{item.title}</Text>
        <View
          style={[
            styles.select,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            size={10}
            style={styles.chevron}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
    <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
      {/*Header */}
      <SafeAreaView style={{flex:1}}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/dp.png')}
            style={styles.profile}
          />
          <TouchableOpacity style={{alignItems:"flex-end",margin:16}}
           onPress={()=>navigation.navigate('menu')}>
          <Feather name="menu" size={24} color={'#F8A17C'} />
          </TouchableOpacity>
            
        </View>
      </SafeAreaView>

      {/*Title */}
      <View style={styles.title}>
        <Image 
        source={require('../assets/images/logo.png')}
        style={styles.pizzo}
        />
      </View>

      {/*Search */}

      <View style={styles.search}>
        <Feather name="search" size={18} color={colors.secondary} />
        <TextInput style={styles.searchView}
         placeholder="Search..." 
       />
      </View>

      {/*Categories*/}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesList}>
          <FlatList
            data={categoriesData}
            renderItem={renderCatergoryItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/*Popular */}
      <View style={styles.popular}>
        <Text style={styles.populartext}>Popular</Text>
        {popularData.map((item) => (
          <TouchableOpacity key={item.id} onPress={()=> navigation.navigate('Details',{item:item})}>
          <View 
          
          style={[styles.popularcard,
          {
            marginTop: item.id ==1 ? 10 :20 
          },
          ]}>
           <View>
            <View>
             <View style={styles.popularTop}>
               <MaterialCommunityIcons name="crown" size={12}  color={colors.primary}/>
               <Text style={styles.toptext}>top of the week</Text>
             </View>
                <View style={styles.popularTitle}>
                <Text style={styles.itemtitle}>{item.title} </Text>
                <Text style={styles.itemweight}>Weight{item.weight} </Text>
               </View>
             </View>
                 <View style={styles.popularCardBottom}>
                  <View style={styles.addPizza}>
                  <Feather name="plus" size={10} color={colors.textDark} />
                  </View> 
                      <View style={styles.addstar}>
                       <MaterialCommunityIcons name="star" size={10} color={colors.textDark} />
                       <Text style={styles.rating}> {item.rating} </Text>
                      </View>
                 </View>
           </View>
           {/**image  of pizza*/}
                      
                      <View style={styles.pizzaimagewrapper}>
                      <Image source={item.image}  style={styles.pizzaimage}  />
                      </View>
          </View>
          </TouchableOpacity>
        ))}
      </View>
     
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3737',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  title: {
    marginTop: 20,
    paddingHorizontal: 21,
  },
 pizzo:{
   marginLeft:90,
   marginBottom:20,
   alignItems:'center',
   width:200,
   height:100
  
 },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    //justifyContent:'space-between'
  },
  searchView: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
 //
  
  categoriesWrapper: {
    marginTop: 20,
  },
  categoriesTitle: {
    color:'white',
    fontFamily: 'Bold',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  categoriesList: {
    paddingTop: 20,
  },

  categoryitem: {
    backgroundColor: "white",
    width: 100,
    height: 160,
    marginLeft: 35,
    marginRight: 10,
    borderRadius: 20,
    shadowColor:colors.black,
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.05,
    shadowRadius:10,
    elevation:2
  },
  categoryImage: {
    width: 40,
    height: 30,
    alignSelf: 'center',
    marginTop: 35,
  },
  categoryText: {
    textAlign: 'center',
    fontFamily: 'semibold',
    fontSize: 16,
    marginTop: 10,
  },
  select: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 20,
    height: 20,
    borderRadius: 26,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  chevron: {
    alignSelf: 'center',
  },
  popular: {
    paddingHorizontal: 20,
  },
  populartext: {
        color:'#F8A17C',

    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginTop: 10,
  },
  popularcard:{
    backgroundColor:"white",
    borderRadius:25,
    paddingTop:20,
    paddingLeft:20,
    flexDirection:'row',
    overflow:"hidden",
    shadowColor:colors.black,
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.05,
    shadowRadius:10,
    elevation:2
  },
  popularTop:{
    flexDirection:'row',
    alignItems:'center'
  },
  toptext:{
    marginLeft:10,
    fontFamily:'semibold',
    color:colors.secondary
  },
   
 popularTitle:{
   marginTop:20,
   color:'#F8A17C'

 },
 itemtitle:{
   fontFamily:'Semibold',
   fontSize:16,
   color:colors.black
 },
 itemweight:{
   fontFamily:'medium',
   fontSize:14,
   color:colors.white,
   marginTop:5
 },
 popularCardBottom:{
   flexDirection:'row',
   alignItems:'center',
   marginTop:10,
   marginLeft:-20,

 },
 addPizza:{
   backgroundColor:colors.primary,
   paddingHorizontal:40,
   paddingVertical:20,
   borderTopRightRadius:25,
   borderBottomLeftRadius:25,
 },
 addstar:{
   flexDirection:'row',
   alignItems:'center',
   marginLeft:20
 },
 rating:{
   fontFamily:'semibold',
   fontSize:12,
   color:colors.textDark,
   marginLeft:5
 },
 pizzaimagewrapper:{
   marginLeft:40,

 },
 pizzaimage:{
   width:210,
   height:125,
   resizeMode:"contain"
 }, 
});
