---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWTPD1 GETCSRNG
# ORWTPD1 GETCSRNG



Property | Value
--- | ---
Label | GETCSRNG
Routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETCSRNG^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Method Comment | Get user&#x27;s Cover Sheet date range defaults.
Code | {::nomarkdown}<pre><code> N ORSRV,ORUSER,ORVAL<br/> S ORUSER=DUZ<br/> S ORVAL=""<br/> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U) ; Get S/S.<br/> S ORVAL=$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQCSDR CS RANGE START",1,"I")<br/> S ORVAL=$$CHKRNG(ORVAL,999)<br/> S VAL=ORVAL_U,ORVAL=""<br/> S ORVAL=$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQCSDR CS RANGE STOP",1,"I")<br/> S ORVAL=$$CHKRNG(ORVAL,999)<br/> S VAL=VAL_ORVAL</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}