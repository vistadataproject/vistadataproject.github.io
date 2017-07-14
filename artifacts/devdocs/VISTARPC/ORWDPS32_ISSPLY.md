---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 ISSPLY<br/>
# ORWDPS32 ISSPLY

Return 1 if orderable item is a supply, otherwise return 0.

## Properties

Property | Value
--- | ---
Label | ISSPLY
Routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ISSPLY^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Method Comment | return true if orderable item is a supply
Input Parameters | IEN
Code | {::nomarkdown}<pre><code> S VAL=0<br/> I $P($G(^ORD(101.43,IEN,"PS")),U,5)=1 S VAL=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}