---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS2 CHKPI
# ORWDPS2 CHKPI



Property | Value
--- | ---
Label | CHKPI
Routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [CHKPI^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Method Comment | return pre-existing patient instruct
Input Parameters | ODIFN
Code | {::nomarkdown}<pre><code> N IDNUM,IDPI<br/> S (IDNUM,IDPI)=0,VAL=""<br/> I '$D(^OR(100,ODIFN,4.5,"ID","PI")) S VAL="" Q<br/> F  S IDNUM=$O(^OR(100,ODIFN,4.5,"ID","PI",IDNUM)) Q:'IDNUM  D<br/> . F  S IDPI=$O(^OR(100,ODIFN,4.5,IDNUM,2,IDPI)) Q:'IDPI  D<br/> .. S VAL=VAL_^OR(100,ODIFN,4.5,IDNUM,2,IDPI,0)<br/> K IDNUM,IDPI</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}