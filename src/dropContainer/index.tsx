import { useDroppable } from '@dnd-kit/core';
import { useEffect, useMemo } from 'react';
// import { Droppable, DragDropManager } from '@dnd-kit/dom';
const DropContainer = (props: any) => {
    const { setNodeRef, isOver } = useDroppable({
        id: 'droppable-container',
        data: {
            accepts: ['column'],
        },
    });

    const dropContainerClassStr = useMemo(() => {
        return isOver ? 'droppable-box droppable-box-over' : 'droppable-box';
    }, [isOver]);

    /* ... */
    useEffect(() => {
        console.log('DropContainer mounted or updated', props);
        // Any additional effects can be handled here
    }, [props])

    return (
        <div ref={setNodeRef} className={dropContainerClassStr}>
            {/* ... */}
            拖到这里
        </div>
    );
}

export default DropContainer;