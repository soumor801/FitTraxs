
function TraxsLog() {
  return (
    <div>
      <h1>TraxsLogs</h1>
      <form>
      <label htmlFor="Name of WorkOut">Name of WorkOut: </label>
        <input type='text' placeholder='Bench Press' id='Name of WorkOut'/> 
        
        <label htmlFor="Number of Reps">Number of Reps: </label>
        <input type='text' placeholder='10 Reps' id='Number of Reps' />
        
        <label htmlFor="Number of Sets">Number of Sets: </label>
        <input type='text' placeholder='3 Sets' id='Number of Sets'/>
        



      </form>
    </div>
  )
}
export default TraxsLog;