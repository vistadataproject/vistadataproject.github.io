---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE LOADGAF
# ORWPCE LOADGAF

Returns a list of GAF Scores

Property | Value
--- | ---
Label | LOADGAF
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORINPUT | LIST |  |  | ORINPUT(&quot;DFN&quot;) &#x3D; Patient DFN.ORINPUT(&quot;LIMIT&quot;) &#x3D; Number of most recent GAF scores to retrieve.



### MUMPS Method Description

Property | Value
--- | ---
Method | [LOADGAF^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Retrieve GAF scores
Input Parameters | ORINPUT
Code | {::nomarkdown}<pre><code> D GAFHX^YSGAFAPI(.ORY,.ORINPUT)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}