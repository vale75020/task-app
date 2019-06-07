import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  background-color: ${props => (props.isDragging ? "lightgreen" : 'white')}; 
`;

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
        {this.props.task.content}
        </Container>
        )}
      </Draggable>
    );
  }
}
