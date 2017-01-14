---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; GMV CLOSEST READING 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}GMV CLOSEST READING{:/}
 tag | {::nomarkdown}CLOSEST{:/}
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call returns the observation date/time and reading of the record closest to the date/time specified for the patient and vitaltype.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A pointer to the Patient (#2) file (i.e., DFN).{:/} | 
| {::nomarkdown}GMVDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date/time to search from. The default is NOW.{:/} | 
| {::nomarkdown}GMVT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The vital type abbreviation as it appears in FILE 120.51, Field 1 (e.g., WT).{:/} | 
| {::nomarkdown}GMVFLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A flag to indicate if the search should look before or after the date/timespecified in the GMVDT value where 1 indicates before, 2 indicates afterand 0 indicates either direction.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CLOSEST^[GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 Method comment | GMV CLOSEST READING [RPC entry point]
 First comment | {::nomarkdown}Get nearest reading to date(/time) provided<br/>Input:  GMVDFN - DFN (required)<br/>GMVDT - FileMan date/time (optional)<br/>Default is NOW<br/>GMVT - Vital Type abbreviation, FILE 120.51, Field 1 (required)<br/>GMVFLAG - Where to look (optional)<br/>0 = either before or after GMVDT  (default)<br/>1 = before GMVDT<br/>2 = after GMVDT<br/>Output: RESULT - piece1^piece2<br/>where piece1 = date/time of reading (FileMan internal format)<br/>piece2 = reading<br/>If no records found piece 1 = -2<br/>and piece 2 = message text                     <br/>If an error was encountered piece1 = -1<br/>and piece2 = error message{:/}
 Input parameters | {::nomarkdown}GMVDFN<br/>GMVDT<br/>GMVT<br/>GMVFLAG{:/}
 Code | ```  N GMVADIFF,GMVADT,GMVAVAL,GMVBDIFF,GMVBDT,GMVBVAL,GMVDATA,GMVTI
 S GMVDFN=+$G(GMVDFN),GMVDT=+$G(GMVDT),GMVT=$G(GMVT),GMVFLAG=+$G(GMVFLAG)
 S GMVFLAG=$S(GMVFLAG=2:2,GMVFLAG=1:1,1:0)
 I 'GMVDFN S RESULT="-1^DFN not defined" Q
 I '$D(^PXRMINDX(120.5,"PI",GMVDFN)) S RESULT="-2^Patient has no Vitals data on file" Q
 I 'GMVDT S GMVDT=$$NOW^XLFDT()
 I GMVT="" S RESULT="-1^Vital Type not defined" Q
 S GMVTI=$$GETIEN^GMVGETVT(GMVT,2)
 I 'GMVTI S RESULT="-1^Vital Type not found" Q
 I '$D(^PXRMINDX(120.5,"PI",GMVDFN,GMVTI)) S RESULT="-2^Patient has no data on file for this type" Q
 S (GMVADT,GMVAVAL,GMVBDT,GMVBVAL,GMVDATA)=""
 I GMVFLAG=0!(GMVFLAG=1) D
 .S GMVDATA=$$FIND(GMVDFN,GMVTI,GMVDT,0,-1)
 .S GMVBDT=$P(GMVDATA,U,1),GMVBVAL=$P(GMVDATA,U,2)
 S GMVDATA=""
 I GMVFLAG=0!(GMVFLAG=2) D
 .S GMVDATA=$$FIND(GMVDFN,GMVTI,GMVDT,0,1)
 .S GMVADT=$P(GMVDATA,U,1),GMVAVAL=$P(GMVDATA,U,2)
 I GMVFLAG=1 D
 .I GMVBDT'>0 S RESULT="-2^Before date not found" Q
 .I GMVBVAL="" S RESULT="-2^Before value not found" Q
 .S RESULT=GMVBDT_U_GMVBVAL
 I GMVFLAG=2 D
 .I GMVADT'>0 S RESULT="-2^After date not found" Q
 .I GMVAVAL="" S RESULT="-2^After value not found" Q
 .S RESULT=GMVADT_U_GMVAVAL
 I GMVFLAG=0 D
 .I GMVADT'>0,GMVBDT'>0 D  Q
 ..S RESULT="-2^No records found"
 .I GMVADT'>0,GMVBDT>0 D  Q
 ..S:GMVBVAL]"" RESULT=GMVBDT_U_GMVBVAL
 ..S:GMVBVAL="" RESULT="-2^No records found"
 .I GMVADT>0,GMVBDT'>0 D  Q
 ..S:GMVAVAL]"" RESULT=GMVADT_U_GMVAVAL
 ..S:GMVAVAL="" RESULT="-2^No records found"
 .I GMVADT>0,GMVBDT>0 D
 ..S GMVBDIFF=+$$FMDIFF^XLFDT(GMVDT,GMVBDT,2)
 ..S GMVADIFF=+$$FMDIFF^XLFDT(GMVADT,GMVDT,2)
 ..I GMVBDIFF<GMVADIFF S RESULT=GMVBDT_U_GMVBVAL
 ..I GMVADIFF<GMVBDIFF S RESULT=GMVADT_U_GMVAVAL
 ..I GMVADIFF=GMVBDIFF S RESULT=GMVADT_U_GMVAVAL```




 Generated on January 14th 2017, 7:26:36 am