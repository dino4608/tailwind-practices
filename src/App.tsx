const App = () => {


  return (
    <>
      <div className="columns-3 gap-16">
        <img className="aspect-3/2" src="ratio-3x2.jpg" />
        <img className="aspect-square" src="ratio-3x2.jpg" />
        <img className="aspect-video" src="ratio-3x2.jpg" />

        <img className="aspect-3/2" src="ratio-3x2.jpg" />
        <img className="aspect-square" src="ratio-3x2.jpg" />
        <img className="aspect-video" src="ratio-3x2.jpg" />

        <img className="aspect-3/2" src="ratio-3x2.jpg" />
        <img className="aspect-square" src="ratio-3x2.jpg" />
        <img className="aspect-video" src="ratio-3x2.jpg" />

      </div>
      <div className="columns-2 gap-8 sm:columns-4 sm:gap-4">
        <img className="aspect-3/2" src="ratio-3x2.jpg" />
        <img className="aspect-square ..." src="ratio-3x2.jpg" />
        <img className="aspect-square ..." src="ratio-3x2.jpg" />
        <img className="aspect-3/2 ..." src="ratio-3x2.jpg" />
      </div>
    </>
  )
}

export default App
