---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS DELETE WITNESS 

 property | value 
--- | --- 
 label | OOPS DELETE WITNESS
 tag | DELWITN
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | ARRAY
 description | This broker call will delete witness information from the \CA1W\ node in file 2260 based on the IEN and sub file id passed in.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL |  | true | This required input parameter must contain the IEN and record number of thesubfile for witness information to be deleted. The input format is IEN^SUB. | 
| vs:Input_Parameter-8994_02 | OOPS CHANGE CAS |  |  |  |  | 