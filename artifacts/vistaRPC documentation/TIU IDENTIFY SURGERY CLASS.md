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


### Method description

 property | value 
--- | --- 
 Method comment | RPC to identify class 
 Leading comment lines | CLNAME = "SURGICAL REPORTS" or "PROCEDURE REPORTS (NON-O.R.)"

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLNAME | LITERAL |  | true | This is the name (ASCII LITERAL) of the Class for which the callingapplication needs an IEN. | 




Generated on January 11th 2017, 6:34:23 am