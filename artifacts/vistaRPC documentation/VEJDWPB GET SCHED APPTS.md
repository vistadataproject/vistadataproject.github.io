---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VEJDWPB GET SCHED APPTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VEJDWPB GET SCHED APPTS{:/}
 tag | {::nomarkdown}APPT{:/}
 routine | [VEJDVST1](http://code.osehra.org/dox/Routine_VEJDVST1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will invoke SDA^VADPT.  It returns those appointments which were keptand all open future appointments depending upon the date range.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}90{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA = DFN ^ BEG ^ END ^ ALOC ^ FLG where  DFN = required - pointer to patient file (#2) BEG = optional - FM date/time - return all scheduled appointments       greater than BEG END = optional - FM date/time - return all scheduled appointments       up to ENDALOC = optional - name of location (file 44) or pointer to file 44       If present, then only appointments for that clinic returned FLG = optional       0 - return all kept appts from BEG to today       1 - return future appts only       2 - return appts from 0 & 1 Date range takes precedence over FLG.  So if you send BEG=DT-1,FLG=1 youwill get no appointments since BEG not greater than NOW{:/} | 
| {::nomarkdown}VECLIN{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}VECLIN is a local array which contains a list of clinics to be used to screen appointment list.  Only those appointments in these clinics will be returned.   VECLIN - optional - passed by reference   VECLIN(#) = clinic name or ien{:/} | 
| {::nomarkdown}SCODE{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of 3-digit stop codes used to screen appointments returned.  Only those clinic locations whose stop code is in this list will be returned.    SCODE - optional - passed by reference   SCODE(#) = 3-digit stop code (lookup on C xref){:/} | 
| {::nomarkdown}VEDIV{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of divisions to be used to screen appointments.  Only appointments in clinics for divisions in this list will be returned.     VEDIV - optional - passed by reference    VEDIV(#) = division name or ien{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}