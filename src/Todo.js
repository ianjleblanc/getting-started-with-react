// function Todo({items}) {
//     const listItems = items.map((todo, index) => <li key={index}>{todo.description}</li>);
//     return <ul>{listItems}</ul>;
// }


function Todo({items}) {
    const rows = items.map(({ completed, description }, index) => (
        <tr key={index}>
          <td>{description}</td>
          <td>{completed ? "Yes" : "No"}</td>
        </tr>
      ));
    
      return (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Completed?</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
}

export default Todo;