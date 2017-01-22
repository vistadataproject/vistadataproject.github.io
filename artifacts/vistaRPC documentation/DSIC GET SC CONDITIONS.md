---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC GET SC CONDITIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC GET SC CONDITIONS{:/}
 tag | {::nomarkdown}SCCND{:/}
 routine | [DSICVT1](http://code.osehra.org/dox/Routine_DSICVT1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return a string indicating whether the service conditionquestions need to be asked:   Agent Orange exposure   Environmental Contaminant exposure   Ionizing Radiation Exposure   Service Connected   Military Sexual Trauma   Head & Neck Cancer   Combat Veteran   Proj 112/SHAD If VST is not passed, then APPT must be the scheduling appointmentdate/time and LOC must be the the hospital location data If VST is passed, then APPT and LOC are optional.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown} DATA = DFN ^ APPT ^ LOC ^ VST where  DFN = required - pointer to the Patient file (2) APPT = optional/required - FM date/time for the visit or the scheduled        appointment.  If VST passed, then APPT is optional  LOC = required - either the name of the location (file 44) or the        pointer to file 44  VST = optional/required - pointer to Visit file (#9000010)        If APPT passed, then VST is optional   You must send either APPT or VST or both.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}