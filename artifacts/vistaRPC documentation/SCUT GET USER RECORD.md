---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SCUT GET USER RECORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SCUT GET USER RECORD{:/}
 tag | {::nomarkdown}GETUSER{:/}
 routine | [SCUTBK3](http://code.osehra.org/dox/Routine_SCUTBK3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns user related data often needed by schedulingmodules. The data returned is used to set instance variablesfor the TScUser object type on the client.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUZ NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of the user.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:13 am</p>{:/}