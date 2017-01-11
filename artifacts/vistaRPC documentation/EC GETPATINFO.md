---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETPATINFO 

 property | value 
--- | --- 
 label | EC GETPATINFO
 tag | PATINF
 routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
 return value type | GLOBAL ARRAY
 description | This is a general purpose call that provides segments of the patient data from the Event Capture Patient File #721.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LITERAL |  | true | The input variable ECARY contains the following values:-    ECIEN - Event Capture Patient ien (#2)    ECTYP - Data type to return            Types are:-            DXS - primary and secondary diagnosis codes            MOD - modifiers            CLASS - classification data            OTH - other type data. | 




 ###### Generated on January 11th 2017, 6:39:42 am