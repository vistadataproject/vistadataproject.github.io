---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBA CAPRI SETCLAIMTYPE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBA CAPRI SETCLAIMTYPE{:/}
 tag | {::nomarkdown}SETCT{:/}
 routine | [DVBACPR1](http://code.osehra.org/dox/Routine_DVBACPR1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns the status of Claim Types passed to be set to a valid 2507 Request{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REQIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the valid 2507 Request IEN{:/} | 
| {::nomarkdown}ARRAYCT{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of Claim Types to be set to the valid 2507 Request{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}