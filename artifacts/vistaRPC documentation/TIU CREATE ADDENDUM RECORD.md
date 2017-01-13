---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU CREATE ADDENDUM RECORD 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU CREATE ADDENDUM RECORD{:/}
 tag | {::nomarkdown}MAKEADD{:/}
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure allows the creation of addenda to TIU Documents.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Create addendum

 Leading comment lines | {::nomarkdown}For backward compatibility
Use MAKEADD^TIUSRVP2 now, please{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the parent document in file 8925.{:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a local input array containing the data to be filed for theaddendum record, formatted as described for the TIU UPDATE RECORD RPC.{:/} | 




 Generated on January 13th 2017, 6:15:57 am