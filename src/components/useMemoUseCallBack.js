import {useState, useMemo,useCallback} from "react";

const Display = () => {
    const [time, setTime] = useState(new Date())
    const formatTime = useMemo(() => {
        console.log("Форматирование Времени")
        return time.toLocaleTimeString()
    }, [time])

    const newTime = useCallback(()=>{
        console.log("Обновление времени")
        setTime(new Date())
    }, [])
    return (
        <div>
            <h1>Текущее время: </h1>
            <p> {formatTime}</p>
            <button onClick={newTime}> Обновить время </button>
        </div>
    )
}
export default Display