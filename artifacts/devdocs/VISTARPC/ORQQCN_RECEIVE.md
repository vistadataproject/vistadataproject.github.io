---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN RECEIVE
# ORQQCN RECEIVE

Test version of RECEIVE CONSULT for use with GUI.  (REV - 8/22/97)

Property | Value
--- | ---
Label | RC
Routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CONSULT ID | LITERAL | 16 | true | Consult IEN from Consults file (123).
CONSULT RECEIVER | LITERAL | 16 | true | Person receiving the consult, not necessarily the enterer of the action.Pointer to NEW PERSON file (200).



### MUMPS Method Description

Property | Value
--- | ---
Method | [RC^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | Receive the consult into the service
Input Parameters | GMRCO, GMRCORNP, GMRCAD, ORCOM
First Comment | {::nomarkdown}<pre><code>GMRCO - The internal file number of the consult from File 123<br/>GMRCORNP - internal file number of the person receiving the request into the service<br/>GMRCAD - date/time consult received into the service<br/>ORCOM - Array containing comments related to receipt of the consult.<br/>Passed as the following form :<br/> ARRAY(1)="xxx xxx xxx",ARRAY(2)="XXX XXX",ARRAY(3)="XXX XXX xx", etc.<br/> Comment is optional when consult is received.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S Y=$$RC^GMRCGUIA(GMRCO,GMRCORNP,GMRCAD,.ORCOM)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}