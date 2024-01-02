import "./styles.css"
export default function App() {
 
  return (
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New item</label>
      <input type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>

  <h1 className="header">Todo</h1>
  <ul>
    <li>
      <label>
        <input type="checkbox" />
        Item
      </label>
      <button className="btn btn-danger">x</button>
    </li>

    <li>
      <label>
        <input type="checkbox" />
        Item 2
      </label>
      <button className="btn btn-danger">x</button>
    </li>
  </ul>
  </>
  )
}


