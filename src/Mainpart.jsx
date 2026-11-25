function Mainpart({ children }) {
  return (
    <main className="main-content">
      <div className="mainpartheader">
        <h1>Welcome Back, Navaneth</h1>
        <h6>Here is what happening in PulseWork AI</h6>
      </div>
      <div className="tasksgrid">
        {children}
      </div>
    </main>
  )
}

export default Mainpart
