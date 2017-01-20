---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DGRR GET LOOKUP TYPE LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DGRR GET LOOKUP TYPE LIST{:/}
 tag | {::nomarkdown}GETLIST{:/}
 routine | [DGRRLU3](http://code.osehra.org/dox/Routine_DGRRLU3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns an XML document containing a list of wards or a list ofclinics (depending on what was requested){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PARAM(\TYPE\)=\ward\ returns a list of wardsPARAM(\TYPE\)=\clinic\ returns a list of clinicsPARAM(\TYPE\)=\provider\ returns a list of providersPARAM(\VALUE\)=Beginning value or null to start at the beginning               or end of the file.PARAM(\MAXNUM\)=Number of entries to be returned.  Defaults to                traversing forward. If MAXNUM contains a negative                number, traverses through the file backwards.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}