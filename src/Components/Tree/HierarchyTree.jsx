import React, { useState } from 'react';
import './HierarchyTree.css'

import ReactFlow, { addEdge, MiniMap, Controls } from 'react-flow-renderer';

const initialElements = [
    { 
        id: '1', 
        data: { label: 'Node 1' }, 
        position: { x: 250, y: 5 } 
    },
    // you can also pass a React component as a label
    { 
        id: '2', 
        data: { label: <div>Node 2</div> }, 
        position: { x: 100, y: 100 } 
    },
    { 
        id: 'e1-2', 
        source: '1', 
        target: '2', 
        animated: true
    },
  ];

const onNodeDragStart = (event, node) => console.log('drag start', node);
const onNodeDragStop = (event, node) => console.log('drag stop', node);
const onElementClick = (event, element) => console.log('click', element);
const onPaneClick = (event) => console.log('onPaneClick', event);
const onPaneScroll = (event) => console.log('onPaneScroll', event);
const onPaneContextMenu = (event) => console.log('onPaneContextMenu', event);
const onLoad = (reactFlowInstance) =>
    reactFlowInstance.fitView({ padding: 0.2 });

const HierarchyTree = () => {
    const [elements, setElements] = useState(initialElements);
    const onConnect = (params) => setElements((els) => addEdge(params, els));

    const [isSelectable, setIsSelectable] = useState(false);
    const [isDraggable, setIsDraggable] = useState(false);
    const [isConnectable, setIsConnectable] = useState(false);
    const [panOnScroll, setPanOnScroll] = useState(false);
    const [panOnScrollMode, setPanOnScrollMode] = useState('free');
    const [paneMoveable, setPaneMoveable] = useState(true);
    const [captureElementClick, setCaptureElementClick] = useState(false);

    return (
        <ReactFlow
            elements={elements}
            elementsSelectable={isSelectable}
            nodesConnectable={isConnectable}
            nodesDraggable={isDraggable}
            panOnScroll={panOnScroll}
            panOnScrollMode={panOnScrollMode}
            onConnect={onConnect}
            onElementClick={captureElementClick ? onElementClick : undefined}
            onNodeDragStart={onNodeDragStart}
            onNodeDragStop={onNodeDragStop}
            paneMoveable={paneMoveable}
            onLoad={onLoad}
            onNodeDoubleClick={(data, more) => console.log(more.data)}
            minZoom={1}
            maxZoom={1}
        >
            <Controls />
        </ReactFlow>
        
    );
};

export default HierarchyTree;