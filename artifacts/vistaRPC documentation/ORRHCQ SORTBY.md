---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCQ SORTBY 

 property | value 
--- | --- 
 label | ORRHCQ SORTBY
 tag | SORTBY
 routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
 return value type | SINGLE VALUE
 description | Causes the query results that are in ^TMP(\ORRHCQD\,$J) to be sorted ona particular column.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FNM | LITERAL |  | true | This is the name of the column that should be used as the sort key. | 
| vs:Input_Parameter-8994_02 | FWD | LITERAL |  | true | This is boolean true if the sort should be ascending, false if descending. | 