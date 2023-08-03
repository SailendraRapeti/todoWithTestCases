import { Text, View } from 'react-native'
import React, { Component } from 'react'
interface Iprop{

}
interface Istate{

    title:string;
    description:string;
    Todoarray:any[];
    isEdit:boolean;
    activeId:string;
   errorTitleMsg:string;
   errorDescMsg:string;
    

}

export class TodoController extends Component <Iprop , Istate>{
    state = {
        title:"",
        description:'',
        Todoarray:[],
        isEdit:false,
        activeId:"",
        errorTitleMsg:"",
        errorDescMsg:""
    }
    onTitle=(text:string)=>{
        this.setState({title:text})

    }
    onDescription=(text:string)=>{
        this.setState({ description:text})

    }
    onAdd=()=>{
        const {title, description,isEdit,Todoarray,activeId}= this.state
    if (!isEdit){

        if (title === ""){
            this.setState({errorTitleMsg:"* Please enter title"})


        } else if (description === ""){
            this.setState({errorDescMsg:"* Please enter description"})

        }
        
        else {

            const todoObj={
                id:new Date(),
                title,
                description
            }
    
            this.setState({Todoarray:[...this.state.Todoarray,todoObj],title:"", description:"",errorTitleMsg:"",errorDescMsg:""})

        }

        

    } else{
        const upDatedArray = Todoarray.map((each : {id:string})=>
        each.id === activeId ? {...each,title:title,description:description}
        : each);
        this.setState({Todoarray:upDatedArray,isEdit:false,title:'',description:""})
    }
        
    }
    onEdit=(item:{id:string,title:string,description:string})=>{

        this.setState({isEdit:true,activeId:item.id,title:item.title,description:item.description})


    }
    onDelete=(id:string)=>{
        const deleteTodo=this.state.Todoarray.filter((each : {id:string})=>
            each.id != id )

            this.setState({Todoarray:deleteTodo})

    }
  
}

export default TodoController