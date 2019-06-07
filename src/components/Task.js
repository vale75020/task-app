import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  background-color: ${props => (props.isDragging ? "lightgreen" : 'white')}; 
  display: flex;
`;

// const Handle = styled.div`
//     width:20px;
//     height: 20px;
//     background-color: orange;
//     border-radius:4px;
//     margin-right: 8px;
//     `;

export default class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided, snapshot) => (
        <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging} // to style my component when it drag
        >
            {/* <Handle {...provided.dragHandleProps} /> */}
        {this.props.task.content}
        </Container>
        )}
      </Draggable>
    );
  }
}
