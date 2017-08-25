---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 VALQTY<br/>
# ORWDPS32 VALQTY

Validate a medication quantity and return a 1 if it is valid, otherwisereturn 0.

## Properties

Property | Value
--- | ---
Label | VALQTY
MUMPS Implementation | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VALQTY^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Method Comment | validate a quantity, return 1 if valid, 0 if not
Input Parameters | X
First Comment | {::nomarkdown}<pre><code> to be compatible with LM, make sure X is integer from 1 to 240<br/> this is based on the input transform from 52,7</code></pre>{:/}
Code | {::nomarkdown}<pre><code> K:(+X'>0)!(+X>99999999)!(X'?.8N.1".".2N)!($L(X)>12) X<br/> S OK=$S($D(X):1,1:0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}