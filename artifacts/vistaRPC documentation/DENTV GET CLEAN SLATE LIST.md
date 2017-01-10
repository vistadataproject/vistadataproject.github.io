---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV GET CLEAN SLATE LIST 

 property | value 
--- | --- 
 label | DENTV GET CLEAN SLATE LIST
 tag | GETCSL
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | ARRAY
 description | Returns a list of all clean slates applied to a patient.   Return example: RETURN(1)=\1^Dates found\                   RETURN(2)=3100101.120345   OR              RETURN(1)=\-1^No clean slate present\

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DPAT | LITERAL |  | true | The patient IEN. | 