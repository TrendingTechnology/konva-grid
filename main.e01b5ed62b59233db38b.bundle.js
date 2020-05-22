(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{287:function(module,exports,__webpack_require__){__webpack_require__(288),__webpack_require__(434),module.exports=__webpack_require__(435)},352:function(module,exports){},435:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(286);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(624)],module)}.call(this,__webpack_require__(436)(module))},624:function(module,exports,__webpack_require__){var map={"./Grid.stories.tsx":670};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=624},670:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BaseGrid",(function(){return Grid_stories_BaseGrid})),__webpack_require__.d(__webpack_exports__,"BaseGridWithSelection",(function(){return Grid_stories_BaseGridWithSelection})),__webpack_require__.d(__webpack_exports__,"VariableSizeGrid",(function(){return Grid_stories_VariableSizeGrid})),__webpack_require__.d(__webpack_exports__,"LargeGrid",(function(){return Grid_stories_LargeGrid})),__webpack_require__.d(__webpack_exports__,"TableGrid",(function(){return Grid_stories_TableGrid}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),ReactKonva=__webpack_require__(12),getRowStartIndexForOffset=function getRowStartIndexForOffset(_ref){var itemType=_ref.itemType,rowHeight=_ref.rowHeight,columnWidth=_ref.columnWidth,rowCount=_ref.rowCount,columnCount=_ref.columnCount,instanceProps=_ref.instanceProps,offset=_ref.offset;return findNearestItem({itemType:itemType,rowHeight:rowHeight,columnWidth:columnWidth,rowCount:rowCount,columnCount:columnCount,instanceProps:instanceProps,offset:offset})},getRowStopIndexForStartIndex=function getRowStopIndexForStartIndex(_ref2){for(var startIndex=_ref2.startIndex,rowCount=_ref2.rowCount,rowHeight=_ref2.rowHeight,columnWidth=_ref2.columnWidth,scrollTop=_ref2.scrollTop,containerHeight=_ref2.containerHeight,instanceProps=_ref2.instanceProps,itemMetadata=getItemMetadata({itemType:"row",rowHeight:rowHeight,columnWidth:columnWidth,index:startIndex,instanceProps:instanceProps}),maxOffset=scrollTop+containerHeight,offset=itemMetadata.offset+itemMetadata.size,stopIndex=startIndex;stopIndex<rowCount-1&&offset<maxOffset;)stopIndex++,offset+=getItemMetadata({itemType:"row",rowHeight:rowHeight,columnWidth:columnWidth,index:stopIndex,instanceProps:instanceProps}).size;return stopIndex},getColumnStartIndexForOffset=function getColumnStartIndexForOffset(_ref3){var itemType=_ref3.itemType,rowHeight=_ref3.rowHeight,columnWidth=_ref3.columnWidth,rowCount=_ref3.rowCount,columnCount=_ref3.columnCount,instanceProps=_ref3.instanceProps,offset=_ref3.offset;return findNearestItem({itemType:itemType,rowHeight:rowHeight,columnWidth:columnWidth,rowCount:rowCount,columnCount:columnCount,instanceProps:instanceProps,offset:offset})},getColumnStopIndexForStartIndex=function getColumnStopIndexForStartIndex(_ref4){for(var startIndex=_ref4.startIndex,rowHeight=_ref4.rowHeight,columnWidth=_ref4.columnWidth,instanceProps=_ref4.instanceProps,containerWidth=_ref4.containerWidth,scrollLeft=_ref4.scrollLeft,columnCount=_ref4.columnCount,itemMetadata=getItemMetadata({itemType:"column",index:startIndex,rowHeight:rowHeight,columnWidth:columnWidth,instanceProps:instanceProps}),maxOffset=scrollLeft+containerWidth,offset=itemMetadata.offset+itemMetadata.size,stopIndex=startIndex;stopIndex<columnCount-1&&offset<maxOffset;)stopIndex++,offset+=getItemMetadata({itemType:"column",rowHeight:rowHeight,columnWidth:columnWidth,index:stopIndex,instanceProps:instanceProps}).size;return stopIndex},getBoundedCells=function getBoundedCells(area){for(var top=area.top,bottom=area.bottom,left=area.left,right=area.right,cells=new Set,i=top;i<=bottom;i++)for(var j=left;j<=right;j++)cells.add(JSON.stringify([i,j]));return cells},itemKey=function itemKey(_ref5){var rowIndex=_ref5.rowIndex,columnIndex=_ref5.columnIndex;return"".concat(rowIndex,":").concat(columnIndex)},getRowOffset=function getRowOffset(_ref6){var index=_ref6.index,rowHeight=_ref6.rowHeight,columnWidth=_ref6.columnWidth,instanceProps=_ref6.instanceProps;return getItemMetadata({itemType:"row",index:index,rowHeight:rowHeight,columnWidth:columnWidth,instanceProps:instanceProps}).offset},getColumnOffset=function getColumnOffset(_ref7){var index=_ref7.index,rowHeight=_ref7.rowHeight,columnWidth=_ref7.columnWidth,instanceProps=_ref7.instanceProps;return getItemMetadata({itemType:"column",index:index,rowHeight:rowHeight,columnWidth:columnWidth,instanceProps:instanceProps}).offset},getRowHeight=function getRowHeight(index,instanceProps){return instanceProps.rowMetadataMap[index].size},getColumnWidth=function getColumnWidth(index,instanceProps){return instanceProps.columnMetadataMap[index].size},getItemMetadata=function getItemMetadata(_ref8){var itemMetadataMap,itemSize,lastMeasuredIndex,itemType=_ref8.itemType,index=_ref8.index,rowHeight=_ref8.rowHeight,columnWidth=_ref8.columnWidth,instanceProps=_ref8.instanceProps;if("column"===itemType?(itemMetadataMap=instanceProps.columnMetadataMap,itemSize=columnWidth,lastMeasuredIndex=instanceProps.lastMeasuredColumnIndex):(itemMetadataMap=instanceProps.rowMetadataMap,itemSize=rowHeight,lastMeasuredIndex=instanceProps.lastMeasuredRowIndex),index>lastMeasuredIndex){var offset=0;if(lastMeasuredIndex>=0){var itemMetadata=itemMetadataMap[lastMeasuredIndex];offset=itemMetadata.offset+itemMetadata.size}for(var i=lastMeasuredIndex+1;i<=index;i++){var size=itemSize(i);itemMetadataMap[i]={offset:offset,size:size},offset+=size}"column"===itemType?instanceProps.lastMeasuredColumnIndex=index:instanceProps.lastMeasuredRowIndex=index}return itemMetadataMap[index]},findNearestItem=function findNearestItem(_ref9){var itemMetadataMap,lastMeasuredIndex,itemType=_ref9.itemType,rowHeight=_ref9.rowHeight,columnWidth=_ref9.columnWidth,rowCount=_ref9.rowCount,columnCount=_ref9.columnCount,instanceProps=_ref9.instanceProps,offset=_ref9.offset;return"column"===itemType?(itemMetadataMap=instanceProps.columnMetadataMap,lastMeasuredIndex=instanceProps.lastMeasuredColumnIndex):(itemMetadataMap=instanceProps.rowMetadataMap,lastMeasuredIndex=instanceProps.lastMeasuredRowIndex),(lastMeasuredIndex>0?itemMetadataMap[lastMeasuredIndex].offset:0)>=offset?findNearestItemBinarySearch({itemType:itemType,rowHeight:rowHeight,columnWidth:columnWidth,instanceProps:instanceProps,high:lastMeasuredIndex,low:0,offset:offset}):findNearestItemExponentialSearch({itemType:itemType,rowHeight:rowHeight,rowCount:rowCount,columnCount:columnCount,columnWidth:columnWidth,instanceProps:instanceProps,index:Math.max(0,lastMeasuredIndex),offset:offset})},findNearestItemBinarySearch=function findNearestItemBinarySearch(_ref10){for(var itemType=_ref10.itemType,rowHeight=_ref10.rowHeight,columnWidth=_ref10.columnWidth,instanceProps=_ref10.instanceProps,high=_ref10.high,low=_ref10.low,offset=_ref10.offset;low<=high;){var middle=low+Math.floor((high-low)/2),currentOffset=getItemMetadata({itemType:itemType,rowHeight:rowHeight,columnWidth:columnWidth,index:middle,instanceProps:instanceProps}).offset;if(currentOffset===offset)return middle;currentOffset<offset?low=middle+1:currentOffset>offset&&(high=middle-1)}return low>0?low-1:0},findNearestItemExponentialSearch=function findNearestItemExponentialSearch(_ref11){for(var itemType=_ref11.itemType,rowHeight=_ref11.rowHeight,columnWidth=_ref11.columnWidth,rowCount=_ref11.rowCount,columnCount=_ref11.columnCount,instanceProps=_ref11.instanceProps,index=_ref11.index,offset=_ref11.offset,itemCount="column"===itemType?columnCount:rowCount,interval=1;index<itemCount&&getItemMetadata({itemType:itemType,rowHeight:rowHeight,columnWidth:columnWidth,index:index,instanceProps:instanceProps}).offset<offset;)index+=interval,interval*=2;return findNearestItemBinarySearch({itemType:itemType,rowHeight:rowHeight,columnWidth:columnWidth,instanceProps:instanceProps,high:Math.min(index,itemCount-1),low:Math.floor(index/2),offset:offset})};try{getRowStartIndexForOffset.displayName="getRowStartIndexForOffset",getRowStartIndexForOffset.__docgenInfo={description:"",displayName:"getRowStartIndexForOffset",props:{itemType:{defaultValue:null,description:"",name:"itemType",required:!0,type:{name:'"row" | "column"'}},offset:{defaultValue:null,description:"",name:"offset",required:!0,type:{name:"number"}},rowCount:{defaultValue:null,description:"",name:"rowCount",required:!0,type:{name:"number"}},columnCount:{defaultValue:null,description:"",name:"columnCount",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"any"}},columnWidth:{defaultValue:null,description:"",name:"columnWidth",required:!0,type:{name:"any"}},instanceProps:{defaultValue:null,description:"",name:"instanceProps",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helpers.ts#getRowStartIndexForOffset"]={docgenInfo:getRowStartIndexForOffset.__docgenInfo,name:"getRowStartIndexForOffset",path:"src/helpers.ts#getRowStartIndexForOffset"})}catch(__react_docgen_typescript_loader_error){}try{getRowStopIndexForStartIndex.displayName="getRowStopIndexForStartIndex",getRowStopIndexForStartIndex.__docgenInfo={description:"",displayName:"getRowStopIndexForStartIndex",props:{startIndex:{defaultValue:null,description:"",name:"startIndex",required:!0,type:{name:"number"}},containerHeight:{defaultValue:null,description:"",name:"containerHeight",required:!0,type:{name:"number"}},scrollTop:{defaultValue:null,description:"",name:"scrollTop",required:!0,type:{name:"number"}},rowCount:{defaultValue:null,description:"",name:"rowCount",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"any"}},columnWidth:{defaultValue:null,description:"",name:"columnWidth",required:!0,type:{name:"any"}},instanceProps:{defaultValue:null,description:"",name:"instanceProps",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helpers.ts#getRowStopIndexForStartIndex"]={docgenInfo:getRowStopIndexForStartIndex.__docgenInfo,name:"getRowStopIndexForStartIndex",path:"src/helpers.ts#getRowStopIndexForStartIndex"})}catch(__react_docgen_typescript_loader_error){}try{getColumnStartIndexForOffset.displayName="getColumnStartIndexForOffset",getColumnStartIndexForOffset.__docgenInfo={description:"",displayName:"getColumnStartIndexForOffset",props:{itemType:{defaultValue:null,description:"",name:"itemType",required:!0,type:{name:'"row" | "column"'}},offset:{defaultValue:null,description:"",name:"offset",required:!0,type:{name:"number"}},rowCount:{defaultValue:null,description:"",name:"rowCount",required:!0,type:{name:"number"}},columnCount:{defaultValue:null,description:"",name:"columnCount",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"any"}},columnWidth:{defaultValue:null,description:"",name:"columnWidth",required:!0,type:{name:"any"}},instanceProps:{defaultValue:null,description:"",name:"instanceProps",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helpers.ts#getColumnStartIndexForOffset"]={docgenInfo:getColumnStartIndexForOffset.__docgenInfo,name:"getColumnStartIndexForOffset",path:"src/helpers.ts#getColumnStartIndexForOffset"})}catch(__react_docgen_typescript_loader_error){}try{getColumnStopIndexForStartIndex.displayName="getColumnStopIndexForStartIndex",getColumnStopIndexForStartIndex.__docgenInfo={description:"",displayName:"getColumnStopIndexForStartIndex",props:{startIndex:{defaultValue:null,description:"",name:"startIndex",required:!0,type:{name:"number"}},containerWidth:{defaultValue:null,description:"",name:"containerWidth",required:!0,type:{name:"number"}},scrollLeft:{defaultValue:null,description:"",name:"scrollLeft",required:!0,type:{name:"number"}},columnCount:{defaultValue:null,description:"",name:"columnCount",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"any"}},columnWidth:{defaultValue:null,description:"",name:"columnWidth",required:!0,type:{name:"any"}},instanceProps:{defaultValue:null,description:"",name:"instanceProps",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helpers.ts#getColumnStopIndexForStartIndex"]={docgenInfo:getColumnStopIndexForStartIndex.__docgenInfo,name:"getColumnStopIndexForStartIndex",path:"src/helpers.ts#getColumnStopIndexForStartIndex"})}catch(__react_docgen_typescript_loader_error){}try{getBoundedCells.displayName="getBoundedCells",getBoundedCells.__docgenInfo={description:"",displayName:"getBoundedCells",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helpers.ts#getBoundedCells"]={docgenInfo:getBoundedCells.__docgenInfo,name:"getBoundedCells",path:"src/helpers.ts#getBoundedCells"})}catch(__react_docgen_typescript_loader_error){}try{itemKey.displayName="itemKey",itemKey.__docgenInfo={description:"",displayName:"itemKey",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helpers.ts#itemKey"]={docgenInfo:itemKey.__docgenInfo,name:"itemKey",path:"src/helpers.ts#itemKey"})}catch(__react_docgen_typescript_loader_error){}try{getRowOffset.displayName="getRowOffset",getRowOffset.__docgenInfo={description:"",displayName:"getRowOffset",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"any"}},columnWidth:{defaultValue:null,description:"",name:"columnWidth",required:!0,type:{name:"any"}},instanceProps:{defaultValue:null,description:"",name:"instanceProps",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helpers.ts#getRowOffset"]={docgenInfo:getRowOffset.__docgenInfo,name:"getRowOffset",path:"src/helpers.ts#getRowOffset"})}catch(__react_docgen_typescript_loader_error){}try{getColumnOffset.displayName="getColumnOffset",getColumnOffset.__docgenInfo={description:"",displayName:"getColumnOffset",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"any"}},columnWidth:{defaultValue:null,description:"",name:"columnWidth",required:!0,type:{name:"any"}},instanceProps:{defaultValue:null,description:"",name:"instanceProps",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helpers.ts#getColumnOffset"]={docgenInfo:getColumnOffset.__docgenInfo,name:"getColumnOffset",path:"src/helpers.ts#getColumnOffset"})}catch(__react_docgen_typescript_loader_error){}try{getItemMetadata.displayName="getItemMetadata",getItemMetadata.__docgenInfo={description:"",displayName:"getItemMetadata",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},itemType:{defaultValue:null,description:"",name:"itemType",required:!0,type:{name:'"row" | "column"'}},rowHeight:{defaultValue:null,description:"",name:"rowHeight",required:!0,type:{name:"any"}},columnWidth:{defaultValue:null,description:"",name:"columnWidth",required:!0,type:{name:"any"}},instanceProps:{defaultValue:null,description:"",name:"instanceProps",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helpers.ts#getItemMetadata"]={docgenInfo:getItemMetadata.__docgenInfo,name:"getItemMetadata",path:"src/helpers.ts#getItemMetadata"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Grid=Object(react.forwardRef)((function(props,forwardedRef){var containerWidth=props.width,containerHeight=props.height,estimatedColumnWidth=props.estimatedColumnWidth,estimatedRowHeight=props.estimatedRowHeight,rowHeight=props.rowHeight,columnWidth=props.columnWidth,rowCount=props.rowCount,columnCount=props.columnCount,scrollbarSize=props.scrollbarSize,children=props.children,onScroll=props.onScroll,showScrollbar=props.showScrollbar,selectionBackgroundColor=props.selectionBackgroundColor,selectionBorderColor=props.selectionBorderColor,selectionArea=props.selectionArea;Object(react.useImperativeHandle)(forwardedRef,(function(){return{scrollTo:scrollTo,stage:stageRef.current,resetAfterIndices:resetAfterIndices}}));var instanceProps=Object(react.useRef)({columnMetadataMap:{},rowMetadataMap:{},lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,estimatedColumnWidth:estimatedColumnWidth||50,estimatedRowHeight:estimatedRowHeight||50}),stageRef=Object(react.useRef)(null),verticalScrollRef=Object(react.useRef)(null),wheelingRef=Object(react.useRef)(null),horizontalScrollRef=Object(react.useRef)(null),_useReducer2=_slicedToArray(Object(react.useReducer)((function(s){return s+1}),0),2),forceRender=(_useReducer2[0],_useReducer2[1]),_useState2=_slicedToArray(Object(react.useState)(0),2),scrollTop=_useState2[0],setScrollTop=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(0),2),scrollLeft=_useState4[0],setScrollLeft=_useState4[1],resetAfterIndices=Object(react.useCallback)((function(_ref){var columnIndex=_ref.columnIndex,rowIndex=_ref.rowIndex,_ref$shouldForceUpdat=_ref.shouldForceUpdate,shouldForceUpdate=void 0===_ref$shouldForceUpdat||_ref$shouldForceUpdat;"number"==typeof columnIndex&&(instanceProps.current.lastMeasuredColumnIndex=Math.min(instanceProps.current.lastMeasuredColumnIndex,columnIndex-1)),"number"==typeof rowIndex&&(instanceProps.current.lastMeasuredRowIndex=Math.min(instanceProps.current.lastMeasuredRowIndex,rowIndex-1)),shouldForceUpdate&&forceRender()}),[]),handleScroll=Object(react.useCallback)((function(e){setScrollTop(e.target.scrollTop),onScroll&&onScroll({scrollTop:e.target.scrollTop,scrollLeft:scrollLeft})}),[scrollLeft]),handleScrollLeft=Object(react.useCallback)((function(e){setScrollLeft(e.target.scrollLeft),onScroll&&onScroll({scrollLeft:e.target.scrollLeft,scrollTop:scrollTop})}),[scrollTop]),scrollTo=Object(react.useCallback)((function(_ref2){var scrollTop=_ref2.scrollTop,scrollLeft=_ref2.scrollLeft;showScrollbar?(horizontalScrollRef.current&&(horizontalScrollRef.current.scrollLeft=scrollLeft),verticalScrollRef.current&&(verticalScrollRef.current.scrollTop=scrollTop)):(void 0!==scrollLeft&&setScrollLeft(scrollLeft),void 0!==scrollTop&&setScrollTop(scrollTop))}),[showScrollbar]),handleWheel=Object(react.useCallback)((function(event){var _horizontalScrollRef$,_verticalScrollRef$cu;if(!wheelingRef.current){var _event$nativeEvent=event.nativeEvent,deltaX=_event$nativeEvent.deltaX,deltaY=_event$nativeEvent.deltaY,deltaMode=_event$nativeEvent.deltaMode,dx=deltaX,dy=deltaY;if(1===deltaMode&&(dy*=17),horizontalScrollRef.current&&verticalScrollRef.current){var x=null===(_horizontalScrollRef$=horizontalScrollRef.current)||void 0===_horizontalScrollRef$?void 0:_horizontalScrollRef$.scrollLeft,y=null===(_verticalScrollRef$cu=verticalScrollRef.current)||void 0===_verticalScrollRef$cu?void 0:_verticalScrollRef$cu.scrollTop;wheelingRef.current=window.requestAnimationFrame((function(){wheelingRef.current=null,horizontalScrollRef.current&&(horizontalScrollRef.current.scrollLeft=x+dx),verticalScrollRef.current&&(verticalScrollRef.current.scrollTop=y+dy)}))}}}),[]),rowStartIndex=getRowStartIndexForOffset({itemType:"row",rowHeight:rowHeight,columnWidth:columnWidth,rowCount:rowCount,columnCount:columnCount,instanceProps:instanceProps.current,offset:scrollTop}),rowStopIndex=getRowStopIndexForStartIndex({startIndex:rowStartIndex,rowCount:rowCount,rowHeight:rowHeight,columnWidth:columnWidth,scrollTop:scrollTop,containerHeight:containerHeight,instanceProps:instanceProps.current}),columnStartIndex=getColumnStartIndexForOffset({itemType:"column",rowHeight:rowHeight,columnWidth:columnWidth,rowCount:rowCount,columnCount:columnCount,instanceProps:instanceProps.current,offset:scrollLeft}),columnStopIndex=getColumnStopIndexForStartIndex({startIndex:columnStartIndex,columnCount:columnCount,rowHeight:rowHeight,columnWidth:columnWidth,scrollLeft:scrollLeft,containerWidth:containerWidth,instanceProps:instanceProps.current}),items=[];if(columnCount>0&&rowCount)for(var rowIndex=rowStartIndex;rowIndex<=rowStopIndex;rowIndex++)for(var columnIndex=columnStartIndex;columnIndex<=columnStopIndex;columnIndex++){var width=getColumnWidth(columnIndex,instanceProps.current),x=getColumnOffset({index:columnIndex,rowHeight:rowHeight,columnWidth:columnWidth,instanceProps:instanceProps.current}),height=getRowHeight(rowIndex,instanceProps.current),y=getRowOffset({index:rowIndex,rowHeight:rowHeight,columnWidth:columnWidth,instanceProps:instanceProps.current});items.push(Object(react.createElement)(children,{x:x,y:y,width:width,height:height,rowIndex:rowIndex,columnIndex:columnIndex,key:itemKey({rowIndex:rowIndex,columnIndex:columnIndex})}))}var top=selectionArea.top,left=selectionArea.left,right=selectionArea.right,bottom=selectionArea.bottom,selectionBounds={x:0,y:0,width:0,height:0};rowCount>bottom&&columnCount>right&&top<bottom&&left<right&&(selectionBounds.y=getRowOffset({index:top,rowHeight:rowHeight,columnWidth:columnWidth,instanceProps:instanceProps.current}),selectionBounds.height=getRowOffset({index:bottom-1,rowHeight:rowHeight,columnWidth:columnWidth,instanceProps:instanceProps.current})-selectionBounds.y+getRowHeight(bottom,instanceProps.current),selectionBounds.x=getColumnOffset({index:left,rowHeight:rowHeight,columnWidth:columnWidth,instanceProps:instanceProps.current}),selectionBounds.width=getColumnOffset({index:right-1,rowHeight:rowHeight,columnWidth:columnWidth,instanceProps:instanceProps.current})-selectionBounds.x+getColumnWidth(right,instanceProps.current));var estimatedTotalHeight=function getEstimatedTotalHeight(rowCount,estimatedRowHeight,instanceProps){var totalSizeOfMeasuredRows=0,lastMeasuredRowIndex=instanceProps.lastMeasuredRowIndex,rowMetadataMap=instanceProps.rowMetadataMap;if(lastMeasuredRowIndex>=rowCount&&(lastMeasuredRowIndex=rowCount-1),lastMeasuredRowIndex>=0){var itemMetadata=rowMetadataMap[lastMeasuredRowIndex];totalSizeOfMeasuredRows=itemMetadata.offset+itemMetadata.size}return totalSizeOfMeasuredRows+(rowCount-lastMeasuredRowIndex-1)*estimatedRowHeight}(rowCount,instanceProps.current.estimatedRowHeight,instanceProps.current),estimatedTotalWidth=function getEstimatedTotalWidth(columnCount,estimatedColumnWidth,instanceProps){var totalSizeOfMeasuredRows=0,lastMeasuredColumnIndex=instanceProps.lastMeasuredColumnIndex,columnMetadataMap=instanceProps.columnMetadataMap;if(lastMeasuredColumnIndex>=columnCount&&(lastMeasuredColumnIndex=columnCount-1),lastMeasuredColumnIndex>=0){var itemMetadata=columnMetadataMap[lastMeasuredColumnIndex];totalSizeOfMeasuredRows=itemMetadata.offset+itemMetadata.size}return totalSizeOfMeasuredRows+(columnCount-lastMeasuredColumnIndex-1)*estimatedColumnWidth}(columnCount,instanceProps.current.estimatedColumnWidth,instanceProps.current);return react_default.a.createElement("div",{style:{position:"relative",width:containerWidth}},react_default.a.createElement("div",{onWheel:handleWheel,tabIndex:-1},react_default.a.createElement(ReactKonva.Stage,{width:containerWidth,height:containerHeight,ref:stageRef},react_default.a.createElement(ReactKonva.Layer,{clearBeforeDraw:!1},react_default.a.createElement(ReactKonva.Group,{offsetY:scrollTop,offsetX:scrollLeft},items)),react_default.a.createElement(ReactKonva.FastLayer,{listening:!1,offsetY:scrollTop,offsetX:scrollLeft},react_default.a.createElement(ReactKonva.Rect,{stroke:selectionBorderColor,x:selectionBounds.x,y:selectionBounds.y,width:selectionBounds.width,height:selectionBounds.height,fill:selectionBackgroundColor})))),showScrollbar?react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",{style:{height:containerHeight,overflow:"scroll",position:"absolute",right:0,top:0,width:scrollbarSize},onScroll:handleScroll,ref:verticalScrollRef},react_default.a.createElement("div",{style:{position:"absolute",height:estimatedTotalHeight,width:1}})),react_default.a.createElement("div",{style:{overflow:"scroll",position:"absolute",bottom:0,left:0,width:containerWidth,height:scrollbarSize},onScroll:handleScrollLeft,ref:horizontalScrollRef},react_default.a.createElement("div",{style:{position:"absolute",width:estimatedTotalWidth,height:1}}))):null)}));Grid.defaultProps={width:800,height:800,rowCount:200,columnCount:200,rowHeight:function rowHeight(){return 20},columnWidth:function columnWidth(){return 100},scrollbarSize:17,showScrollbar:!0,selectionBackgroundColor:"rgba(66, 133, 244, 0.3)",selectionBorderColor:"rgba(66, 133, 244, 1)",selectionArea:{top:0,bottom:0,left:0,right:0}};var src_Grid=Grid;try{Grid.displayName="Grid",Grid.__docgenInfo={description:"Grid component\n@param props",displayName:"Grid",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"src/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}__webpack_exports__.default={title:"Grid",component:src_Grid};var Grid_stories_BaseGrid=function BaseGrid(){var Cell=function Cell(_ref){var rowIndex=_ref.rowIndex,columnIndex=_ref.columnIndex,x=_ref.x,y=_ref.y,width=_ref.width,height=_ref.height,text="".concat(rowIndex,"x").concat(columnIndex);return react_default.a.createElement(ReactKonva.Group,null,react_default.a.createElement(ReactKonva.Rect,{x:x,y:y,height:height,width:width,fill:"white",stroke:"grey",strokeWidth:.5}),react_default.a.createElement(ReactKonva.Text,{x:x,y:y,height:height,width:width,text:text,verticalAlign:"middle",align:"center"}))};return react_default.a.createElement(src_Grid,{columnCount:200,rowCount:200,columnWidth:function columnWidth(index){return 100},rowHeight:function rowHeight(index){return 20}},Cell)},Grid_stories_BaseGridWithSelection=function BaseGridWithSelection(){var Cell=function Cell(_ref2){var rowIndex=_ref2.rowIndex,columnIndex=_ref2.columnIndex,x=_ref2.x,y=_ref2.y,width=_ref2.width,height=_ref2.height,text="".concat(rowIndex,"x").concat(columnIndex);return react_default.a.createElement(ReactKonva.Group,null,react_default.a.createElement(ReactKonva.Rect,{x:x,y:y,height:height,width:width,fill:"white",stroke:"grey",strokeWidth:.5}),react_default.a.createElement(ReactKonva.Text,{x:x,y:y,height:height,width:width,text:text,verticalAlign:"middle",align:"center"}))};return react_default.a.createElement(src_Grid,{selectionArea:{top:2,right:6,left:2,bottom:6},columnCount:200,rowCount:200,columnWidth:function columnWidth(index){return 100},rowHeight:function rowHeight(index){return 20}},Cell)},Grid_stories_VariableSizeGrid=function VariableSizeGrid(){var Cell=function Cell(_ref3){var rowIndex=_ref3.rowIndex,columnIndex=_ref3.columnIndex,x=_ref3.x,y=_ref3.y,width=_ref3.width,height=_ref3.height,text="".concat(rowIndex,"x").concat(columnIndex);return react_default.a.createElement(ReactKonva.Group,null,react_default.a.createElement(ReactKonva.Rect,{x:x,y:y,height:height,width:width,fill:"white",stroke:"grey",strokeWidth:.5}),react_default.a.createElement(ReactKonva.Text,{x:x,y:y,height:height,width:width,text:text,verticalAlign:"middle",align:"center"}))};return react_default.a.createElement(src_Grid,{columnCount:200,rowCount:200,columnWidth:function columnWidth(index){return index%3==0?200:100},rowHeight:function rowHeight(index){return index%2==0?40:20}},Cell)},Grid_stories_LargeGrid=function LargeGrid(){var Cell=function Cell(_ref4){var rowIndex=_ref4.rowIndex,columnIndex=_ref4.columnIndex,x=_ref4.x,y=_ref4.y,width=_ref4.width,height=_ref4.height,text="".concat(rowIndex,"x").concat(columnIndex),fill=columnIndex%2==0?rowIndex%2==0?"#f8f8f0":"white":rowIndex%2?"#f8f8f0":"white";return react_default.a.createElement(ReactKonva.Group,null,react_default.a.createElement(ReactKonva.Rect,{x:x,y:y,height:height,width:width,fill:fill,stroke:"grey",strokeWidth:.5}),react_default.a.createElement(ReactKonva.Text,{x:x,y:y,height:height,width:width,text:text,verticalAlign:"middle",align:"center"}))};return react_default.a.createElement(src_Grid,{columnCount:1e6,rowCount:1e6,columnWidth:function columnWidth(index){return index%3==0?200:100},rowHeight:function rowHeight(index){return index%2==0?40:20}},Cell)};Grid_stories_LargeGrid.story={name:"1,000,000 rows and cols"};var Grid_stories_TableGrid=function TableGrid(){var gridRef=Object(react.useRef)(),Cell=function Cell(_ref5){var rowIndex=_ref5.rowIndex,columnIndex=_ref5.columnIndex,x=_ref5.x,y=_ref5.y,width=_ref5.width,height=_ref5.height,header=_ref5.header,text=header?"Header ".concat(columnIndex):"".concat(rowIndex,"x").concat(columnIndex),fill=header?"#eee":"white";return react_default.a.createElement(ReactKonva.Group,null,react_default.a.createElement(ReactKonva.Rect,{x:x,y:y,height:height,width:width,fill:fill,stroke:"grey",strokeWidth:.5}),react_default.a.createElement(ReactKonva.Text,{x:x,y:y,height:height,width:width,text:text,fontStyle:header?"bold":"normal",verticalAlign:"middle",align:"center"}))};return react_default.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},react_default.a.createElement(src_Grid,{columnCount:1e5,height:40,rowCount:1,ref:gridRef,width:1200,columnWidth:function columnWidth(index){return index%3==0?200:100},rowHeight:function rowHeight(index){return index%2==0?40:20},showScrollbar:!1},(function(props){return react_default.a.createElement(Cell,_extends({},props,{header:!0}))})),react_default.a.createElement(src_Grid,{columnCount:1e5,rowCount:1e5,height:600,width:1200,columnWidth:function columnWidth(index){return index%3==0?200:100},rowHeight:function rowHeight(index){return index%2==0?40:20},onScroll:function onScroll(_ref6){var scrollLeft=_ref6.scrollLeft;gridRef.current.scrollTo({scrollLeft:scrollLeft})}},Cell))}}},[[287,1,2]]]);
//# sourceMappingURL=main.e01b5ed62b59233db38b.bundle.js.map