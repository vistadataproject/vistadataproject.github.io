---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE CPTREQD<br/>
# ORWPCE CPTREQD

Returns 1 if TIU DOCUMENT file entry needs a CPT code.

## Properties

Property | Value
--- | ---
Label | CPTREQD
Routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [CPTREQD^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | return 1 in VAL if note still needs a CPT code
Input Parameters | IEN
Code | {::nomarkdown}<pre><code> S VAL=+$P(^TIU(8925,IEN,0),U,11)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}