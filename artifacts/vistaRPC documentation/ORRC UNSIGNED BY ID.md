---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORRC UNSIGNED BY ID 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC UNSIGNED BY ID{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORRCSIG](http://code.osehra.org/dox/Routine_ORRCSIG_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns the details of a list of orders and/or documents.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ITEMS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of ID's of each item to return details for, in the formXXX:### where XXX indicates the type of item and ### is the pointer tothe corresponding M file containing the data:    ORU = Orders file #100    DOC = TIU Documents file #8925{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}