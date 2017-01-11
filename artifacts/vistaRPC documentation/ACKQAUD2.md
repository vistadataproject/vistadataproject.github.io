---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ACKQAUD2 

 property | value 
--- | --- 
 label | ACKQAUD2
 tag | EN
 routine | [ACKQAG02](http://code.osehra.org/dox/Routine_ACKQAG02_source.html)
 return value type | ARRAY
 description | Input the IEN of the 509850.9 file entry as the second parameter.Input the DFN as the third parameter, array by reference as firstreturns a subscripted array of data values for this audiogramdata for the patient. Currently only uses 0 node for information.Used in the Enter/Edit Audiogram Delphi program

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | DFN of patient - IEN from DPT( | 
| IEN | LITERAL |  | true | This is the pointer to the 509850.9 fileUsed in the Audiogram Enter/Edit program | 




Generated on January 11th 2017, 6:34:23 am