---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN INPAT OUTPAT SPECIFIC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN INPAT OUTPAT SPECIFIC{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPC4](http://code.osehra.org/dox/Routine_SPNJRPC4_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns inpatient/outpatient activity information for a list of given patients (based on the ICN) based on a date range, minimum number of results, a list of Clinic names/numbers and Specialty names.  There are two types of returns for this RPC depending on the HIUSERS parameter that is passed, a '0' will return clinic & specialty stats only and a '1' will return patient usage data as well. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Patient's ICN in string format (ICN^ICN^ICN^ICN) {:/} | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to start search from.  {:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end search at.  {:/} | 
| {::nomarkdown}CLINSTP{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}List of Clinic Stops to search for.{:/} | 
| {::nomarkdown}SPECLTY{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Type of Specialties to search for. {:/} | 
| {::nomarkdown}HIUSERS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Type of data to return: 0 - clinic & specialty stats, 1 - patient usage data. {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}