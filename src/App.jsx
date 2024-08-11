import './app.css'



function App() {
  return (






<div style={{
  background:'grey',
  height:800,
  textAlign:"center",
  margin:60,
  
}}><h2 style={{
  fontSize:50,
}}> Expense Tracker</h2>

<form style={{
  display:'flex',
  justifyContent:'center',
  
}} >
<label htmlFor="Expense">Expense :</label>
<input type="number" /><br />
<label htmlFor="income">Income :</label>
<input type="number" /> <br />

<label htmlFor="Balance">Balance :</label>
<input type="number" /> <br />
</form>


<div style={{
  display:'flex',
  gap:40,
  justifyContent:'center'
}}>
<button style={{
background:'green',
color:"white",
marginTop:20,
borderRadius:'25%',
padding:10,
marginBottom:20,
}}
 >Check</button><br />

<button style={{
background:'green',
color:"white",
marginTop:20,
borderRadius:'25%',
padding:10,
marginBottom:20,

}}
 >Edit</button><br />

<button style={{
background:'green',
color:"white",
marginTop:20,
borderRadius:'25%',
padding:10,
marginBottom:20,

}}
 >Delete</button><br />
 </div>


</div>



)
}

export default App
