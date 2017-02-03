---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB HEALTH SUMMARY TEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB HEALTH SUMMARY TEXT{:/}
 tag | {::nomarkdown}RPT{:/}
 routine | [DVBAB1](http://code.osehra.org/dox/Routine_DVBAB1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This rpc retrieves the report text for a report selected onthe Report tab.the report format on the roll 'n scroll version of CPRS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}REPORT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identification number of the desired report.{:/} | 
| {::nomarkdown}HEALTH SUMMARY TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the HEALTH SUMMARY TYPE file.This parameter is only required for Health Summary reports.{:/} | 
| {::nomarkdown}DATE RANGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter indicates the number of days from TODAYthat the report should search for information.This parameter is required for vital reports.{:/} | 
| {::nomarkdown}REPORT SECTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter specifics which portion of the report should beretrieved.If REPORT SECTION equals 0 then the entire report is re-compiled and thefirst section is passed back. If the report is large then it isnecessary to divide it into sections. Currently, each section cannot be more than be more than 20,000 characters{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}