import React from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BoardContainer } from "../styles/Board.styles";
import CardList from "../components/CardList";
import AddForm from "../components/AddForm";
import {
  addCard,
  addList,
  reOrderList,
  moveCardToList,
  setCardContent,
  setListName,
} from "../actions/boardActions";

const Board = (props) => {
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      // Dropped in the same list
      props.reOrderList(source.droppableId, source.index, destination.index);
    } else {
      // Drop in other list
      props.moveCardToList(
        source.droppableId,
        draggableId,
        destination.droppableId,
        destination.index
      );
    }
  };
  return (
    <div>
      <div className=" flex w-full" countColumns={props.lists.length + 1}>
        <DragDropContext onDragEnd={onDragEnd}>
          {props.lists.map((list, listIndex) => (
            <CardList
              key={list.id}
              droppableId={list.id}
              list={list}
              onChangeListName={(listName) =>
                props.onChangeListName(listIndex, listName)
              }
              onRemoveList={() => props.onRemoveList(listIndex)}
              onDuplicateList={() => props.onDuplicateList(listIndex)}
              onChangeCardContent={(cardIndex, content) =>
                props.onChangeCardContent(listIndex, cardIndex, content)
              }
              onAddCard={(cardContent) =>
                props.onAddCard(listIndex, cardContent)
              }
              searchText={props.search}
            />
          ))}
        </DragDropContext>
        <AddForm
          onConfirm={props.onAddList}
          placeholder="+ Add new list"
          focusPlaceholder="Enter list title"
          maxWidth="220px"
        />
      </div>
    </div>
  );
};

Board.propTypes = {
  reOrderList: PropTypes.func,
  moveCardToList: PropTypes.func,
  lists: PropTypes.array,
  onChangeListName: PropTypes.func,
  onChangeCardContent: PropTypes.func,
  search: PropTypes.string,
  onAddList: PropTypes.func,
  onAddCard: PropTypes.func,
};
const mapStateToProps = (state) => ({
  lists: state.board.currentState.lists,
  search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  addCard: bindActionCreators(addCard, dispatch),
  addList: bindActionCreators(addList, dispatch),
  reOrderList: bindActionCreators(reOrderList, dispatch),
  moveCardToList: bindActionCreators(moveCardToList, dispatch),
  onChangeCardContent: bindActionCreators(setCardContent, dispatch),
  onChangeListName: bindActionCreators(setListName, dispatch),
  onAddList: bindActionCreators(addList, dispatch),
  onAddCard: bindActionCreators(addCard, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
