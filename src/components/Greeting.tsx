/*  Make the interface to the Componetn PROPS
    PROPS = PROPERTIES = ATTRIBUTES */

interface GreetingProps {
    /* What's properties/atributes/props I wanna get?
       What' the type of every one? */
    name?: string;
}

// Make the component!

// Inside (), i get the props/attributes! as an OBJECT/JSON/DICT
const Greeting: React.FC<GreetingProps> = ({ name }: GreetingProps) => {
    /* This return something with HTML Sintaxis!
    I Will use the props here!
    Here can validate data or anything! think!*/

    // Just I wanna put "ME" because is my name!, or {name} in other case!
    const sustantive = name === 'Santiago' ? 'me' : name;
    const msg = `Hello ${sustantive}, this is a REACT Review!`;

    // This is the component!
    return (
        <>
            <div id={'greeting-ctn'}>
                <p className='message'>{msg}</p>
            </div>
        </>
    );
};

export default Greeting;
