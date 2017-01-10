---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGUSER2 

 property | value 
--- | --- 
 label | MAGGUSER2
 tag | USERINF2
 routine | [MAGGTU3](http://code.osehra.org/dox/Routine_MAGGTU3_source.html)
 return value type | ARRAY
 description | Returns Array of info about user, and site settings.the user's security keys for later applications.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGGWRKID | LITERAL | 240 | true | Workstation ID and Location from MAG.INI file section [SYS_SiteParam]. | 