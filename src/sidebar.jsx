function Sidebar({ name, logo }) {
  return (
    <div className="card">
      <div className="sidebar-header">
        <img src={logo} alt={name} />
        <h1 className="kk">{name}</h1>
      </div>

      <div className="sidebar-menu">
        <button className="dbt">Dashboard</button>
        <button className="dbt">Projects</button>
        <button className="dbt">Team</button>
        <button className="dbt">Reports</button>
        <button className="dbt">Settings</button>
      </div>
    </div>
  )
}

export default Sidebar
