---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SCRP QUERY CHECK NAME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SCRP QUERY CHECK NAME{:/}
 tag | {::nomarkdown}NAME{:/}
 routine | [SCRPBK2](http://code.osehra.org/dox/Routine_SCRPBK2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC checks to see if the user already has a querywith the name being passed in as part of the RPC.If there is already a query with the same name, the RPCpasses back the internal entry number of the RPC, otherwisethe RPC passes back a 0.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}QUERY NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the query that needs to be checked for existence.{:/} | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of user that the query namewill be assoicated with, usually DUZ.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}