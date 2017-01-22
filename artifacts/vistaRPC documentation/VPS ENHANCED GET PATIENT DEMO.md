---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS ENHANCED GET PATIENT DEMO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS ENHANCED GET PATIENT DEMO{:/}
 tag | {::nomarkdown}GETDATA3{:/}
 routine | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is called  by the Vetlink Kiosk (point of service) system.  Given Patient SSN or DFN or ICN or VIC/CAC, this RPC returns thepatient demographics,insurance,and up-coming appointments, etcfor selected categories{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID such as the patient SSN OR DFN OR ICN OR VIC/CAC{:/} | 
| {::nomarkdown}VPSTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID TYPE such as SSN or DFN OR ICN OR VIC/CAC{:/} | 
| {::nomarkdown}VPSCAT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input Format:  VPSCAT(SEQ#)=CATEGORY;FROMDATE:THROUGH DATEExample input parameter :    VPSCAT(1)=1;3140101:3141231 <- returns Appointments start from 1/1/2014 through 12/31/2014   VPSCAT(2)=2;3140601:3140630 <- returns Lab Orders start from 6/1/2014 through 6/30/2014   VPSCAT(3)=3                 <- returns all consults   VPSCAT(4)=6                 <- returns Patient Demographics Valid Categories:   1 - Appointment (With Date Range option)   2 - Lab Orders (With Date Range option)   3 - Consults   4 - Radiology (With Date Range option)   5 - Problem   6 - Patient demographics{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}