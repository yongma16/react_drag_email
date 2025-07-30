import { useDraggable } from '@dnd-kit/core';
import { useEffect, useMemo } from 'react';
function ImageComponent() {
    const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } = useDraggable({
        id: 'draggable-image',
        data: {
            type: 'type1',
            componentType: 'button',
            renderTag: 'div',
            componentJsonContent: {
                type: 'image',
                content: '图片',
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
        图片组件
        <button ref={setActivatorNodeRef} {...listeners}>Drag handle</button>
    </div>)
}
export default ImageComponent;