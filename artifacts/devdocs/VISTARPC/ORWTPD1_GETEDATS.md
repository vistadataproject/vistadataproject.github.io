---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPD1 GETEDATS<br/>
# ORWTPD1 GETEDATS



## Properties

Property | Value
--- | ---
Label | GETEDATS
Routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETEDATS^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Method Comment | Get user&#x27;s (all levels) Encounter app&#x27;t date range params.
Code | {::nomarkdown}<pre><code> N ORSRV,ORUSER<br/> S ORUSER=DUZ<br/> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U) ; Get S/S.<br/> S INFO=$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQEAPT ENC APPT START",1,"I")_U<br/> S INFO=INFO_$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQEAPT ENC APPT STOP",1,"I")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}