---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU IDENTIFY SURGERY CLASS 

 property | value 
--- | --- 
 label | TIU IDENTIFY SURGERY CLASS
 tag | SURGCLAS
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | SINGLE VALUE
 description | This RPC returns the record number of the class identified by the CLNAMEparameter in the TIU DOCUMENT DEFINITION file (#8925.1).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CLNAME | LITERAL |  | true | This is the name (ASCII LITERAL) of the Class for which the callingapplication needs an IEN. | 