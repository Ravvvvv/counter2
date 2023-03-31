import './ButtonsPanel.css'


const ButtonsPanel = (props)=> {
    return (<div className="buttonsPanel">
            <button onClick={()=>props.updateCounter('add') }>Add</button>
            <button onClick={()=>props.updateCounter('Reset') }>Reset</button>
            <button onClick={()=>props.updateCounter('Set 0') }>Set 0</button>
        </div>
        );
};


export default ButtonsPanel
