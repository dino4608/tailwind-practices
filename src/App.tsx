const App = () => {


  return (
    <>
      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-before-column md:break-before-auto">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
    </>
  )
}

export default App
