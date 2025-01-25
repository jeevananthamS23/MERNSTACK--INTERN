/*
function Display( )
{
  
    return (
        <>   // functional component
        <h1>im coming from Datas.js  </h1>
        <h3>this is from display</h3>
        <h4>im the sec line</h4>
        </>
    )
}
export default Display
==============================================

function Display(values)
{
  
    const {n}=values
    return (
        <>
        <h1>im coming from Datas.js {n} </h1>
        <h3>this is from display</h3>
        <h4>im the sec line</h4>
        </>
    )
}
export default Display

========================================

*/












function Display(values) {
    const { n, roll, ge, obj1 = {} } = values; // Default obj1 to an empty object
    const { empName = "N/A", city = "N/A" } = obj1; // Default empName and city

    return (
        <>
            <h1>I'm coming from Datas.js: {n} {roll} {ge}</h1>
            <h2>{empName}, {city}</h2>
            <h3>This is from Display</h3>
            <h4>I'm the second line</h4>
        </>
    );
}

export default Display;

