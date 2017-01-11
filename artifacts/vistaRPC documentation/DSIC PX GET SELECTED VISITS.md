---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC PX GET SELECTED VISITS 

 property | value 
--- | --- 
 label | DSIC PX GET SELECTED VISITS
 tag | SEL
 routine | [DSICPX3](http://code.osehra.org/dox/Routine_DSICPX3_source.html)
 return value type | GLOBAL ARRAY
 description | This will return information on selected visits for a patient based upon the screening factors.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LIST | 256 | true | Setup up Parm.Mult['\sub\'] := value   or DATA(SUB)=value     sub     description  --------  ------------------------------------------------  DFN       pointer to the PATIENT file (#2)  SDT       in external format or FM format  EDT       in external format or FM format  LOC       pointer to Hospital Location (#44)  ENCTYPE   string of encounter types wanted set of codes from              ^DD(9000010,15003)  NENCTYPE  string of encounter types not wanted set of codes from              ^DD(9000010,15003)  SERVCAT   string of service categories to include set of codes from              ^DD(9000010,.07)  NSERVCAT  string of service categories not to include set of codes from              ^DD(9000010,.07)  MAX       maximum number of entries to return starting with end date and              going backwards | 




 ###### Generated on January 11th 2017, 6:39:43 am