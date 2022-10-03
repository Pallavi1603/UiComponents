import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {View,Text,StyleSheet,Image,ScrollView,} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from "react-native-vector-icons/Entypo"

const Stack=createNativeStackNavigator()

function Acca(){
  return(
  <ScrollView style={{backgroundColor:"#DBE9F4"}}>
    <Text style={{fontSize:23,marginLeft:70,marginTop:30,color:"black",fontFamily:"Montserrat-Bold"}}>Get Ready to be a Global CA</Text>
    <Text style={{marginLeft:15,marginTop:10,color:"black",fontSize:15,fontFamily:"Montserrat-Medium"}}>Acquire the ACCA qualification to join the league of Global</Text>
    <Text style={{marginLeft:91,marginTop:5,color:"black",fontSize:16,fontFamily:"Montserrat-Medium"}}>Accounting & Finance Professionals</Text>
    <Image
      style={{width:380,height:250,marginLeft:35,marginTop:20,borderRadius:5}}
      source={{uri:"https://media.istockphoto.com/photos/beautiful-smiling-female-college-student-picture-id1340766096?b=1&k=20&m=1340766096&s=170667a&w=0&h=P-ay9mgiAn5O_eg3JOfaKIpDTu-_p70NyIsEhVcEFco="}}
    />
      <View style={styles.container}>
              <View style={styles.button}>
                <Text style={{color:"white",textAlign:"center",fontSize:17,fontWeight:"500"}}>Request Call Back</Text>
              </View>
              <View style={styles.button}>
              <Text style={{color:"white",textAlign:"center",fontSize:17,fontWeight:"500"}}>Download Brochure</Text>
              </View>
              
      </View>
      <View style={styles.button1} >
              <Text style={{color:"white",textAlign:"center",fontSize:14,fontWeight:"700"}}>SILVER LEARNING PARTNER</Text>
              <View style={styles.button2}>
              <Text style={{color:"white",borderWidth:1,padding:10,borderColor:"white",marginLeft:15,}}>ACCA</Text>
              </View>
      </View> 
      <View style={{backgroundColor:"white",paddingLeft:160,paddingTop:40,}}>
        <Text style={{fontSize:20,fontFamily:"Montserrat-Bold",color:"black"}}>What is ACCA</Text>
        <Text style={{paddingLeft:35,color:"#8000ff",}}>____________</Text>
      </View> 
      <View style={{backgroundColor:"white",paddingLeft:16,paddingBottom:30,paddingRight:16,paddingTop:10}}>
        <View style={{backgroundColor:"#1c0f2a",paddingLeft:10,borderRadius:5}}> 
        <Text style={{paddingTop:10,fontSize:14,color:"black"}}>{"\u2B22" + "   "}ACCA(Association of Chartered Certified Accountants)is a </Text>
        <Text style={{paddingLeft:20,fontSize:14,color:"black"}}>global recognized accunting qualification offered by ACCA Global,UK </Text>
        <Text style={{paddingTop:10,fontSize:14,color:"black"}}>{"\u2B22" + "   "}It provides unlimited career opportunities with MNCs and Big4s </Text>
        <Text style={{paddingTop:10,fontSize:14,color:"black"}}>{"\u2B22" + "   "}A course which you can complete along with your graduation </Text>
        <Text style={{paddingTop:10,fontSize:14,color:"black"}}>{"\u2B22" + "   "}It has 2 lakh + memebers & 5 lakh + students accross 180+ </Text>
        <Text style={{paddingLeft:20,fontSize:14,color:"black"}}>countries</Text>
        </View>
        <View style={styles.container}>
         <View style={{backgroundColor:"#171717",padding:25,paddingLeft:45,marginRight:50,marginLeft:45,
         borderTopColor: "#8000ff",borderTopWidth:1,}}>
          <Text style={{paddingLeft:40,fontFamily:"PTSans-Bold",fontSize:19,color:"black"}}>Levels</Text>
          <View style={styles.container1}>
          <Icon name="book-outline" size={15} color="white"/><Text style={{marginRight:15,color:"black",fontFamily:"PTSans-Regular",marginLeft:10,fontSize:15}}>Three (13 pages)</Text>
          </View>
        </View>
        <View style={{backgroundColor:"#171717",padding:25,paddingLeft:72,marginRight:51,marginLeft:18,
         borderTopColor: "#8000ff",borderTopWidth:1,}}>
          <Text style={{paddingLeft:15,fontFamily:"PTSans-Bold",fontSize:19,color:"black"}}>Duration</Text>
          <View style={styles.container1}>
          <AntDesign name="clockcircleo" size={15} color="white"/><Text style={{marginRight:20,color:"black",fontFamily:"PTSans-Regular",marginLeft:5,fontSize:15}}>6-30 months</Text>
          </View>
        </View>
        </View>
        <View style={styles.container}>
        <View style={{backgroundColor:"#171717",padding:27,paddingLeft:50,marginRight:50,marginLeft:48,
         borderTopColor: "#8000ff",borderTopWidth:1,}}>
          <Text style={{paddingLeft:40,fontFamily:"PTSans-Bold",fontSize:19,color:"black"}}>Exams</Text>
          <View style={styles.container1}>
          <MaterialIcons name="laptop-chromebook" size={15} color="white"/><Text style={{color:"black",fontFamily:"PTSans-Regular",marginLeft:12,fontSize:15}}>Quarterly (Online)</Text>
          </View>
        </View>
        <View style={{backgroundColor:"#171717",padding:27,paddingLeft:80,marginRight:55,marginLeft:20,
         borderTopColor: "#8000ff",borderTopWidth:1,}}>
          <Text style={{fontFamily:"PTSans-Bold",fontSize:19,color:"black",marginRight:20}}>Exemptions</Text>
          <View style={styles.container1}>
          <MaterialIcons name="event-available" size={15} color="white"/><Text style={{marginRight:34,color:"black",fontFamily:"PTSans-Regular",fontSize:15}}>Available</Text>
          </View>
        </View>
        </View>
        <View style={{backgroundColor:"white",paddingLeft:120,paddingTop:40,}}>
        <Text style={{fontSize:20,fontFamily:"Montserrat-Bold",color:"black",}}>Why ACCA @ 1FIN</Text>
        <Text style={{paddingLeft:58,color:"#8000ff",}}>____________</Text>
      </View> 
      <View style={{backgroundColor:"#3D0069",paddingLeft:200,marginTop:20,paddingTop:20,borderTopRightRadius:5,borderTopLeftRadius:5}}>
        <MaterialIcons name="lightbulb" size={25} color="white"/>
        </View>
        <View style={{paddingLeft:170,backgroundColor:"#3D0069"}}>
        <Text style={{marginBottom:20,color:"black",fontFamily:"PTSans-Bold",fontSize:19}}>Conceptual</Text>
      </View>
      <View style={{backgroundColor:"#DBE9F4",borderBottomRightRadius:5,borderBottomLeftRadius:5,paddingBottom:15}}>{/* //padding:27,paddingLeft:100,marginRight:55,marginLeft:20,// */}
          <View style={styles.container1}>
          <MaterialIcons name="laptop-chromebook" size={20} color="white"/><Text style={{marginRight:55,color:"black",fontSize:15}}>Regular Live Classes</Text>
          </View>
          <View style={styles.container1}>
          <MaterialIcons name="people-alt" size={20} color="white" /><Text style={{marginRight:97,color:"black",fontSize:15,}}>Export Faculty</Text>
          </View>
          <View style={styles.container1}>
          <MaterialCommunityIcons name="clipboard-arrow-right-outline" size={20} color="white"/><Text style={{marginRight:40,color:"black",fontSize:15}}>Exam Oriented Content</Text>
      </View>
          <View style={styles.container1}>
          <MaterialIcons name="connected-tv" size={20} color="white"/><Text style={{color:"black",fontSize:15}}>Dedicated Discussions Forms</Text>
      </View>
          <View style={styles.container1}>
          <MaterialIcons name="emoji-people" size={20} color="white"/><Text style={{marginRight:70,color:"black",fontSize:15}}>Continous Support</Text>
      </View>
          </View>
          <View style={{backgroundColor:"#3D0069",paddingLeft:200,marginTop:20,paddingTop:20,borderTopRightRadius:5,borderTopLeftRadius:5}}>
        <MaterialIcons name="people-alt" size={25} color="white"/>
        </View>
        <View style={{paddingLeft:155,backgroundColor:"#3D0069"}}>
        <Text style={{marginBottom:20,color:"black",fontFamily:"PTSans-Bold",fontSize:19}}>Comprehensive</Text>
      </View>
      <View style={{backgroundColor:"#DBE9F4",borderBottomRightRadius:5,borderBottomLeftRadius:5,paddingBottom:15}}>{/* //padding:27,paddingLeft:100,marginRight:55,marginLeft:20,// */}
          <View style={styles.container1}>
          <MaterialIcons name="laptop-chromebook" size={20} color="white"/><Text style={{marginRight:55,color:"black",fontSize:15}}>Exhaustive Q & A Bank</Text>
          </View>
          <View style={styles.container1}>
          <MaterialCommunityIcons name="clipboard-arrow-right-outline" size={20} color="white" /><Text style={{marginRight:30,color:"black",fontSize:15,}}>1000s of MCQs for practice</Text>
          </View>
          <View style={styles.container1}>
          <MaterialIcons name="timelapse" size={20} color="white"/><Text style={{marginRight:45,color:"black",fontSize:15}}>Tests at regular intervals</Text>
      </View>
          <View style={styles.container1}>
          <AntDesign name="copy1" size={20} color="white"/><Text style={{marginRight:125,color:"black",fontSize:15}}>Mock Exams</Text>
      </View>
          <View style={styles.container1}>
          <MaterialIcons name="lightbulb" size={20} color="white"/><Text style={{marginRight:40,color:"black",fontSize:15}}>Analysis of Answer Sheets</Text>
      </View>
          </View>
          <View style={{backgroundColor:"#3D0069",paddingLeft:200,marginTop:20,paddingTop:20,borderTopRightRadius:5,borderTopLeftRadius:5}}>
        <Icon name="shield-checkmark-sharp" size={25} color="white"/>
        </View>
        <View style={{paddingLeft:150,backgroundColor:"#3D0069"}}>
        <Text style={{marginBottom:20,color:"black",fontFamily:"PTSans-Bold",fontSize:19}}>Career Oriented</Text>
      </View>
      <View style={{backgroundColor:"#DBE9F4",borderBottomRightRadius:5,borderBottomLeftRadius:5,paddingBottom:15}}>{/* //padding:27,paddingLeft:100,marginRight:55,marginLeft:20,// */}
          <View style={styles.container1}>
          <MaterialCommunityIcons name="clipboard-arrow-right-outline" size={20} color="white"/><Text style={{marginRight:55,color:"black",fontSize:15}}>Busines Communication</Text>
          </View>
          <View style={styles.container1}>
          <FontAwesome name="suitcase" size={20} color="white" /><Text style={{marginRight:105,color:"black",fontSize:15,}}>Resume Building</Text>
          </View>
          <View style={styles.container1}>
          <MaterialCommunityIcons name="thumb-up" size={20} color="white"/><Text style={{marginRight:100,color:"black",fontSize:15}}>Negotiation Skills</Text>
      </View>
          <View style={styles.container1}>
          <MaterialCommunityIcons name="clipboard-arrow-up-outline" size={20} color="white"/><Text style={{marginRight:105,color:"black",fontSize:15}}>Mock Interviews </Text>
      </View>
          <View style={styles.container1}>
          <MaterialIcons name="connected-tv" size={20} color="white"/><Text style={{marginRight:85,color:"black",fontSize:15}}>Placement Services</Text>
      </View>
          </View>
          <Text style={{fontSize:20,color:"black",marginTop:40,marginLeft:30}}>Live Classes start from late September,2022.</Text>
          <Text style={{fontSize:20,color:"#8000ff",marginLeft:110,}}>Press here to Enroll Now</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.button1} >
              <Text style={{color:"white",textAlign:"center",fontSize:14,fontWeight:"700"}}>SILVER LEARNING PARTNER</Text>
              <View style={styles.button2}>
              <Text style={{color:"white",borderWidth:1,padding:10,borderColor:"white",marginLeft:15,}}>ACCA</Text>
              </View>
              </View>  
      </View>
      <View style={{backgroundColor:"#1c0f2a",paddingLeft:125,paddingTop:30}}>
      <Text style={{fontSize:25,fontFamily:"Montserrat-Bold",color:"black"}}> ACCA - Eligibility</Text>
      </View>
      <View style={{backgroundColor:"#1c0f2a",paddingLeft:50,paddingTop:30}}>

      <Text style={{fontSize:18,color:"#8000ff"}}> To appear for the ACCA course examination a candidate should have</Text>
      </View>
      <View style={{  flex: 1,
    flexDirection: 'row',
    paddingRight:230,
    paddingTop:20,
    justifyContent: 'center',backgroundColor:"#1c0f2a"
    }}>
      <Entypo name="check" size={17} color="green"/><Text style={{color:"black",fontSize:15,backgroundColor:"#1c0f2a",paddingLeft:5,}}>Qualified the 10+2 exams</Text>
      </View>
      <View style={{  flex: 1,
    flexDirection: 'row',
    paddingRight:60,
    paddingTop:20,
    justifyContent: 'center',backgroundColor:"#1c0f2a",paddingBottom:30
    }}>
      <Entypo name="check" size={17} color="green"/><Text style={{color:"black",fontSize:15,backgroundColor:"#1c0f2a",paddingLeft:5}}>An aggregate of 65% in Mathematics/Accounts and English and a minimum of 50% in our subjects</Text>
     </View> 
    <Text style={{fontFamily:"Montserrat-Bold",fontSize:22,backgroundColor:"white",paddingLeft:60,paddingTop:20,color:"white"}}>What will you Learn in ACCA?</Text>
      <View style={{backgroundColor:"white",paddingLeft:15,padding:15}}>
      <View style={{paddingLeft:140,backgroundColor:"#3D0069",borderTopLeftRadius:5,borderTopRightRadius:5,}}>
        <Text style={{marginBottom:20,color:"black",fontFamily:"PTSans-Bold",fontSize:19,paddingTop:20}}>Knowledge Level</Text>
      </View>
      <View style={{backgroundColor:"#DBE9F4",borderBottomRightRadius:5,borderBottomLeftRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5,paddingBottom:15}}>
          <View style={styles.container1}>
          <Text style={{marginRight:10,color:"black",fontSize:15}}>{"\u2B22" + "   "}Bussiness and Technology(BT)</Text>
          </View>
          <View style={styles.container1}>
          <Text style={{marginRight:15,color:"black",fontSize:15}}>{"\u2B22" + "   "}Management Accounting(MA)</Text>
          </View>
          <View style={styles.container1}>
          <Text style={{marginRight:55,color:"black",fontSize:15}}>{"\u2B22" + "   "}Finance Accounting(FA)</Text>
      
      </View>
      <View style={{ backgroundColor:"#3D0069",
    borderRadius:10,
    padding:10,marginLeft:150,marginRight:165,marginTop:40}}><Text style={{color:"white",fontSize:17,fontWeight:"500"}}>Enroll Now</Text>
</View>
 </View>
      </View> 
      <View style={{backgroundColor:"white",paddingLeft:15,padding:15}}>
      <View style={{paddingLeft:170,backgroundColor:"#3D0069",borderTopLeftRadius:5,borderTopRightRadius:5,}}>
        <Text style={{marginBottom:20,color:"black",fontFamily:"PTSans-Bold",fontSize:19,paddingTop:20}}>Skill Level</Text>
      </View>
      <View style={{backgroundColor:"#DBE9F4",borderBottomRightRadius:5,borderBottomLeftRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5,paddingBottom:15}}>
          <View style={styles.container1}>
          <Text style={{color:"black",fontSize:15}}>{"\u2B22" + "   "}Corporate and Business Law(LW)</Text>
          </View>
          <View style={styles.container1}>
          <Text style={{marginRight:10,color:"black",fontSize:15}}>{"\u2B22" + "   "}Performance Management(PM)</Text>
          </View>
          <View style={styles.container1}>
          <Text style={{marginRight:130,color:"black",fontSize:15}}>{"\u2B22" + "   "}Taxation(TX)</Text>
      </View>
      <View style={styles.container1}>
          <Text style={{marginRight:68,color:"black",fontSize:15}}>{"\u2B22" + "   "}Finance Reporting(FR)</Text>
      
      </View>
      <View style={styles.container1}>
          <Text style={{marginRight:50,color:"black",fontSize:15}}>{"\u2B22" + "   "}Audit and Assurance(AA)</Text>
      
      </View>
      <View style={styles.container1}>
          <Text style={{marginRight:35,color:"black",fontSize:15}}>{"\u2B22" + "   "}Financial Management(FM)</Text>
      
      </View>
      <View style={{ backgroundColor:"#3D0069",
    borderRadius:10,
    padding:10,marginLeft:150,marginRight:165,marginTop:40}}><Text style={{color:"white",fontSize:17,fontWeight:"500"}}>Enroll Now</Text>
</View>
 </View>
      </View> 
      <View style={{backgroundColor:"white",paddingLeft:15,padding:15,paddingBottom:70}}>
      <View style={{paddingLeft:140,backgroundColor:"#3D0069",borderTopLeftRadius:5,borderTopRightRadius:5,}}>
        <Text style={{marginBottom:20,color:"black",fontFamily:"PTSans-Bold",fontSize:19,paddingTop:20,}}>Professional Level</Text>
      </View>
      <View style={{backgroundColor:"#DBE9F4",borderBottomRightRadius:5,borderBottomLeftRadius:5,paddingBottom:15}}>
      <Text style={{fontSize:23,color:"black",paddingLeft:100,fontFamily:"PTSans-Bold",paddingTop:10}}>Compulsory</Text>
          <View style={styles.container1}>
          <Text style={{marginRight:30,color:"black",fontSize:15}}>{"\u2B22" + "   "}SBL-Strategic Business Leader</Text>
          </View>
          <View style={styles.container1}>
          <Text style={{marginRight:10,color:"black",fontSize:15}}>{"\u2B22" + "   "}SBR-Strategic Business Reporting</Text>
          </View>
          <Text style={{fontSize:23,color:"black",paddingLeft:100,fontFamily:"PTSans-Bold",paddingTop:25}}>Two out of the following</Text>
          <View style={styles.container1}>
          <Text style={{marginLeft:28,color:"black",fontSize:15}}>{"\u2B22" + "   "}Advanced Financial Management(AFM)</Text>
      </View>
      <View style={styles.container1}>
          <Text style={{marginLeft:55,color:"black",fontSize:15}}>{"\u2B22" + "   "}Advanced Performance Management(APM)</Text>
      
      </View>
      <View style={styles.container1}>
          <Text style={{marginRight:67,color:"black",fontSize:15}}>{"\u2B22" + "   "}Advanced Taxation(ATX)</Text>
      
      </View>
      <View style={styles.container1}>
          <Text style={{marginLeft:13,color:"black",fontSize:15}}>{"\u2B22" + "   "}Advanced Audit and Assurance(AAA)</Text>
      
      </View>
      <View style={{ backgroundColor:"#3D0069",
    borderRadius:10,
    padding:10,marginLeft:150,marginRight:165,marginTop:40}}><Text style={{color:"white",fontSize:17,fontWeight:"500"}}>Enroll Now</Text>
</View>
 </View>
     </View>
     <View style={{backgroundColor:"#1c0f2a"}}>
      <Text style={{paddingTop:30,paddingLeft:115,fontSize:25,fontFamily:"PTSans-Bold",color:"black"}}> Placement Assistance</Text>
      <Text style={{paddingLeft:195,color:"#8000ff",}}>____________</Text>
      <Text style={{color:"black",fontSize:20,paddingLeft:20,paddingTop:30,fontFamily:"PTSans-Bold"}}>Resume Building</Text>
      <Text style={{color:"black",paddingLeft:20,paddingTop:10}}>1FIN provides professional guidance to help you cretae an effective resume to help you create a lasying impression,.</Text>
      <Text style={{color:"black",fontSize:20,paddingLeft:20,paddingTop:30,fontFamily:"PTSans-Bold"}}>Career Counselling</Text>
      <Text style={{color:"black",paddingLeft:20,paddingTop:10}}>We provide career counselling to conducting mock interviews and apptitude tests-we will assist you at every 
      step,all the way we make you job ready. </Text>
      <Text style={{color:"black",fontSize:20,paddingLeft:20,paddingTop:30,fontFamily:"PTSans-Bold"}}>Jobs</Text>
      <Text style={{color:"black",paddingLeft:20,paddingTop:10,paddingBottom:40}}>We will give you an edge over others with our direct corporate affiliations which will ensure that you are placed right.</Text>
     </View>  
  </ScrollView>
  )
} 
const App= ()=>{
  return(
 <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
    style={styles.name}
      name="ACCA"
      component={Acca}
      options={{
        headerTitleStyle: {
          color: "white",
        },
        headerStyle: {
          backgroundColor: "#3D0069",
        },
      }}
    />
  </Stack.Navigator>
 </NavigationContainer>
  )
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems:"center",
    justifyContent: 'center',
    marginTop:20,
    justifyContent:"space-evenly",
    marginLeft:5,
},
container1: {
  flex: 1,
  flexDirection: 'row',
  alignItems:"center",
  justifyContent: 'center',
  justifyContent:"space-evenly", 
  marginTop:8,
},
container2: {
  flex: 1,
  flexDirection: 'row',
  alignItems:"center",
  justifyContent: 'center',
  justifyContent:"space-evenly", 
  backgroundColor:"white"
},

button: {
    flex: 0,
    backgroundColor:"#3D0069",
    borderRadius:7,
    padding:10,
},
button1:{
  marginTop:10,
  backgroundColor:"red",
  marginLeft:140,
  marginRight:135,
  paddingRight:5,
 borderRadius:7,
 borderColor:"white",
 borderWidth:0,
 marginBottom:25
},
button2:{
  marginTop:10,
  backgroundColor:"red",
  paddingRight:60,
  borderTopRightRadius:7,
  marginLeft:20,
  paddingLeft:18,
  marginBottom:6
},
})

export default App;