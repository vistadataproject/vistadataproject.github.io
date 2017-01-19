---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV CLOSEST READING 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV CLOSEST READING{:/}
 tag | {::nomarkdown}CLOSEST{:/}
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call returns the observation date/time and reading of the record closest to the date/time specified for the patient and vitaltype.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A pointer to the Patient (#2) file (i.e., DFN).{:/} | 
| {::nomarkdown}GMVDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date/time to search from. The default is NOW.{:/} | 
| {::nomarkdown}GMVT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The vital type abbreviation as it appears in FILE 120.51, Field 1 (e.g., WT).{:/} | 
| {::nomarkdown}GMVFLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A flag to indicate if the search should look before or after the date/timespecified in the GMVDT value where 1 indicates before, 2 indicates afterand 0 indicates either direction.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CLOSEST^[GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 Method comment | GMV CLOSEST READING [RPC entry point]
 First comment | {::nomarkdown}<pre> Get nearest reading to date(/time) provided<br/>  Input:  GMVDFN - DFN (required)<br/>           GMVDT - FileMan date/time (optional)<br/>                   Default is NOW<br/>            GMVT - Vital Type abbreviation, FILE 120.51, Field 1 (required)<br/>         GMVFLAG - Where to look (optional)<br/>                   0 = either before or after GMVDT  (default)<br/>                   1 = before GMVDT<br/>                   2 = after GMVDT<br/> Output: RESULT - piece1^piece2<br/>          where piece1 = date/time of reading (FileMan internal format)<br/>                piece2 = reading<br/> If no records found piece 1 = -2<br/>                 and piece 2 = message text                     <br/> If an error was encountered piece1 = -1<br/>                         and piece2 = error message<br/></pre>{:/}
 Input parameters | {::nomarkdown}GMVDFN<br>GMVDT<br>GMVT<br>GMVFLAG{:/}
 Code | {::nomarkdown}  N GMVADIFF,GMVADT,GMVAVAL,GMVBDIFF,GMVBDT,GMVBVAL,GMVDATA,GMVTI<br> S GMVDFN=+$G(GMVDFN),GMVDT=+$G(GMVDT),GMVT=$G(GMVT),GMVFLAG=+$G(GMVFLAG)<br> S GMVFLAG=$S(GMVFLAG=2:2,GMVFLAG=1:1,1:0)<br> I 'GMVDFN S RESULT="-1^DFN not defined" Q<br> I '$D(^PXRMINDX(120.5,"PI",GMVDFN)) S RESULT="-2^Patient has no Vitals data on file" Q<br> I 'GMVDT S GMVDT=$$NOW^XLFDT()<br> I GMVT="" S RESULT="-1^Vital Type not defined" Q<br> S GMVTI=$$GETIEN^GMVGETVT(GMVT,2)<br> I 'GMVTI S RESULT="-1^Vital Type not found" Q<br> I '$D(^PXRMINDX(120.5,"PI",GMVDFN,GMVTI)) S RESULT="-2^Patient has no data on file for this type" Q<br> S (GMVADT,GMVAVAL,GMVBDT,GMVBVAL,GMVDATA)=""<br> I GMVFLAG=0!(GMVFLAG=1) D<br> .S GMVDATA=$$FIND(GMVDFN,GMVTI,GMVDT,0,-1)<br> .S GMVBDT=$P(GMVDATA,U,1),GMVBVAL=$P(GMVDATA,U,2)<br> S GMVDATA=""<br> I GMVFLAG=0!(GMVFLAG=2) D<br> .S GMVDATA=$$FIND(GMVDFN,GMVTI,GMVDT,0,1)<br> .S GMVADT=$P(GMVDATA,U,1),GMVAVAL=$P(GMVDATA,U,2)<br> I GMVFLAG=1 D<br> .I GMVBDT'>0 S RESULT="-2^Before date not found" Q<br> .I GMVBVAL="" S RESULT="-2^Before value not found" Q<br> .S RESULT=GMVBDT_U_GMVBVAL<br> I GMVFLAG=2 D<br> .I GMVADT'>0 S RESULT="-2^After date not found" Q<br> .I GMVAVAL="" S RESULT="-2^After value not found" Q<br> .S RESULT=GMVADT_U_GMVAVAL<br> I GMVFLAG=0 D<br> .I GMVADT'>0,GMVBDT'>0 D  Q<br> ..S RESULT="-2^No records found"<br> .I GMVADT'>0,GMVBDT>0 D  Q<br> ..S:GMVBVAL]"" RESULT=GMVBDT_U_GMVBVAL<br> ..S:GMVBVAL="" RESULT="-2^No records found"<br> .I GMVADT>0,GMVBDT'>0 D  Q<br> ..S:GMVAVAL]"" RESULT=GMVADT_U_GMVAVAL<br> ..S:GMVAVAL="" RESULT="-2^No records found"<br> .I GMVADT>0,GMVBDT>0 D<br> ..S GMVBDIFF=+$$FMDIFF^XLFDT(GMVDT,GMVBDT,2)<br> ..S GMVADIFF=+$$FMDIFF^XLFDT(GMVADT,GMVDT,2)<br> ..I GMVBDIFF<GMVADIFF S RESULT=GMVBDT_U_GMVBVAL<br> ..I GMVADIFF<GMVBDIFF S RESULT=GMVADT_U_GMVAVAL<br> ..I GMVADIFF=GMVBDIFF S RESULT=GMVADT_U_GMVAVAL{:/}


### CPRS

[GMV_VitalsViewEnter.dll]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}