---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE SAVEGAF<br/>
# ORWPCE SAVEGAF

Saves a GAF Score.

## Properties

Property | Value
--- | ---
Label | SAVEGAF
MUMPS Implementation | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORINPUT | LIST |  |  | ORINPUT(&quot;DFN&quot;) &#x3D; Patient IENORINPUT(&quot;GAF&quot;) &#x3D; GAF ScoreORINPUT(&quot;DATE&quot;) &#x3D; Date/Time of DiagnosisORINPUT(&quot;STAFF&quot;) &#x3D; Diagnosis By DUZ



## MUMPS Method Description

Property | Value
--- | ---
Method | [SAVEGAF^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Save new GAF score
Input Parameters | ORINPUT
Code | {::nomarkdown}<pre><code> N ORDATA<br/> D ENT^YSGAFAP1(.ORDATA,.ORINPUT)<br/> S ORY=($G(ORDATA(1))="[DATA]")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}