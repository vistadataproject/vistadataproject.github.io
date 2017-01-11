---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS KAAJEE GET USER VIA PROXY 

 property | value 
--- | --- 
 label | XUS KAAJEE GET USER VIA PROXY
 tag | USERINFO
 routine | [XUSKAAJ1](http://code.osehra.org/dox/Routine_XUSKAAJ1_source.html)
 return value type | ARRAY
 description | Returns a variety of information needed for KAAJEE logon based on the ccow token

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLIENT-IP | LITERAL |  | true | IP address of the client workstation used for logging (signon log) and IP blocking (failed access attempts).  Also, this IP address is used to validate ccow token submitted. | 
| SERVER-NM | LITERAL |  | true | Identifying name for the calling application or server used for logging (signon log) | 
| CCOWTOK | LITERAL |  | true | Value of ccow token passed. | 




 Generated on January 11th 2017, 7:15:04 am