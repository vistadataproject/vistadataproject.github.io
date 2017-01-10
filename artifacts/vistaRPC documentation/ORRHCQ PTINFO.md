---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCQ PTINFO 

 property | value 
--- | --- 
 label | ORRHCQ PTINFO
 tag | PTINFO
 routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
 return value type | SINGLE VALUE
 description | Returns patient identifying information to display in the bar above thedetailed display.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IDentifier | LITERAL |  | true | This is the identifier for the order or document.Examples:  ORD:342132;1  or DOC:23423 | 