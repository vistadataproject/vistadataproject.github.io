---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS KAAJEE LOGOUT 

 property | value 
--- | --- 
 label | XUS KAAJEE LOGOUT
 tag | SIGNOFF
 routine | [XUSKAAJ](http://code.osehra.org/dox/Routine_XUSKAAJ_source.html)
 return value type | SINGLE VALUE
 description | This RPC calls the LOUT^XUSCLEAN tag to mark a KAAJEE-signed-on user'sentry in the sign-on log as signed off.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SIGNON-LOG-DA | LITERAL | 1 | true | The DA (IEN) of the user's signon log entry. | 