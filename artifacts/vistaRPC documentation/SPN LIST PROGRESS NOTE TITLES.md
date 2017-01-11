---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN LIST PROGRESS NOTE TITLES 

 property | value 
--- | --- 
 label | SPN LIST PROGRESS NOTE TITLES
 tag | LIST
 routine | [SPNRPC7](http://code.osehra.org/dox/Routine_SPNRPC7_source.html)
 return value type | ARRAY
 description | This RPC lists Progress Note Titles eligible for writing Progress Notes under Document Class \SCI OUTCOMES\. Parameter values:         Document Class = Name of entry in TIU DOCUMENT DEFINITION file (#8925.1).  This name must be an entry of type \DOCUMENT CLASS\.  IMPORTANT: typically, this parameter should be \SCI OUTCOMES\ (without the quotes) for the re-hosted SCI & D Outcomes project. Tested at the Bay Pines FO account using Document Class = ADDICTION SEVERITY INDEX  (again, typically this would be SCI OUTCOMES).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLASSNAM | LITERAL |  |  | Is the Document class name in file TIU DOCUMENT DEFINITION. | 




Generated on January 11th 2017, 6:34:23 am