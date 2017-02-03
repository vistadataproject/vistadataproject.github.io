---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV ACTIVE USER PROVIDER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV ACTIVE USER PROVIDER{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list of active users matching the lookup value.  If a matching user is not active, but has the XUORES security key, then they are valid providers and will also be returned by this call.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The lookup value entered by the user to find matches against the NEW USER file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}