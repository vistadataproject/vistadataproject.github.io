---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS KAAJEE GET USER INFO 

 property | value 
--- | --- 
 label | XUS KAAJEE GET USER INFO
 tag | USERINFO
 routine | [XUSKAAJ](http://code.osehra.org/dox/Routine_XUSKAAJ_source.html)
 return value type | ARRAY
 description | Returns a variety of information needed for the KAAJEE logon.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLIENT-IP | LITERAL |  | true | IP address of the client workstation, used for logging (signon log)and IP blocking (failed access attempts). | 
| SERVER-NM | LITERAL |  | true | Identifying name for the calling application or server,used for logging (signon log). | 