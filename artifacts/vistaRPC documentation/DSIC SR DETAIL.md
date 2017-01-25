---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC SR DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC SR DETAIL{:/}
 tag | {::nomarkdown}DETAILSR{:/}
 routine | [DSICSRPT](http://code.osehra.org/dox/Routine_DSICSRPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}For a surgical case, this returns the operation report, anesthesia report, nurse's report, and procedure report.  Which reports are returned depends upon the input paramter FLAG value.  It defaults to Op report and Anesthesia report.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSISRTN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal file number from file 130, i.e., CASE#{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional parameter - string of characters indicating which reports to return:  FLAG[\O\ - return Operation Report       \A\ - return Anesthesia Report       \N\ - return Nurse's Report       \P\ - return Procedure Report (NON-OR) Default to FLAG=\OA\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}