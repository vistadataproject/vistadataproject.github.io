---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DDR DELETE ENTRY 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DDR DELETE ENTRY{:/}
 tag | {::nomarkdown}DIKC{:/}
 routine | [DDR1](http://code.osehra.org/dox/Routine_DDR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This function deletes an entry in a FileMan file using ^DIK.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMETERS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This array contains the following parameters necessary to call ^DIK.   \ROOT\ global root of file or subfile   \IEN\  internal entry number of record to be deleted in IENS format{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}