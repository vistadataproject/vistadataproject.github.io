---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWNSS NSSMSG<br/>
# ORWNSS NSSMSG



## Properties

Property | Value
--- | ---
Label | NSSMSG
Routine | [ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [NSSMSG^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
Method Comment | Retrieve site message for None-Standard Schedule
Code | {::nomarkdown}<pre><code> N ORSRV<br/> S ORY=""<br/> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)<br/> S ORY=$$GET^XPAR("SRV.`"_+$G(ORSRV)_"^DIV^SYS","ORWIM NSS MESSAGE",1,"I")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOtherSchedule.pas">Orders/fOtherSchedule.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}