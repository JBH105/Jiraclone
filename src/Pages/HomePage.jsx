import React from 'react'
import Header from '../Components/Header'
import ColumnCard from '../Components/ColumnCard';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn, getAllColumn, getAllTasks } from '../common/slices/prefSlice';
import { AiOutlinePlus } from 'react-icons/ai'
const HomePage = () => {
    const column = useSelector(getAllColumn)
    const tasks = useSelector(getAllTasks)
    const dispacth = useDispatch()
    const handleAddColumn = () => {
        dispacth(addColumn())
    }
    return (
        <>
            <Header />
             <div key={"main_wrapper"} className='main_wrapper'>
                {column.map((data) => (
                    <ColumnCard tasks={tasks.filter(taskData=>taskData.columnId===data.columnId)} key={data.columnId} columnId={data.columnId} name={data.name} />
                ))}
                <div className='plus_button' onClick={handleAddColumn}>
                    <AiOutlinePlus />
                </div>
                </div>

        </>
    )
}

export default HomePage 