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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARM1 | LITERAL | 30 | true |  | 
| DATA | LIST | 40 | true | This parameter contains a list of detail locations for a specificlocation and station (from the Site Parameter file). | 




 ###### Generated on January 11th 2017, 6:39:43 am