---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 CT PRESETS GET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 CT PRESETS GET{:/}
 tag | {::nomarkdown}GETCTP{:/}
 routine | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the site specific CT Presets{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown} DATA is a set of Flags to determine which set of Site CT Presets to return. Client Versions before Patch 72 use Presets from the CT PRESETS Field Client Versions Patch 72 and later use Presets from the CT PRESETS 2 Field in the Imaging Site Parameters File.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}