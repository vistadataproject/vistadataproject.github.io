---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS KAAJEE GET USER VIA PROXY 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS KAAJEE GET USER VIA PROXY{:/}
 tag | {::nomarkdown}USERINFO{:/}
 routine | [XUSKAAJ1](http://code.osehra.org/dox/Routine_XUSKAAJ1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a variety of information needed for KAAJEE logon based on the ccow token{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLIENT-IP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IP address of the client workstation used for logging (signon log) and IP blocking (failed access attempts).  Also, this IP address is used to validate ccow token submitted.{:/} | 
| {::nomarkdown}SERVER-NM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Identifying name for the calling application or server used for logging (signon log){:/} | 
| {::nomarkdown}CCOWTOK{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Value of ccow token passed.{:/} | 




 Generated on January 13th 2017, 7:11:27 am