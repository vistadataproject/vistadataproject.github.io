---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN GET MED RESULT DETAILS<br/>
# ORQQCN GET MED RESULT DETAILS

Detailed display of medicine results.

## Properties

Property | Value
--- | ---
Label | DISPMED
MUMPS Implementation | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Medicine result pointer | LITERAL | 24 | true | Variable pointer to medicine result.



## MUMPS Method Description

Property | Value
--- | ---
Method | [DISPMED^ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
Method Comment | Detailed display of a med result
Input Parameters | GMRCRES
Code | {::nomarkdown}<pre><code> Q:+$G(GMRCRES)=0<br/> D DISPMED^GMRCGUIU(GMRCRES,.ORY)<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}