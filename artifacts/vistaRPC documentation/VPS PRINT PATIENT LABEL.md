---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS PRINT PATIENT LABEL 

 property | value 
--- | --- 
 label | {::nomarkdown}VPS PRINT PATIENT LABEL{:/}
 tag | {::nomarkdown}PRINT{:/}
 routine | [VPSRLBLS](http://code.osehra.org/dox/Routine_VPSRLBLS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC prints patient label using the standard VistAPrint Patient Label routine (DGPLBL).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSLOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a flag to indicate to print routine to include ward locationor not.{:/} | 
| {::nomarkdown}VPSLBCNT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is label count to indicate to print routine how many duplicatelabels to print for the patient.{:/} | 
| {::nomarkdown}VPSLPL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is Lines/Label to indicate to print routine the maximum lines to print for each label.{:/} | 
| {::nomarkdown}VPSIO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the device name where the label will be printed to.{:/} | 
| {::nomarkdown}VPSTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID Type. Valid Input parameter: DFN,SSN,ICN,VIC/CAC{:/} | 
| {::nomarkdown}VPSNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID. This could be SSN, DFN, VIC/CAC, ICN{:/} | 




 Generated on January 13th 2017, 6:55:29 am