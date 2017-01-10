---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS WITNESS DELETE 

 property | value 
--- | --- 
 label | OOPS WITNESS DELETE
 tag | DELWITN
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | ARRAY
 description | The broker call will remove witness information (stored in node \CA1W\) fromthe 2260 file.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL |  | true | The INPUT parm will contain the IEN of the case in the 2260 file, and thewitness number in the format IEN^WITNESS NUMBER. The witness number is the subfield indentification as such... ^OOPS(2260,170,\CA1W\,3,0)  3 BEING THE WITNESS NUMBER. | 