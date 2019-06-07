const initialData = {
    tasks: {
        "task-1": { id:"task-1", content:"Take out the garbage"},
        "task-2": { id:"task-2", content:"Buy milk"},
        "task-3": { id:"task-3", content:"Football match"},
        "task-4": { id:"task-4", content:"Cook dinner"},
        "task-5": { id:"task-5", content:"Charge my pc"}
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            taskIds: ["task-1","task-2","task-3","task-4","task-5"]
        },
        "column-2": {
            id: "column-2",
            title: "Doing",
            taskIds: []
        },
        "column-3": {
            id: "column-3",
            title: "Done",
            taskIds: []
        }
    },

    // Facilitate rendering of the columns
    columnOrder: ["column-1", "column-2", "column-3"]
};

export default initialData