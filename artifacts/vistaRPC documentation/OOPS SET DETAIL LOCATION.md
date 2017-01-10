---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SET DETAIL LOCATION 

 property | value 
--- | --- 
 label | OOPS SET DETAIL LOCATION
 tag | SETDLOC
 routine | [OOPSGUI8](http://code.osehra.org/dox/Routine_OOPSGUI8_source.html)
 return value type | ARRAY
 description | This broker call files sub record level data in the Detail Location sub recordin the ASISTS SETTING OF INJURY File (#2261.4).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARM1 | LITERAL | 30 | true |  | 
| vs:Input_Parameter-8994_02 | DATA | LIST | 40 | true | This parameter contains a list of detail locations for a specificlocation and station (from the Site Parameter file). | 