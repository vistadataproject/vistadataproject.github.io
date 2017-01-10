---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR TASK DELETE 

 property | value 
--- | --- 
 label | ROR TASK DELETE
 tag | DELTASK
 routine | [RORRP010](http://code.osehra.org/dox/Routine_RORRP010_source.html)
 return value type | SINGLE VALUE
 description | The ROR TASK DELETE remote procedure completely deletes the task.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TASK | LITERAL |  | true | A valid task number should be assigned to the TASK parameter. | 