---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIR COMP ACCOUNTING SUMMARY 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR COMP ACCOUNTING SUMMARY{:/}
 tag | {::nomarkdown}CAS{:/}
 routine | [DSIROIR1](http://code.osehra.org/dox/Routine_DSIROIR1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns a list of all internal entry numbers from file 19620 for a specified patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The DFN of the selected patient.{:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the FileMan date to start the report.  If it is null the routine will start at the begining.{:/} | 
| {::nomarkdown}END DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the FileMan date the report should stop counting.  If null the report will count all records from the start date thru the current date.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}