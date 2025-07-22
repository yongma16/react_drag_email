import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/style/index.scss'
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';

function Droppable() {
  const { setNodeRef, isOver } = useDroppable({
    id: 'droppable',
    data: {
      accepts: ['type1', 'type2'],
    },
  });

  const dropContainerClassStr = useMemo(() => {
    return isOver ? 'droppable-box droppable-box-over' : 'droppable-box';
  }, [isOver]);

  /* ... */

  return (
    <div ref={setNodeRef} className={dropContainerClassStr}>
      {/* ... */}
      拖到这里
    </div>
  );
}

function Draggable() {
  const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } = useDraggable({
    id: 'draggable',
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

  /* ... */

  return (<div ref={setNodeRef} className='droppable-box'>
    组件
    <button ref={setActivatorNodeRef} {...listeners}>Drag handle</button>
  </div>)
}

function App() {
  function handleDragEnd(event) {
    console.log('event', event)
    const { active, over } = event;

    console.log('over', over)
    if (over && over.data.current.accepts.includes(active.data.current.type)) {
      // do stuff
      if (active.data.type === 'button') {

      }
    }
  }

  return (
    <>
      <div className='container'>
        <div className='container-header'>

        </div>

        <DndContext onDragEnd={handleDragEnd}>
          <div className='container-body'>
            <div className='container-body-left'>
              <Draggable />
            </div>
            <div className='container-body-right'>
              <Droppable />

            </div>
          </div>
        </DndContext>



      </div>
    </>
  )
}

export default App
