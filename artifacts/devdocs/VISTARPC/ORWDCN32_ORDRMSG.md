---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDCN32 ORDRMSG<br/>
# ORWDCN32 ORDRMSG



## Properties

Property | Value
--- | ---
Label | ORDRMSG
Routine | [ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ORDRMSG^ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
Method Comment | returns order message for this consult/procedure orderable
Input Parameters | ORDITM
Code | {::nomarkdown}<pre><code> N I<br/> S I=0 F  S I=$O(^ORD(101.43,ORDITM,8,I)) Q:I'>0  S Y(I)=^(I,0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}