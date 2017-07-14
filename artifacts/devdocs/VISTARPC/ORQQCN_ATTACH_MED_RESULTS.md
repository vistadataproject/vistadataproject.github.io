---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN ATTACH MED RESULTS<br/>
# ORQQCN ATTACH MED RESULTS

Allows a med result to be attached to a procedure request.

## Properties

Property | Value
--- | ---
Label | MEDCOMP
Routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Consult IEN | LITERAL | 16 | true | Consult (procedure) IEN in file 123.
Result pointer | LITERAL | 24 | true | Variable pointer to medicine result.
Date | LITERAL | 16 | true | Date the result was attached.
date |  |  |  | 
Resp Person | LITERAL | 16 |  | Pointer to file 200, for the person attaching the result.
Alerts to | LITERAL | 254 |  | Semicolon-delimited list of user DUZs to send alerts to for this action.



## MUMPS Method Description

Property | Value
--- | ---
Method | [MEDCOMP^ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
Method Comment | Attach a medicine result to a consult
Input Parameters | GMRCO, GMRCRSLT, GMRCAD, GMRCORNP, ORALTO
First Comment | {::nomarkdown}<pre><code>GMRCO - Internal file number of consult from File 123<br/>GMRCRSLT - pointer to medicine result<br/>GMRCAD - Date/Time Consult was resulted.<br/>GMRCORNP - Provider who attached the result to the consult<br/>ORALTO - array of alert recipient IENs</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:+$G(GMRCO)=0<br/> N ORDUZ,X,I<br/> I $G(ORALTO)'="" D<br/> .F I=1:1  S X=$P(ORALTO,";",I) Q:X=""  S ORDUZ(X)=""<br/> D MEDCOMP^GMRCMED(GMRCO,GMRCRSLT,GMRCAD,GMRCORNP,.ORDUZ)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}