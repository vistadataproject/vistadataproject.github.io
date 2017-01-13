---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SET DETAIL LOCATION 

 property | value 
--- | --- 
 label | {::nomarkdown}OOPS SET DETAIL LOCATION{:/}
 tag | {::nomarkdown}SETDLOC{:/}
 routine | [OOPSGUI8](http://code.osehra.org/dox/Routine_OOPSGUI8_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call files sub record level data in the Detail Location sub recordin the ASISTS SETTING OF INJURY File (#2261.4).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains a list of detail locations for a specificlocation and station (from the Site Parameter file).{:/} | 




 Generated on January 13th 2017, 5:52:13 am