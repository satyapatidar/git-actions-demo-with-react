// App.tsx
import React from "react";
import AddItem from "./AddItem";
import ToDoList from "./ToDoList";

const initialList = [
  {
    task: "Pick up Milk",
    priority: 1,
  },
  {
    task: "Buy Eggs",
    priority: 2,
  },
  {
    task: "Buy Bread",
    priority: 3,
  },
];

const isPartOf = (item, items) => {
  return items.some((it) => it.priority === item.priority);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: initialList,
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    const { items } = this.state;

    if (isPartOf(item, items)) {
      alert(`Item with priorirty: ${item.priority} exists`);
      return;
    }
    this.setState({
      items: items.concat(item)
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <AddItem addItem={this.addItem} />
        <br />
        <ToDoList items={items} />
      </div>
    );
  }
}

export default App;