---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VEJDWPB GET VISITS_APPOINTMENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VEJDWPB GET VISITS_APPOINTMENT{:/}
 tag | {::nomarkdown}VSIT{:/}
 routine | [VEJDVST2](http://code.osehra.org/dox/Routine_VEJDVST2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will call the VEJDWPB GET SCHED APPTS rpc to get the scheduledappointments for the user inputted date range. It then loops throughs the Visit file (#9000010) \AA\ cross reference tofind all visits. It then uses the uses the IN5^VADPT to get the current admission.It then uses the uses the IN5^VADPT to get the current admission.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} DATA - required - DFN ^ BEG ^ END ^ ZLOC ^ FLG ^ MODS ^ CAT  DFN - required - pointer to file 2  BEG - optional - starting Fileman date/time  END - optional - ending fileman date/time - default = DT+.5 ALOC - optional - clinic, either name or file 44 ien retained for                   backwards compatibility  FLG - optional - type of appts to return        0 - active/kept appts (past) - default        1 - future appts only        2 - both past and future appts MODS - optional - string of codes determine which encounters to return                   default value = ASV                   MODS[\A\ - return current admission regardless of date                   MODS[\S\ - return schedule appts                   MODS[\V\ - return visit file entries (#9000010)  CAT - optional - default value is 0 screen visits by service category        1 - return all visits        0 or <null> - do not return historical type visits        I $G(CAT) then do not screen visit entries by service category        I '$G(CAT) then screen out historical visits (E,D,X,N,C){:/} | 
| {::nomarkdown}VECLIN{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} VECLIN is a local array which contains a list of clinics to be used to screen appointment list.  Only those appointments in these clinics will be returned.    VECLIN - optional - passed by reference    VECLIN(#) = clinic name or ien{:/} | 
| {::nomarkdown}SCODE{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} This is a list of 3-digit stop codes used to screen appointments returned.  Only those clinic locations whose stop code is in this list will be returned.     SCODE - optional - passed by reference    SCODE(#) = 3-digit stop code (lookup on C xref){:/} | 
| {::nomarkdown}VEDIV{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} This is a list of divisions to be used to screen appointments.  Only appointments in clinics for divisions in this list will be returned.      VEDIV - optional - passed by reference     VEDIV(#) = division name or ien{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}