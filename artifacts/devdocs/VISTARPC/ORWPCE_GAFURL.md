---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE GAFURL<br/>
# ORWPCE GAFURL

Returns the GAF Scale Rating Form URL

## Properties

Property | Value
--- | ---
Label | GAFURL
MUMPS Implementation | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GAFURL^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Returns the MH GAF Web Page URL
Code | {::nomarkdown}<pre><code> S URL=""<br/> I $T(GAFURL^YTAPI5)'="" D<br/> .N ORY<br/> .D GAFURL^YTAPI5(.ORY)<br/> .I $G(ORY(1))="[DATA]" S URL=$G(ORY(2))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}