import react from "react";
import "../styles/TodoList.css";
function TodoList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export default TodoList;
