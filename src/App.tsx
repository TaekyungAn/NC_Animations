import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  min-height: 200px;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
`;
const Card = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.cardColor};
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  // Drag가 완료됐을 때 실행되는 함수
  // type(DropResult)찾는 방법 : onDragEnd생김새 보기 (ctrl+좌클릭)
  const onDragEnd = ({ destination, source }: DropResult) => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable key={index} draggableId={toDo} index={index}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}
export default App;
