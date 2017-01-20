---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS GET NOI CODE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS GET NOI CODE{:/}
 tag | {::nomarkdown}GETNOI{:/}
 routine | [OOPSGUI8](http://code.osehra.org/dox/Routine_OOPSGUI8_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call returns the listing of NOI codes.  If the claim is a CA1 thenonly codes begining with T are returned, if the claim is a CA2 only codes thatdo not begin with a T are returned.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter will be either CA1 or CA2 to indicate which type of claim isrequesting the NOI codes.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}