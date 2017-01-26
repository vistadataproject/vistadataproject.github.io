---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV CONVERT DATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV CONVERT DATE{:/}
 tag | {::nomarkdown}GETDT{:/}
 routine | [GMVGETQ](http://code.osehra.org/dox/Routine_GMVGETQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call converts a user-supplied date/time into VAFileMan's internal and external date format. This remote procedure call is documented in Integration Agreement 4353.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMRDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GMRDATE is the user-supplied date/time text.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETDT^[GMVGETQ](http://code.osehra.org/dox/Routine_GMVGETQ_source.html)
 Method comment | GMV CONVERT DATE [RPC entry point]
 Input parameters | {::nomarkdown}GMRDATE{:/}
 First comment | {::nomarkdown}<pre>INPUT VARIABLE:<br/>GMRDATE - DATE/TIME FROM EDIT.TEXT ENTERED BY USER<br/>OUTPUT VARIABLE:<br/>RESULT - CONTAINS INTERNAL AND EXTERNAL DATE/TIME</pre>{:/}
 Code | {::nomarkdown}  N GDATE D DT^DILF("ETS",GMRDATE,.GDATE)<br> I $G(GDATE)'>0 S RESULT="" Q<br> I $G(GDATE)>$$NOW^XLFDT S RESULT="" Q<br> S RESULT=$G(GDATE)_"^"_$G(GDATE(0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}