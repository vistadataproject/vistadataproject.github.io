---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS RELEASE RECORD LOCK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS RELEASE RECORD LOCK{:/}
 tag | {::nomarkdown}CLRLCK{:/}
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This broker call will release the previously locked ASISTS record.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This input parameter contains the ASISTS Internal Record Number that will beused to attempt to unlock a previously locked record.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}