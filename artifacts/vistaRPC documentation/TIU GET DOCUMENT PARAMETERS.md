---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENT PARAMETERS 

 property | value 
--- | --- 
 label | TIU GET DOCUMENT PARAMETERS
 tag | DOCPARM
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | ARRAY
 description | This Remote Procedure returns the parameters by which a given documentor document type is to be processed.


### Method description

 property | value 
--- | --- 
 Method comment | Get document parameters for GUI

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the record number of the document in the TIU DOCUMENT FILE(#8925). | 
| TIUTYP | LITERAL |  | true | This is the record number of the Document Definition in the TIU DOCUMENTDEFINITION FILE (#8925.1).  e.g., TIUTYP=3 corresponds to the ClassProgress Notes, etc. | 




 ###### Generated on January 11th 2017, 6:39:42 am