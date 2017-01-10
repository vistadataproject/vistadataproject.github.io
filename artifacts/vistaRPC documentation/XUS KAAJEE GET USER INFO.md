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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CLIENT-IP | LITERAL |  | true | IP address of the client workstation, used for logging (signon log)and IP blocking (failed access attempts). | 
| vs:Input_Parameter-8994_02 | SERVER-NM | LITERAL |  | true | Identifying name for the calling application or server,used for logging (signon log). | 