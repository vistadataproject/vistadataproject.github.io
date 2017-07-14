---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 DRUGMSG<br/>
# ORWDPS32 DRUGMSG

Return message text that is associated with a dispense drug.

## Properties

Property | Value
--- | ---
Label | DRUGMSG
Routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DRUGMSG^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Method Comment | return any message associated with a dispense drug
Input Parameters | IEN
Code | {::nomarkdown}<pre><code> N X S X=$$ENDCM^PSJORUTL(IEN)<br/> S VAL=$P(X,U,2)_U_$P(X,U,4)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}