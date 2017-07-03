---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN DISCONTINUE
# ORQQCN DISCONTINUE

Discontinue a consult or deny a consult request.

Property | Value
--- | ---
Label | DC
Routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CONSULT ID | LITERAL | 16 | true | Internal file number of the consult/request.
PROVIDER ID | LITERAL | 16 | true | Internal file number of the person discontinuing/denying the consult.Points to NEW PERSON file (#200)
DATE OF ACTION | LITERAL | 16 | true | Date of the discontinuance/denial of the consult.
ACTION TYPE | LITERAL | 16 | true | &#x27;DC&#x27; for discontinue, &#x27;DY&#x27; for deny
COMMENTS | WORD PROCESSING |  | true | Array of comments related to the discontinuance/denial of the consult.



### MUMPS Method Description

Property | Value
--- | ---
Method | [DC^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | Discontinue or Deny a consult
Input Parameters | GMRCO, GMRCORNP, GMRCAD, GMRCACTM, ORCOM
First Comment | {::nomarkdown}<pre><code>GMRCO - Internal file number of consult from File 123<br/>GMRCORNP - Provider who Discontinued or Denied consult<br/>GMRCAD - Date/Time Consult was discontinued or denied.<br/>GMRCACTM - If consult is 'DENIED' passed in as 'DY'; if consult is Discontinued passed in as 'DC'.<br/>ORCOM - Array containing explanation of why consult was denied. Passed as the following form :<br/> ARRAY(1)="xxx xxx xxx",ARRAY(2)="XXX XXX",ARRAY(3)="XXX XXX xx", etc.<br/> Comment is a required field when consult is denied or discontinued.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S Y=$$DC^GMRCGUIA(GMRCO,GMRCORNP,GMRCAD,GMRCACTM,.ORCOM)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}