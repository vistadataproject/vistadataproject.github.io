---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC PX GET VISIT FLDS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC PX GET VISIT FLDS{:/}
 tag | {::nomarkdown}ILOOK{:/}
 routine | [DSICPX3](http://code.osehra.org/dox/Routine_DSICPX3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will return the internal and external values for selected fields from the VISIT file (#9000010).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSICD{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DSICD(n) = p1^p2  for n=0,1,2,3,...  where  p1 := \V\ if this is the VISIT ifn, or VISIT field#  p2 := VISIT ifn (if p1=\V\), or format code (if p1=field#)        Format codes:  I:internal  E:external  B:both  DSICD(n) = V^ifn is required{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}