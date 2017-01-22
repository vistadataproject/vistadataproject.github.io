---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV PTSELECT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV PTSELECT{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [GMVRPCP](http://code.osehra.org/dox/Routine_GMVRPCP_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Used as a method of processing a patient DFN and returning all warnings and notices (i.e. sensitivity or same last 4 of SSN) to the client application for processing.  Also includes a call to log access of sensitive patients to the DG SECURITY LOG file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RESULT{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the RPC return array variable.{:/} | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the appropriate method to perform within this RPC call. Options are:  SELECT: Performs a select of the supplied DFN (param 3) and returns the           notices and warnings for the DFN   LOGSEC: Logs a security entry in the DG SECURITY LOG file.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the DFN of the patient to process in the SELECT or LOGSEC method of param 2.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Used to pass in the option name to DGSEC when logging against the DG SECURITY LOG file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}