---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS KAAJEE GET USER VIA PROXY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS KAAJEE GET USER VIA PROXY{:/}
 tag | {::nomarkdown}USERINFO{:/}
 routine | [XUSKAAJ1](http://code.osehra.org/dox/Routine_XUSKAAJ1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a variety of information needed for KAAJEE logon based on the ccow token{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLIENT-IP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IP address of the client workstation used for logging (signon log) and IP blocking (failed access attempts).  Also, this IP address is used to validate ccow token submitted.{:/} | 
| {::nomarkdown}SERVER-NM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Identifying name for the calling application or server used for logging (signon log){:/} | 
| {::nomarkdown}CCOWTOK{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Value of ccow token passed.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}