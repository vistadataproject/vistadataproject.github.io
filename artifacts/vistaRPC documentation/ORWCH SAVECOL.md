---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCH SAVECOL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCH SAVECOL{:/}
 tag | {::nomarkdown}SAVECOL{:/}
 routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC saves the column width sizes for reports in CPRS for the user.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}COL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Format: ifn^C1,C2,C3,C4,C5,C6 ... Where ifn is the internal number of the report in file 101.24, and the2nd '^' piece is the columns separated by commas.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SAVECOL^[ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 Method comment | save report column sizing information
 Input parameters | {::nomarkdown}COL{:/}
 Code | {::nomarkdown}  N NAM,VAL,ORERR<br> S OK="",NAM=$P(COL,"^"),VAL=$P(COL,"^",2)<br> D EN^XPAR(DUZ_";VA(200,","ORWCH COLUMNS REPORTS",NAM,VAL,.ORERR)<br> I ORERR S OK=COL_":"_ORERR{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}