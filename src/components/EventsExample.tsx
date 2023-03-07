import React, { FC, useRef, useState } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    const leabeHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('Drop');
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='Управляемый'/>
            <input ref={inputRef} type="text" placeholder='Неуправляемый'/>
            <button onClick={clickHandler}>Button</button>
            <div onDrag={dragHandler} draggable style={{ width: '200px', height: '200px', background: 'red' }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leabeHandler}
                onDragOver={dragWithPreventHandler}
                style={{ marginTop: 15, width: '200px', height: '200px', background: isDrag ? 'blue' : 'red' }}></div>
        </div>
    )
}

export default EventsExample