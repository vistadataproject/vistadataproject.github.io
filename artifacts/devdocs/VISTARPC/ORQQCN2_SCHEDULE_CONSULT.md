---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN2 SCHEDULE CONSULT<br/>
# ORQQCN2 SCHEDULE CONSULT

Changes status of consult to "Scheduled", optionally adding a comment andsending alerts.

## Properties

Property | Value
--- | ---
Label | SCH
MUMPS Implementation | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Consult IEN | LITERAL | 16 | true | Consult IEN in file 123.
Responsible provider | LITERAL | 32 | true | 
Date of action | LITERAL | 16 |  | 
Send alerts? | LITERAL | 2 | true | 
Send alerts to | LITERAL | 100 | true | &quot;;&quot; separated list of alert recipients - pointers to file 200.
Comments | LIST |  |  | Array of comments to be added with this action.



## MUMPS Method Description

Property | Value
--- | ---
Method | [SCH^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Schedule consult and change status
Input Parameters | ORIEN, ORNP, ORDATE, ORALRT, ORALTO, ORCOM
First Comment | {::nomarkdown}<pre><code>ORERR - return array for results/errors<br/>ORIEN - IEN of consult from File 123<br/>ORNP - Provider who Scheduled consult<br/>ORDATE - Date/Time Consult was scheduled.<br/>ORALRT - should alerts be sent to anyone?<br/>ORALTO - array of alert recipient IENs<br/>ORCOM is the comments array to be added<br/>     passed in as ORCOM(1)="Xxxx Xxxxx...",ORCOM(2)="Xxxx Xx Xxx...", ORCOM(3)="Xxxxx Xxx Xx...", etc.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORAD,ORDUZ,X<br/> S ORERR=0,ORAD=$S($D(ORDATE):ORDATE,1:$$NOW^XLFDT)<br/> S:+$G(ORNP)=0 ORNP=DUZ<br/> I '$D(^GMR(123,ORIEN)) S ORERR="1^No such consult" Q<br/> I $G(ORALRT)=1 D<br/> .F I=1:1  S X=$P(ORALTO,";",I) Q:X=""  S ORDUZ(X)=""<br/> S ORERR=$$SCH^GMRCGUIB(ORIEN,ORNP,ORAD,.ORDUZ,.ORCOM)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}