---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDRA32 PROCMSG<br/>
# ORWDRA32 PROCMSG



## Properties

Property | Value
--- | ---
Label | PROCMSG
Routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [PROCMSG^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Method Comment | return order message for a procedure
Input Parameters | IEN
Code | {::nomarkdown}<pre><code> N I<br/> S I=0 F  S I=$O(^ORD(101.43,IEN,8,I)) Q:I'>0  S ORY(I)=^(I,0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODRad.pas">Orders/rODRad.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}