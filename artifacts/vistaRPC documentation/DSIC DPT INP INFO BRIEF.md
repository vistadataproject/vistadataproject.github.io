---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DPT INP INFO BRIEF 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DPT INP INFO BRIEF{:/}
 tag | {::nomarkdown}INQ{:/}
 routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return certain data related to a patient's current admission.  The data returned and the order that it is returned is controlled by the FLAG parameter.  For more detailed description, see routine INQ^DSICDPT{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the PATIENT file.{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}26{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is 3 \^\- piece string of single character codes which dictate what data will be returned and the order that that data is returned for a patient's current admission.  1st ^-piece - flags related to the current patient movement  2nd ^-piece - flags related to the admission movement  3rd ^-piece - flags related to the discharge movement  Default FLAG = \MDWFPpAa^MD^MD\   Flag Code  Description  ---------  -----------------------------------------      M      pointer to movement (#405)      D      external movement date.time      d      internal (Fileman movement date.time)      W      external ward location      P      name of Primary Care Physician      p      DUZ of Primary Care Physician   Following only applicable to current movement      F      pointer to PTF record (#45)      R      external room-bed      A      name of ATTENDING PHYSICIAN      a      DUZ of ATTENDING PHYSICIAN      S      external FACILITY TREATING SPECIALTY (#42.4)      s      internal FACILITY TREATING SPECIALTY (#42.4){:/} | 
| {::nomarkdown}LODGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This boolean flag controls whether or not Lodger movements (admissions) should be included in search.  If LODGE = 1 then return lodger movements.  Else exclude them.  Default value is 0, exclude them.{:/} | 




 Generated on January 13th 2017, 6:24:32 am