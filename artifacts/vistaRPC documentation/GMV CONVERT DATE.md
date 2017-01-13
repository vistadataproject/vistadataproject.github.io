---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV CONVERT DATE 

 property | value 
--- | --- 
 label | {::nomarkdown}GMV CONVERT DATE{:/}
 tag | {::nomarkdown}GETDT{:/}
 routine | [GMVGETQ](http://code.osehra.org/dox/Routine_GMVGETQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call converts a user-supplied date/time into VAFileMan's internal and external date format. This remote procedure call is documented in Integration Agreement 4353.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GMV CONVERT DATE [RPC entry point]
 Leading comment lines | {::nomarkdown}INPUT VARIABLE:<br/>GMRDATE - DATE/TIME FROM EDIT.TEXT ENTERED BY USER<br/>OUTPUT VARIABLE:<br/>RESULT - CONTAINS INTERNAL AND EXTERNAL DATE/TIME{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMRDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GMRDATE is the user-supplied date/time text.{:/} | 




 Generated on January 13th 2017, 6:44:47 am