---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN BUILD PICK LIST ENTRIES 

 property | value 
--- | --- 
 label | SPN BUILD PICK LIST ENTRIES
 tag | COL
 routine | [SPNRPCQ](http://code.osehra.org/dox/Routine_SPNRPCQ_source.html)
 return value type | GLOBAL ARRAY
 description | Supports the use of filters by providing a list of locally valid entries in the site's Vista files for Lab tests, Drug names, and Prosthetic device names.  This local \fetch\ can then be used to supply locally valid records from which to choose when running the SPN FILTER call.  This RPC is necessary because each site's file entries are named and numbered differently.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TYPE | LITERAL |  | true | The value for this parameter must be either CLINIC, PROS, NDC, or LAB. | 