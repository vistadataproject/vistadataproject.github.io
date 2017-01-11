---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCQ SUBDTA 

 property | value 
--- | --- 
 label | ORRHCQ SUBDTA
 tag | SUBDTA
 routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
 return value type | ARRAY
 description | Returns name-value pairs that represent columns for a subset of records.The list view in the GUI posts an event for which records it needs todisplay.  This call obtains the data for those records.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FIRST | LITERAL |  | true | The first record that has been requested by the listview control. | 
| LAST | LITERAL |  | true | The last record number that has been requested by the listview control. | 