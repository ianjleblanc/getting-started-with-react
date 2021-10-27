// function GroceryList({ items }) {
//     const list = items.map((item, index) => <li key={index}>{item}</li>);
//     return <ul>{list}</ul>;
//   }




function GroceryList({ items }) {
    const rows = items.map(({ quantity, item }, index) => (
      <tr key={index}>
        <td>{quantity}</td>
        <td>{item}</td>
      </tr>
    ));
  
    return (
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }


export default GroceryList;