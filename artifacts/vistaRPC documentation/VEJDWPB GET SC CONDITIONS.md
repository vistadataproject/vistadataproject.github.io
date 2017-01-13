---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VEJDWPB GET SC CONDITIONS 

 property | value 
--- | --- 
 label | {::nomarkdown}VEJDWPB GET SC CONDITIONS{:/}
 tag | {::nomarkdown}SCCOND{:/}
 routine | [VEJDVST](http://code.osehra.org/dox/Routine_VEJDVST_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return a string indicating whether the service conditionquestions need to be asked:   Agent Orange exposure   Environmental Contaminant exposure   Service Connected   Military Sexual Trauma   Head & Neck Cancer If VST is not passed, then APPT must be the scheduling appointmentdate/time and LOC must be the the hospital location data If VST is passed, then APPT and LOC are optional.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown} DATA = DFN ^ APPT ^ LOC ^ VST where  DFN = required - pointer to the Patient file (2) APPT = optional/required - FM date/time for the visit or the scheduled        appointment.  If VST passed, then APPT is optional  LOC = required - either the name of the location (file 44) or the        pointer to file 44  VST = optional/required - pointer to Visit file (#9000010)        If APPT passed, then VST is optional   You must send either APPT or VST or both.{:/} | 




 Generated on January 13th 2017, 6:44:47 am