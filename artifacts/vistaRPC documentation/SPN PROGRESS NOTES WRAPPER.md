---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN PROGRESS NOTES WRAPPER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN PROGRESS NOTES WRAPPER{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPPN](http://code.osehra.org/dox/Routine_SPNJRPPN_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Submits progress note to VistA and returns a confirmation or error message, if problem occurred.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DFN/Internal Number of Patient{:/} | 
| {::nomarkdown}TITLE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}TIU Document Definition{:/} | 
| {::nomarkdown}VDT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Time/Date of Visit (Not used, leave blank){:/} | 
| {::nomarkdown}VLOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Visit Location (Not used, leave blank){:/} | 
| {::nomarkdown}VSIT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Visit file number (Not used, leave blank){:/} | 
| {::nomarkdown}TIUX{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Array containing field data and body document{:/} | 
| {::nomarkdown}VSTR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Visit string (VLOC;VDT;VTYPE){:/} | 
| {::nomarkdown}SUPPRESS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Suppress execution of Commit Action? (Not used, leave blank){:/} | 
| {::nomarkdown}NOASF{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Set Asave Cross-reference? (Not used, leave blank){:/} | 
| {::nomarkdown}DUZ{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Internal ID of employee entering Progress Note{:/} | 
| {::nomarkdown}SPNSIG{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Electronic Signature Code of employee{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}