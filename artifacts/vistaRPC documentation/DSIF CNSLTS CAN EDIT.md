---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS CAN EDIT 

 property | value 
--- | --- 
 label | DSIF CNSLTS CAN EDIT
 tag | CANEDIT
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | SINGLE VALUE
 description | RPC to determine whether a consult can be edited. Cloned from ORQQCN CAN EDIT

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFCIEN | LITERAL |  | true | This is the Consult IEN to check to determine if it can be edited. | 