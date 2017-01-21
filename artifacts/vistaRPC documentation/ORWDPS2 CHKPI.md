---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 CHKPI 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 CHKPI{:/}
 tag | {::nomarkdown}CHKPI{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CHKPI^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return pre-existing patient instruct
 Input parameters | {::nomarkdown}ODIFN{:/}
 Code | {::nomarkdown}  N IDNUM,IDPI<br> S (IDNUM,IDPI)=0,VAL=""<br> I '$D(^OR(100,ODIFN,4.5,"ID","PI")) S VAL="" Q<br> F  S IDNUM=$O(^OR(100,ODIFN,4.5,"ID","PI",IDNUM)) Q:'IDNUM  D<br> . F  S IDPI=$O(^OR(100,ODIFN,4.5,IDNUM,2,IDPI)) Q:'IDPI  D<br> .. S VAL=VAL_^OR(100,ODIFN,4.5,IDNUM,2,IDPI,0)<br> K IDNUM,IDPI{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}