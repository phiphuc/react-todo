import React, { Component } from 'react';
import TodoItem from './TodoItem/TodoItem';
const TodoList = ({data}) => {
        return (
           (
            <div className="col-sm-8">
               {
                   data.length == 0 ? <p>Không có bản ghi </p> : 
                   data.map(item => (
                
                           <TodoItem item = {item} key={ item.id} />   
                   ))
               }
            </div>               
           )
        );
}

export default TodoList