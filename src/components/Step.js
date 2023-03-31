const Step = (props) => {
 
    return (
        <form>
            <input type='number' onChange={(event)=>{props.stepChange(event)}} />
            <p >Krok</p>

        </form>
    )
};


export default Step