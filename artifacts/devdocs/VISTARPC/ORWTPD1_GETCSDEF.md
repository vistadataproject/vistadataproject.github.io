---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPD1 GETCSDEF<br/>
# ORWTPD1 GETCSDEF



## Properties

Property | Value
--- | ---
Label | GETCSDEF
MUMPS Implementation | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETCSDEF^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Method Comment | Get Div/Sys/Pkg Cover Sheet default range parameters.
Code | {::nomarkdown}<pre><code> N ORVAL<br/> S ORVAL=""<br/> S ORVAL=$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE START",1,"I")<br/> S ORVAL=$$CHKRNG(ORVAL,999)<br/> S INFO=ORVAL_U,ORVAL=""<br/> S ORVAL=$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE STOP",1,"I")<br/> S ORVAL=$$CHKRNG(ORVAL,999)<br/> S INFO=INFO_ORVAL</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}