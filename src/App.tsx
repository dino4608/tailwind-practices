const App = () => {


  return (
    <>
      <button className="bg-sky-500 hover:bg-sky-700 ...">
        Save changes
      </button>

      <button className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
        Save changes
      </button>

      <button className="bg-indigo-600 hover:not-focus:bg-indigo-700">
        Save changes
      </button>
    </>
  )
}

export default App
