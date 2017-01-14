---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS KAAJEE GET USER INFO 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS KAAJEE GET USER INFO{:/}
 tag | {::nomarkdown}USERINFO{:/}
 routine | [XUSKAAJ](http://code.osehra.org/dox/Routine_XUSKAAJ_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a variety of information needed for the KAAJEE logon.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLIENT-IP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IP address of the client workstation, used for logging (signon log)and IP blocking (failed access attempts).{:/} | 
| {::nomarkdown}SERVER-NM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Identifying name for the calling application or server,used for logging (signon log).{:/} | 




 Generated on January 13th 2017, 7:15:28 am