import React from "react";
import "./App.css";
import "@atlaskit/css-reset";
import initialData from "./initial-data";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";

class App extends React.Component {
  state = initialData;

  onDragStart = () => {
    document.body.style.color = 'orange'; // text color change when drag start
    document.body.style.transition = 'background-color 0.2s ease;'
  }

  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;
      document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  }

  onDragEnd = result => { // update state
    document.body.style.color = "inherit"; // final text color after drag
    document.body.style.backgroundColor = 'inherit';

    //TO DO render our column
    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    if(destination.droppableId === source.droppableId &&
      destination.index === source.index
      ) {
        return;
      }

      const column = this.state.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      },
    };
    this.setState(newState)
  };

  render() {
    return (
      <DragDropContext 
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        >
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
