// const App = () => (
//   <div>
//     <h2>Dogs!</h2>
//     <Shiba />
//     <SharPei />
//     <Snoop />
//   </div>
// )

const App = () => (
  <div>
    <Animal name="Cheeto" species="Tiger"/>
    <Animal name="Bronti" species="Brontosaurus"/>
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
