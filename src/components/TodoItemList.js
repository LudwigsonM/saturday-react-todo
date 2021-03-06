import TodoItem from "./TodoItems"


const TodoItemList = ({items}) => {
    
    return(
        <>
        {
            items.map((singleItem, index)=> {
                return <TodoItem title={singleItem.title} isCompleted=
                {singleItem.isCompleted} key={index} />
            } )

        }

        </>

    )
}

export default TodoItemList