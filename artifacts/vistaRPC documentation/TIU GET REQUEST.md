---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET REQUEST 

 property | value 
--- | --- 
 label | TIU GET REQUEST
 tag | GET1405
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | SINGLE VALUE
 description | This Remote Procedure returns the variable pointer to the REQUESTINGPACKAGE REFERENCE (File #8925, Field #1405). This would be the record inthe Requesting Package (e.g., Consult/Request Tracking or Surgery) forwhich the resulting document has been entered in TIU.


### Method description

 property | value 
--- | --- 
 Method comment | Get the Request (field #1405) for a document

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the record number (IEN) of the document in the TIU Document File(#8925). | 