---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP16 REPORT TEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP16 REPORT TEXT{:/}
 tag | {::nomarkdown}RPT{:/}
 routine | [ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This rpc retrieves the report text for a report selected onthe Report tab.the report format on the roll 'n scroll version of CPRS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return report text
 Input Parameters | {::nomarkdown}DFN<br/>RPTID<br/>HSTYPE<br/>DTRANGE<br/>SECTION{:/}
 Lines | ```
 IF $G(SECTION),$D(^TMP("ORDATA",$J,SECTION)) D  G RPTQ
 . S ROOT=$NA(^TMP("ORDATA",$J,SECTION))
 K ^TMP("ORDATA",$J)
 S ROOT=$NA(^TMP("ORDATA",$J,1))
 IF RPTID=1 D HS(DFN,HSTYPE) G RPTQ
 IF RPTID=2 D BL(DFN) G RPTQ
 IF RPTID=3 D PATH(DFN) G RPTQ
 IF RPTID=4 D DIET(.ROOT,DFN) G RPTQ
 IF RPTID=5 D VITALS(DFN,DTRANGE,"VITCUM") G RPTQ
 IF RPTID=6 D VITALS(DFN,DTRANGE,"VIT511") G RPTQ
 D NOTYET(.ROOT)```
 Leading comment lines | {::nomarkdown}RPC: ORWRP REPORT TEXT<br/>See RPC definition for details on input and output parameters{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}REPORT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identification number of the desired report.{:/} | 
| {::nomarkdown}HEALTH SUMMARY TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the HEALTH SUMMARY TYPE file.This parameter is only required for Health Summary reports.{:/} | 
| {::nomarkdown}DATE RANGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter indicates the number of days from TODAYthat the report should search for information.This parameter is required for vital reports.{:/} | 
| {::nomarkdown}REPORT SECTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter specifics which portion of the report should beretrieved.If REPORT SECTION equals 0 then the entire report is re-compiled and thefirst section is passed back. If the report is large then it isnecessary to divide it into sections. Currently, each section cannot be more than be more than 20,000 characters{:/} | 




 Generated on January 13th 2017, 6:55:29 am