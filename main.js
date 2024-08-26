function App() {
    const myBd = {year : 1999, mon : 1, dat : 20};
    const currY =  { years : new Date().toDateString().split(' ')[3]};
    const ages = currY.years - myBd.year
    console.log(ages)
    console.log(currY.years)
    return (
        <div>
        <p>Lab01</p>
        <h1>Bond Bd</h1>
        <h1>CodeCamp18 : {new Date().toDateString().split(' ')[1]}</h1>
        <p>y :{myBd.year} m: {myBd.mon} d :{myBd.dat}</p>
        <p>age : {ages}</p>
        </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)