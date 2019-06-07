import React from "react";
import "./App.css";
import "@atlaskit/css-reset";
import initialData from "./initial-data";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";

class App extends React.Component {
  state = initialData;

  onDragEnd = result => { // update state
    //TO DO render our column
  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

export default App;
