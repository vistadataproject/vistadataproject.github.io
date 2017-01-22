---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC PX GET SELECTED VISITS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC PX GET SELECTED VISITS{:/}
 tag | {::nomarkdown}SEL{:/}
 routine | [DSICPX3](http://code.osehra.org/dox/Routine_DSICPX3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will return information on selected visits for a patient based upon the screening factors.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Setup up Parm.Mult['\sub\'] := value   or DATA(SUB)=value     sub     description  --------  ------------------------------------------------  DFN       pointer to the PATIENT file (#2)  SDT       in external format or FM format  EDT       in external format or FM format  LOC       pointer to Hospital Location (#44)  ENCTYPE   string of encounter types wanted set of codes from              ^DD(9000010,15003)  NENCTYPE  string of encounter types not wanted set of codes from              ^DD(9000010,15003)  SERVCAT   string of service categories to include set of codes from              ^DD(9000010,.07)  NSERVCAT  string of service categories not to include set of codes from              ^DD(9000010,.07)  MAX       maximum number of entries to return starting with end date and              going backwards{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}