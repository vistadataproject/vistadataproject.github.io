---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SET RECORD LOCK 

 property | value 
--- | --- 
 label | {::nomarkdown}OOPS SET RECORD LOCK{:/}
 tag | {::nomarkdown}SETLCK{:/}
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This broker call attempt to lock the record and if not successful, returns a message indicating that the record is in use by another user.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ASISTS Internal Record Number that will be used to lock the record.{:/} | 




 Generated on January 13th 2017, 6:15:57 am