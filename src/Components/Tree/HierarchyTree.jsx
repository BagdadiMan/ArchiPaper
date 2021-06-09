import React, { useState } from 'react';
import './HierarchyTree.css'

import ReactFlow, { addEdge, MiniMap, Controls } from 'react-flow-renderer';

const clickableStyle = {pointerEvents:'all', cursor:'pointer', fontWeight: '700', color: "blue"};
const initialElements = [
    { 
        id: 'נועה', 
        data: { label: 'נועה - מפקדת תרגיל' }, 
        position: { x: 550, y: 0 } 
    },
    { 
        id: 'שי', 
        data: { label: 'שי -סגן מפקדת תרגיל' }, 
        position: { x: -100, y: 75 } 
    },
    {
        id: 'נוי',
        data: { label: 'נוי - רמ"ד תשתיות'},
        position: { x: 200, y: 175 }
    },
    {
        id: 'openshift',
        data: { label: 'Openshift צוות'},
        position: { x: 200, y: 225 }
    },
    {
        id: 'azure',
        data: { label: 'Azure צוות'},
        position: { x: 200, y: 268 }
    },
    {
        id: 'מיקי',
        data: { label: 'מיקי - ארכיטקטית ראשית'},
        position: { x: -200, y: 175 }
    },
    {
        id: 'רון',
        data: { label: 'רון - רמ"ד מוצר'},
        position: { x: 0, y: 175 }
    },
    {
        id: 'ניצן',
        data: { label: 'ניצן - מנהל מוצר מודיעין'},
        position: { x: 0, y: 225 }
    },
    {
        id: 'מישל',
        data: { label: 'מישל - מנהלת מוצר העמ"ץ'},
        position: { x: 0, y: 268 }
    },
    {
        id: 'אלטר',
        data: { label: 'רועי - מנהל מוצר אבטחה'},
        position: { x: 0, y: 311 }
    },
    {
        id: 'נמרוד',
        data: { label: 'נמרוד - ארכיטקט אפליקטיבי'},
        position: { x: -200, y: 268 }
    },
    {
        id: 'GoldView',
        data: { label: <span style={clickableStyle}>Gold View</span>, ref: 'http://gold-view-client-goldview.apps.openforce.openforce.biz/#/'},
        position: { x: -375, y: 268 }
    },
    {
        id: 'זהר',
        data: { label: 'זהר - ארכיטקטית רשת'},
        position: { x: -200, y: 225 }
    },
    {
        id: 'GoldControl',
        data: { label: 'Gold Control'},
        position: { x: -375, y: 225 }
    },
    {
        id: 'רועי',
        data: { label: 'רועי - המרחב המודיעיני'},
        position: { x: 550, y: 100 }
    },
    {
        id: 'ליעם',
        data: { label: 'ליעם - מרחב אבטחה'},
        position: { x: 900, y: 100 }
    },
    {
        id: 'סיון',
        data: { label: 'סיון - הערכת מצב'},
        position: { x: 1300, y: 100 }
    },
    {
        id: 'מיכאל',
        data: { label: 'מיכאל - רמ"ד'},
        position: { x: 515, y: 200 },
        style: { width: 100}
    },
    {
        id: 'עידופ',
        data: { label: 'עידו - רמ"ד'},
        position: { x: 640, y: 200 },
        style: { width: 100}
    },
    {
        id: 'אלכס',
        data: { label: 'אלכס - רמ"ד'},
        position: { x: 800, y: 200 },
        style: { width: 100}
    },
    {
        id: 'גל',
        data: { label: 'גל - רמ"ד'},
        position: { x: 925, y: 200 },
        style: { width: 100}
    },{
        id: 'גיא',
        data: { label: 'גיא - רמ"ד'},
        position: { x: 1050, y: 200 },
        style: { width: 100}
    },
    {
        id: 'יוסף',
        data: { label: 'יוסף - רמ"ד'},
        position: { x: 1325, y: 200 },
        style: { width: 100}
    },
    {
        id: 'עידוב',
        data: { label: 'עידו - רמ"ד'},
        position: { x: 1200, y: 200 },
        style: { width: 100}
    },
    {
        id: 'לאור',
        data: { label: 'לאור - רמ"ד'},
        position: { x: 1450, y: 200 },
        style: { width: 100}
    },
    {
        id: 'Scarping1',
        data: { label: 'Scraping'},
        position: { x: 515, y: 250 },
        style: { width: 100}
    },
    {
        id: 'איסוף1',
        data: { label: <span style={clickableStyle}>איסוף מודיעין</span>, ref: 'http://frontend8201test-intelapp1.apps.openforce.openforce.biz/'},
        position: { x: 515, y: 293 },
        style: { width: 100}
    },
    {
        id: 'Scarping2',
        data: { label: 'Scraping'},
        position: { x: 640, y: 250 },
        style: { width: 100}
    },
    {
        id: 'איסוף2',
        data: { label: <span style={clickableStyle}>איסוף מודיעין</span>, ref: 'http://startrec-git-intelapp2.apps.openforce.openforce.biz/'},
        position: { x: 640, y: 293 },
        style: { width: 100}
    },
    {
        id: 'חמל1',
        data: { label: <span style={clickableStyle}>תחנת משטרה</span>, ref: 'http://police-site-client-git2-securityapp1.apps.openforce.openforce.biz/#/'},
        position: { x: 800, y: 250 },
        style: { width: 100}
    }, 
    {
        id: 'אפליקציה1',
        data: { label: 'אפליקציה לשוטר'},
        position: { x: 800, y: 293 },
        style: { width: 100}
    },
    {
        id: 'חמל2',
        data: { label: <span style={clickableStyle}>תחנת משטרה</span>, ref: 'http://police-station-app-git1-securityapp2.apps.openforce.openforce.biz/'},
        position: { x: 925, y: 250 },
        style: { width: 100}
    },
    {
        id: 'אפליקציה2',
        data: { label: 'אפליקציה לשוטר'},
        position: { x: 925, y: 293 },
        style: { width: 100}
    },
    {
        id: 'da3',
        data: { label: <span style={clickableStyle}>Data Analyst</span>, ref: 'http://da-legend-git-tmzapp1.apps.openforce.openforce.biz/#/'},
        position: { x: 1450, y: 250 },
        style: { width: 100}
    },
    { 
        id: 'אפליקציה3',
        data: { label: 'אפליקציה לשוטר'},
        position: { x: 1050, y: 293 },
        style: { width: 100}
    },
    {
        id: 'da1',
        data: { label: <span style={clickableStyle}>Data Analyst</span>, ref: 'http://mercury-git-tmzde3.apps.openforce.openforce.biz/#/'},
        position: { x: 1200, y: 250 },
        style: { width: 100}
    },
    {
        id: 'de1',
        data: { label: 'Data Engineer'},
        position: { x: 1200, y: 293 },
        style: { width: 100}
    },
    {
        id: 'מפה1',
        data: { label: <span style={clickableStyle}>מפה - תחנת משטרה</span>, ref: 'http://map3-service-tmzmap3.apps.openforce.openforce.biz/#/icontrolweb'},
        position: { x: 1200, y:  336},
        style: { width: 100}
    },
    {
        id: 'מפה4',
        data: { label: <span style={clickableStyle}>מפה - אפליקציה לשוטר</span>, ref: 'http://map3-service-tmzmap3.apps.openforce.openforce.biz/#/icontrolmobile'},
        position: { x: 1200, y:  394},
        style: { width: 100}
    },
    {
        id: 'מפה5',
        data: { label: <span style={clickableStyle}>מפה - הערכת מצב</span>, ref: 'http://map3-service-tmzmap3.apps.openforce.openforce.biz/#/brain'},
        position: { x: 1200, y:  452},
        style: { width: 100}
    },
    {
        id: 'da2',
        data: { label: <span style={clickableStyle}>Data Analyst</span>, ref: 'http://alpha-da-git-tmzapp2.apps.openforce.openforce.biz/'},
        position: { x: 1325, y: 250 },
        style: { width: 100}
    },
    {
        id: 'de2',
        data: { label: 'Data Engineer'},
        position: { x: 1325, y: 293 },
        style: { width: 100}
    },
    {
        id: 'מהפ2',
        data: { label: <span style={clickableStyle}>מפה</span>, ref: 'http://alpha-maps-git-tmzmap2.apps.openforce.openforce.biz/'},
        position: { x: 1325, y:  336},
        style: { width: 100},
    },
    {
        id: 'חמל3',
        data: { label: <span style={clickableStyle}>תחנת משטרה</span>, ref: 'http://frontend-siton-dev-securityapp3.apps.openforce.openforce.biz/'},
        position: { x: 1050, y: 250 },
        style: { width: 100}
    },
    {
       
        id: 'de3',
        data: { label: 'Data Engineer'},
        position: { x: 1450, y: 293 },
        style: { width: 100}
    },
    {
        id: 'מפה3',
        data: { label: <span style={clickableStyle}>מפה</span>, ref: 'http://maps-legend-git-tmzmap1.apps.openforce.openforce.biz/#/MapAmatz'},
        position: { x: 1450, y:  336},
        style: { width: 100}
    },
    { 
        id: 'e1', 
        source: 'נועה', 
        target: 'שי', 
    },
    { 
        id: 'e2', 
        source: 'נועה', 
        target: 'נוי', 
    },
    { 
        id: 'e5', 
        source: 'שי', 
        target: 'מיקי', 
    },
    { 
        id: 'e6', 
        source: 'שי', 
        target: 'רון', 
    },
    { 
        id: 'e8', 
        source: 'נועה', 
        target: 'סיון', 
    },
    { 
        id: 'e9', 
        source: 'נועה', 
        target: 'ליעם', 
    },
    { 
        id: 'e10', 
        source: 'נועה', 
        target: 'רועי', 
    },
    { 
        id: 'e11', 
        source: 'רועי', 
        target: 'עידופ', 
    },
    { 
        id: 'e12', 
        source: 'רועי', 
        target: 'מיכאל', 
    },
    { 
        id: 'e13', 
        source: 'ליעם', 
        target: 'אלכס', 
    },
    { 
        id: 'e14', 
        source: 'ליעם', 
        target: 'גל', 
    },
    { 
        id: 'e15', 
        source: 'ליעם', 
        target: 'גיא', 
    },
    { 
        id: 'e16', 
        source: 'סיון', 
        target: 'עידוב', 
    },
    { 
        id: 'e17', 
        source: 'סיון', 
        target: 'יוסף', 
    },
    { 
        id: 'e18', 
        source: 'סיון', 
        target: 'לאור', 
    },
  ];

const onLoad = (reactFlowInstance) =>
    reactFlowInstance.fitView({ padding: 0.2 });

const HierarchyTree = () => {
    const [elements, setElements] = useState(initialElements);
    const [isSelectable, setIsSelectable] = useState(false);

    const onDoubleClick = (event, {data}) => data.ref && window.open(data.ref);
    return (
        <ReactFlow dir="ltr" className='miki'
            elements={elements}
            elementsSelectable={isSelectable}
            onLoad={onLoad} 
            defaultZoom={1.5} 
            minZoom={0.8} 
            maxZoom={1.5}
            onElementClick={onDoubleClick}
            nodesDraggable={false}
        >
            <Controls showInteractive={false}/>
        </ReactFlow>
        
    );
};

export default HierarchyTree;