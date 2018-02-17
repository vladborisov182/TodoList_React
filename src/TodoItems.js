import React from "react";
import FlipMove from 'react-flip-move';

class TodoItems extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.createTask = this.createTask.bind(this);
    }

    delete = (key) => {
        this.props.delete(key);
    }

    createTask = (item) => {
        return <li onClick={() => this.delete(item.key)} className="list-group-item list-group-item-action mb-1" key={item.key}>{item.text}</li>
    }

    render () {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask);

        return (
            <div className="list-group mt-3">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </div>
        );
    }
};

export default TodoItems;