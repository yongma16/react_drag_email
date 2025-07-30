import { useDraggable } from '@dnd-kit/core';
import { useEffect, useMemo } from 'react';

import ButtonComponent from '../components/button/index.tsx';
import ImageComponent from '../components/image/index.tsx';
import TextComponent from '../components/text/index.tsx';
function DragContainer() {
    const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } = useDraggable({
        id: 'draggable-container',
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
        <div>
            组件区域
        </div>
        <ButtonComponent />
        <ImageComponent />
        <TextComponent />
    </div>)
}
export default DragContainer;