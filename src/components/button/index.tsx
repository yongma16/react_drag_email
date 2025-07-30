import { useDraggable } from '@dnd-kit/core';
import { useEffect, useMemo } from 'react';
function ButtonComponent() {
    const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } = useDraggable({
        id: 'draggable-button',
        data: {
            type: 'type1',
            componentType: 'button',
            renderTag: 'div',
            componentJsonContent: {
                type: 'button',
                content: '按钮',
                attributes: {
                    'padding-left': '10px',
                    'padding-right': '10px',
                    'padding-top': '5px',
                    'padding-bottom': '5px',
                    'background-color': '#000',
                    'color': '#fff',
                    'border-radius': '5px',
                }
            }

        },
    });
    return (<div ref={setNodeRef} className='droppable-box'>
        组件
        <button ref={setActivatorNodeRef} {...listeners}>Drag handle</button>
    </div>)
}
export default ButtonComponent;