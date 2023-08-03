import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import TodoController from './TodoController';
import React, { Component } from 'react'

class Todo extends TodoController {
   
  render() {
    const {title} = this.state
    const uniqueData : any =[]
    const Dublicate = this.state.Todoarray.filter((item : {id:string,title:string,description:string})=>
        !uniqueData.includes(item.title) ? uniqueData.push(item.title) : null
        )

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.HeadText} testID='title'>Todo List</Text>

        <View style={styles.inputCard}>
        
            <TextInput
            testID='title placeHolder'
              onChangeText={this.onTitle}
              style={{marginLeft: 16}}
            value={this.state.title}
              placeholder="enter title"
            />
    
          </View>
          <Text testID="titleErrorMsg"style={styles.errorMsgText}>{this.state.errorTitleMsg}</Text>
          <View style={styles.inputCard}>
        
            <TextInput
              onChangeText={this.onDescription}
              style={{marginLeft: 16}}
            value={this.state.description}
              placeholder="enter descripition"
            />
     
          </View>

          <Text testID='descErrorMsg' style={styles.errorMsgText}>{this.state.errorDescMsg}</Text>
          <TouchableOpacity testID='AddButton' style={styles.AddButton} onPress={this.onAdd}>
             <Text style={styles.buttonText}> {this.state.isEdit ? "EDIT TODO" : "ADD TODO"}</Text>
            </TouchableOpacity>
            <View>
                <FlatList
                testID='flatList'
                data={Dublicate}
                renderItem={({item} : any)=>(
                    <View style={styles.TodoCard}>
                        <Text  style={styles.TitleText}>Tittle : <Text testID='titleText' style={styles.NestedText}>{item.title}</Text></Text>
                        <Text style={styles.TitleText}>Description : <Text style={styles.NestedText}>{item.description}</Text></Text>
                        <View style={styles.buttonsCard}>
                            <TouchableOpacity testID='editButton' onPress={()=>this.onEdit(item)}>
                                <Text style={styles.deleteButton}>EDIT</Text>
                            </TouchableOpacity>

                            <TouchableOpacity testID='deleteButton' onPress={()=>this.onDelete(item.id)}>
                                <Text style={styles.deleteButton}>DELETE</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                )}
                />
            </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
    inputCard: {
        borderWidth: 1,
        borderColor: '#e3e4e6',
        height: 60,
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        borderRadius: 15,
        margin:6
      },
      container:{
        flex:1,
        backgroundColor:"white",
        padding:20
      },
      HeadText :{
        color:"black",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:30

      },
      AddButton:{
        backgroundColor: '#3730A0',
        height: 50,
        width: 320,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 15,
        marginLeft: 10,
      },
      buttonText:{
        color:"white"
      },
      errorMsgText:{
        marginLeft:20,
        color:"red"
      },
      TodoCard:{
        height:150,
        width:"100%",
        backgroundColor:"#e3c49d",
        marginTop:40,
        borderRadius:20,
        padding:10
      },
      buttonsCard:{
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-around" ,
       marginTop:10
      },
      TitleText:{
        color:"black",
        fontSize:20,
        fontWeight:"bold",
        marginLeft:20,
        marginTop:15
      },
      NestedText:{
        color:"white",
        fontWeight:"bold",
        fontSize:20
      },
      deleteButton:{
        color:"black",
        fontWeight:"bold"

      }
})

export default Todo