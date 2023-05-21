import './ButtonsPanel.css'


const ButtonsPanel = (props) => {
    return (<div className="buttonsPanel">
        <button onClick={() => props.stepChangeprops ('add')}>Add {props.stepValue} </button>
        <button onClick={() => props.updateCounter('Reset')}>Reset</button>
    
        <button onClick={() => props.updateCounter('Set 0')}>Set 0</button>
    </div>
    );
};


export default ButtonsPanel




// poprzez props przekazać wartość Stepa (stan ) do komponentu gdzie jest button. Będzie to prosta komunikacja rodzic dziecko. Zero udziwnień. Spójrz na inne propsy które Buduwales już w ten sposób. 

// Następnie w komponencie z buttonem wstaw wartość do tekstu wew buttona dzięki {} w stylu
