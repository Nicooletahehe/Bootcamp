import React, { Component, createRef } from 'react';

export class index extends Component {
    // you can use two input event: onChange fct + value or state value changed
    // 
    todoInputRef = createRef();
    state = {
        // todoText: '',
        todoList: [],
    };

    // changeText = (event) => {
    //     console.log(event.target.value);
    //     this.setState({todoText: event.target.value});
    // }

    addTodo= () => {
        const {todoList} = this.state;
        console.log(this.todoInputRef.current.value);
        this.setState({
            todoList: [
                {
                    id: new Date().valueOf(),
                    todoText: this.todoInputRef.current.value,
                    isDone: false
                },
                ...todoList,
            ],
        }, () => {
            this.todoInputRef.current.value = "";
        })
    }

    completeTodo = (todo) => {
        // console.log(todo);
        const {todoList} = this.state;
        const index = todoList.findIndex(x=>x.id === todo.id);
        const newList = [
            ...todoList.slice(0, index),
            {...todo, isDone: !todo.isDone},
            ...todoList.slice(index+1),
        ];
        this.setState({todoList: newList});
    };

    deleteFromList = (todo) => {
        // console.log("todo");
        const {todoList} = this.state;
        const index = todoList.findIndex(x=>x.id === todo.id);
        console.log(index);
        const newList = [
            ...todoList.slice(0, index),
            ...todoList.slice(index+1),
        ];
        // console.log(newList);
        this.setState({todoList: newList});
    };

    selectAll = () => {
        const {todoList} = this.state;
        const newList = [];
        todoList.forEach(function(item) {
            if(!item.isDone) {
                item.isDone = true;
            } else {
                item.isDone = false;
            }
            newList.push(item);
        });
        this.setState({todoList: newList});
    }

    render() {
        // console.log("render");
        return (
            <div>
                <h1>Todo App</h1>
                <div>
                    {/* value={this.state.todoText} onChange={this.changeText} */}
                    <input type="text" ref={this.todoInputRef}/>
                    <button type="button" onClick={this.addTodo}>Add Todo</button>
                </div>
                <div>
                    {
                        this.state.todoList.map((item) => {
                            return (
                                <div key={item.id}>
                                    <input 
                                        // name=""
                                        type="checkbox"
                                        checked={item.isDone}
                                        onChange={() => {this.completeTodo(item)}}/>
                                    <span>{item.todoText}</span>
                                    {/* delete button to delete from array */}
                                    <button type="button" onClick={() => {this.deleteFromList(item)}}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <button type="button" onClick={() => {this.selectAll()}}>All</button>
                    <button>Pending</button>
                    <button>Completed</button>
                </div>
            </div>
        );
    }
};

export default index;
