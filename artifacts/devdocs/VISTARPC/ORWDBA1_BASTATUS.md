---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDBA1 BASTATUS<br/>
# ORWDBA1 BASTATUS

Billing Awareness RPC.Returns 0 if BA functionality is off or 1 if BA functionality is on.

## Properties

Property | Value
--- | ---
Label | BASTATUS
Routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [BASTATUS^ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
Method Comment | RPC to retrieve the status of the Billing Awareness software
First Comment | {::nomarkdown}<pre><code>   Y  =  Returned Value (1=BA usable, 0=BA not-usable)<br/> Check for installation of CIDC ancillary build</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S Y=$D(^XPD(9.7,"B","PX CLINICAL INDICATOR DATA CAPTURE 1.0"))<br/> Q:'Y<br/> S Y=$$CHKPS1^ORWDBA5</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}