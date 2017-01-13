---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE ACTIVE PROV 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ACTIVE PROV{:/}
 tag | {::nomarkdown}ACTIVPRV{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This calls the PCE API $$ACTIVPRV^PXAPI(provider ien, encounter d/t) tosee if the provider can be stored by PCE.   Returns a 1 if provider is good and 0 if the provider is not active or does not have an active person class.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | get if provider is active or not

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROVIDER IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ENCOUNTER DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:24:32 am