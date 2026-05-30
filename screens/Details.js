import * as React from 'react';
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
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';

export default function Details({route,navigation}){

  const item =
    route?.params?.item ||
    popularData[0];

  const renderIngredientsItem =({item})=>{
    return(
      <View style={[styles.ingredientsItem, {
       marginLeft: item.id==='1' ? 20:0 
      },
      ]}>
      <Image source={item.image} style={styles.ingImage} />
      </View>
    )
  }

  return(
   <View style={styles.container}>

   {/*Header */}
   
    <SafeAreaView>
      <View style={styles.header}>
      
         <TouchableOpacity   onPress={()=> navigation.goBack()} >
           <View style={styles.headerLeft}>
        <Feather  
        name="chevron-left" 
        size={10} 
        color={colors.secondary} 
         />  
       </View>
         </TouchableOpacity>
       
        <View style={styles.headerRight}>
        <MaterialCommunityIcons  
        name="star" 
        size={10} 
        color={colors.white}  
        />  
       </View>
      </View> 
  
    </SafeAreaView>

    {/*TItle */}

    <View style={styles.titleWrapper}>  
     <Text style={styles.itemTitle}>{item.title}</Text>
    </View>

    {/*price */}

    <View style={styles.priceWrapper}>
     <Text style={styles.priceText}>₹{item.price}</Text>
    </View>

     {/*Pizza info */}

     <View style={styles.infoWrapper}>
       <View style={styles.infoLeft}>
         <View style={styles.infoItem}>
           <Text style={styles.infoText}>Size</Text>
           <Text style={styles.infoText2}>{item.size} {item.sizeNumber}"  </Text>
         </View>

          <View style={styles.infoItem}>
           <Text style={styles.infoText}>Crust</Text>
           <Text style={styles.infoText2}>{item.crust} </Text>
         </View>

          <View style={styles.infoItem}>
           <Text style={styles.infoText}>Delivery in</Text>
           <Text style={styles.infoText2}>{item.deliveryTime} min </Text>
         </View>


       </View>
       <View>
       <Image source={item.image} style={styles.itemImage} />
       </View>
     </View>
    
    {/*ingredients */}
    <View style={styles.ingredientsWrapper}>
     <Text style={styles.ingredientsText}>Ingredients</Text>
       <View style={styles.ingredientList}>
        <FlatList
            data={item.ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
       </View>
    </View>

    {/* OrderButton */}
     <TouchableOpacity  onPress={()=> alert("Your Order has been placed!")}>
      <View style={styles.orderButton}>
        <Text style={styles.buttonText}>Place an Order</Text>
        <Feather name="chevron-right" size={18} color={colors.textDark} />
      </View>
     </TouchableOpacity>
   </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
     backgroundColor: '#3D3737',

  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    paddingTop: 40,
  },
  headerLeft:{
    borderColor:'#F8A17C',
    borderWidth:2,
    padding:12,
    borderRadius:10
  },
  headerRight:{
    backgroundColor:colors.primary,
    borderColor:colors.primary,
    borderWidth:2,
    padding:12,
    borderRadius:10
  },  
  titleWrapper:{
    paddingHorizontal:20,
    marginTop:30,

  }
  ,
  itemTitle:{
    fontFamily:'Bold',
    fontSize:32,
    color:'#F8A17C',
    width:'50%'
  },
  priceWrapper:{
    marginTop:20,
    paddingHorizontal:20,

  }, 
  priceText:{
    color:colors.secondary,
    fontFamily:'semibold',
    fontSize:32,
  }, 
  infoWrapper:{
    marginTop:60,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

  },
  infoLeft:{
    paddingLeft:20,
  },
  infoItem:{
    marginBottom:20
  },
  infoText:{
    fontFamily:'medium',
    color:colors.textLight,
    fontSize:14
  },
  infoText2:{
    fontSize:17,
    fontFamily:'semibold',
    color:'#F8A17C'
  },

  
  itemImage:{
    resizeMode:"contain",
    marginLeft:40

  },
  ingredientsWrapper:{
    marginTop:60
  }, 
  ingredientsText:{
    paddingHorizontal:20,
    fontFamily:'Montserrat-Bold',
    fontSize:16,
    color:colors.textDark
  },
  ingredientList:{
    paddingVertical:20,
  },
  ingredientsItem:{
     backgroundColor:'#fed8b1',
     alignItems:'center',
     justifyContent:'center',
     paddingHorizontal:20,
     marginRight:20,
     borderRadius:15,
      shadowColor:colors.black,
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.05,
    shadowRadius:10,
    elevation:2
  },
  ingImage:{
     resizeMode:"contain",
       
  },
  orderButton:{
    marginTop:20,
    marginHorizontal:20,
    backgroundColor:colors.primary,
    borderRadius:50,
    paddingVertical:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    fontFamily:'Bold',
    color:'brown',
    fontSize:18
  },
  
})