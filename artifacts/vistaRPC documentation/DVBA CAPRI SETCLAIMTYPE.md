---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBA CAPRI SETCLAIMTYPE 

 property | value 
--- | --- 
 label | {::nomarkdown}DVBA CAPRI SETCLAIMTYPE{:/}
 tag | {::nomarkdown}SETCT{:/}
 routine | [DVBACPR1](http://code.osehra.org/dox/Routine_DVBACPR1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns the status of Claim Types passed to be set to a valid 2507 Request{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REQIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the valid 2507 Request IEN{:/} | 
| {::nomarkdown}ARRAYCT{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of Claim Types to be set to the valid 2507 Request{:/} | 




 Generated on January 13th 2017, 6:24:32 am