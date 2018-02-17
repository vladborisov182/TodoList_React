import React from "react";
import TodoItems from "./TodoItems"
import "./TodoList.css"

class TodoList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            items : []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem = (e) => {
        var itemArray = this.state.items;

        if (this._inputElement.value !== ""){
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }

        e.preventDefault();
    }

    deleteItem = (key) => {

        var filteredItem = this.state.items.filter( function(item) {
            return (item.key !== key);
        });

        this.setState ({
            items: filteredItem
        });
    }

    render () {
        return (
            <div>
                <form className="form-inline" onSubmit={this.addItem}>
                    <div className="form-group mx-sm-3 mb-2">
                        <input ref={(a) => this._inputElement = a} type="text" className="form-control" placeholder="Enter task" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Add</button>
                </form>
                <TodoItems entries={this.state.items} delete={this.deleteItem} />
            </div>
        );
    }
};

export default TodoList;