---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDOR VALNUM<br/>
# ORWDOR VALNUM

Validates a numeric entry.

## Properties

Property | Value
--- | ---
Label | VALNUM
MUMPS Implementation | [ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VALNUM^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
Method Comment | return error if invalid number
Input Parameters | X, DOM
Code | {::nomarkdown}<pre><code> N LOW,HIGH,DEC<br/> S LOW=$P(DOM,":"),HIGH=$P(DOM,":",2),DEC=$P(DOM,":",3),ERR=0<br/> I $L($P(X,"."))>24 S ERR="1^Exceeded maximum number of 24 characters" Q<br/> I X'?.1"-".N.1".".N S ERR="1^Entry must be numeric" Q<br/> I X>HIGH!(X<LOW) S ERR="1^Out of Range - value must be between "_LOW_" and "_HIGH_" inclusive" Q<br/> I $L($P(+X,".",2))>DEC D<br/> . I DEC=0 S ERR="1^No decimal places allowed"<br/> . E  I DEC=1 S ERR="1^Only one decimal place allowed"<br/> . E  S ERR="1^No more than "_DEC_" decimal places allowed"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}