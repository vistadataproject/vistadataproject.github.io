---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC TASKS BY ID 

 property | value 
--- | --- 
 label | ORRC TASKS BY ID
 tag | DETAIL
 routine | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
 return value type | ARRAY
 description | This call returns the details of the tasks requested in the list of ID'spassed in.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TASKS | LIST |  | true | This is the list of task identifiers, as TSK:## where ## is the pointerto file #102.3 | 