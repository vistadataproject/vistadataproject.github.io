---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS KAAJEE GET CCOW TOKEN 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS KAAJEE GET CCOW TOKEN{:/}
 tag | {::nomarkdown}CCOWIP{:/}
 routine | [XUSKAAJ1](http://code.osehra.org/dox/Routine_XUSKAAJ1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC gets a token to save in the CCOW context to aid in sign-on{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IP-ADDRESS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value represents the IP address of the workstation.  Useful for J2EEapplications that connect to VistA via the application server. If present,this value will be used when associating a CCOW token to the IPaddress of the client workstation{:/} | 




 Generated on January 13th 2017, 6:15:57 am