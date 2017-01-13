---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC GET VISITS_APPOINTMENT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC GET VISITS_APPOINTMENT{:/}
 tag | {::nomarkdown}VSIT{:/}
 routine | [DSICVT0](http://code.osehra.org/dox/Routine_DSICVT0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will call the DSIC GET SCHED APPTS rpc to get the scheduledappointments for the user inputted date range.  It uses SELECTED^VSIT to find all visits.  It uses IN5^VADPT to get the current admission.  It will also get historical admission data, but manipulate the hospital location pointer values to the Visit LOCATION (#9999999.06) file,that points to the INSTITUTION (#4) file.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} DATA - required - DFN ^ BEG ^ END ^ ZLOC ^ FLG ^ MODS ^ CAT  DFN - required - pointer to file 2  BEG - optional - starting Fileman date/time  END - optional - ending fileman date/time - default = DT+.5 ZLOC - optional - clinic, either name or file 44 ien retained for                   backwards compatibility  FLG - optional - type of appts to return        0 - active/kept appts (past) - default        1 - future appts only        2 - both past and future appts MODS - optional - string of codes determine which encounters to return                   default value = ASV                   MODS[\A\ - return current admission regardless of date                   MODS[\S\ - return schedule appts                   MODS[\V\ - return visit file entries (#9000010)  CAT - optional - default value is 0 screen visits by service category        1 - return all visits        0 or <null> - do not return historical type visits{:/} | 
| {::nomarkdown}SCR{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SCR - optional - added 7/3/2002 - sgm      passed by reference      format:  SCR(subscript) = code ^ value   where               code = C for hospital location #44                      D for medical center division #40.8                      S for 3-digit stop code from file 40.7 (not ien)               value = for codes C,D - any unique lookup value or ien                       for code S - 3-digit stop code (not ien to 40.7){:/} | 




 Generated on January 13th 2017, 7:15:28 am