---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIC GET SCHED APPTS 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC GET SCHED APPTS{:/}
 tag | {::nomarkdown}APPT{:/}
 routine | [DSICVT0](http://code.osehra.org/dox/Routine_DSICVT0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will invoke SDA^VADPT.  It returns those appointments which were keptand all open future appointments depending upon the date range.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}90{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA = DFN ^ BEG ^ END ^ ALOC ^ FLG where  DFN = required - pointer to patient file (#2) BEG = optional - FM date/time - return all scheduled appointments       greater than BEG END = optional - FM date/time - return all scheduled appointments       up to ENDALOC = optional - name of location (file 44) or pointer to file 44       If present, then only appointments for that clinic returned FLG = optional       0 - return all kept appts from BEG to today       1 - return future appts only       2 - return appts from 0 & 1 Date range takes precedence over FLG.  So if you send BEG=DT-1,FLG=1 youwill get no appointments since BEG not greater than NOW{:/} | 
| {::nomarkdown}SCR{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SCR - optional - added 7/3/2002 - sgm      passed by reference      format:  SCR(subscript) = code ^ value   where               code = C for hospital location #44                      D for medical center division #40.8                      S for 3-digit stop code from file 40.7 (not ien)               value = for codes C,D - any unique lookup value or ien                       for code S - 3-digit stop code (not ien to 40.7){:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}