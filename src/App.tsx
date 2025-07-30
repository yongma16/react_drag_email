import { useState, useMemo } from 'react'
import './assets/style/index.scss'
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';

import DropContainer from './dropContainer/index.tsx';
import DragContainer from './dragContainer/index.tsx';
import { handleContextDragEnd } from './utils/index.ts';


function App() {
  return (
    <>
      <div className='container'>
        <div className='container-header'>

        </div>

        <DndContext onDragEnd={handleContextDragEnd}>
          <div className='container-body'>
            <div className='container-body-left'>
              {/* 组件区域 */}
              <DragContainer />

            </div >
            <div className='container-body-right'>
              {/* 可拖拽的画布空间 */}
              <DropContainer />
            </div>
          </div >
        </DndContext >



      </div >
    </>
  )
}

export default App
