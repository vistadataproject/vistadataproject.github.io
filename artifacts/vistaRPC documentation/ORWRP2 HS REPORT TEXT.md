---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRP2 HS REPORT TEXT 

 property | value 
--- | --- 
 label | ORWRP2 HS REPORT TEXT
 tag | REPORT
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC is used to build the ADHOC Health Summary from an array ofpre-selected health summary components.


### Method description

 property | value 
--- | --- 
 Method comment | Build Report from array of Components passed in COMPS
 Leading comment lines | RPC => ORWRP2 HS REPORT TEXT,ORCOMPS(i)=array of subcomponents chosen, value is pointer at ^GMT(142,DA(1),1,DA)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| COMPS | LIST |  | true | The input array is defined as:COMPS(i)=array of subcomponents chosen, value is pointer at^GMT(142,DA(1),1,DA)Additional pieces may be present for components that require additionalparameters such as Headers, Time and Occurrance limits, and selected fileentries, such as selected lab tests. COMPS(i)=segment^OccuranceLimit^TimeLimit^Header^segment^file^ifn^zerothnode of file | 




Generated on January 11th 2017, 6:34:23 am