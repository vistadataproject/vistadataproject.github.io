---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDLR32 ONE SPECIMEN<br/>
# ORWDLR32 ONE SPECIMEN

Returns IEN^NAME of requested a TOPOGRAPHY FIELD (file #61) entry.

## Properties

Property | Value
--- | ---
Label | ONESPEC
MUMPS Implementation | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SPECIMEN IEN | LITERAL | 32 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [ONESPEC^ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
Method Comment | return one specimen
Input Parameters | IEN
Code | {::nomarkdown}<pre><code> Q:(+$G(IEN)=0)!('$D(^LAB(61,IEN,0)))<br/> S LST=IEN_U_$P(^LAB(61,IEN,0),U,1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}