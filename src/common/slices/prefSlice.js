import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
export const prefSlice = createSlice({
  name: "prefrence",
  initialState: {
    taskData: [
      {
        columnName: "Grocery Store",
        columnId: uuidv4(),
        tasks: [
          {
            name: "Italian Bread",
            id: uuidv4()
          },
          {
            name: "Italian Bread",
            id: uuidv4()
          },
          {
            name: "Italian Bread",
            id: uuidv4()
          },
          {
            name: "Italian Bread",
            id: uuidv4()
          },
          {
            name: "Italian Bread",
            id: uuidv4()
          }

        ]
      },

    ],
    column: [
      {
        name: "To Do",
        columnId: uuidv4()
      }
    ],
    tasks: [

    ]

  },
  reducers: {
    addColumn: (state, action) => {
      state.column.push({
        name: `Column ${state.column.length + 1}`,
        columnId: uuidv4(),
      })
    },
    editColumnName: (state, action) => {
      const { columnId, columnName } = action.payload
       state.column.forEach((data, index) => {
        if (data.columnId === columnId) {
          state.column[index].name = columnName
        }
      })
    },
    deleteColumn: (state, action) => {
      const { columnId } = action.payload
      if(state.column.length>1){
        state.column = state.column.filter(data => data.columnId !== columnId)
      }
    },
    addTasks: (state, action) => {
      const { columnId, taskName } = action.payload
      state.tasks.push({
        columnId,
        taskName,
        taskId: uuidv4()
      })
    },

    editTasksName: (state, action) => {
      const { taskId ,taskName} = action.payload
      state.tasks.forEach((data,index)=>{
        if(taskId===data.taskId){
          state.tasks[index].taskName=taskName
        }
      })
    },
    removeTasks: (state, action) => {
      const { taskId } = action.payload
      state.tasks = state.tasks.filter(data => data.taskId !== taskId)
    },
    changeTaskColumn :(state, action)=>{
      const { columnId ,taskId} = action.payload
      state.tasks.forEach((data,index)=>{
        if(taskId===data.taskId){
          state.tasks[index].columnId=columnId
        }
      })
      
    }



  },
  devTools: true,
});
export const { addColumn, editColumnName, deleteColumn, addTasks, editTasksName, removeTasks, changeTaskColumn} =
  prefSlice.actions;
// export const selectCount = (state) => state.languagekey.languagekey;
export const getAllColumn = (state) => state.prefrence.column;
export const getAllTasks = (state) => state.prefrence.tasks;

export default prefSlice.reducer;
