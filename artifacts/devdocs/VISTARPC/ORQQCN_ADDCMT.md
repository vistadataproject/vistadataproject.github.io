---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN ADDCMT
# ORQQCN ADDCMT

Allows addition of a comment to a consult request/consult without changingits status. Optionally, allows sending of an alert to the requestingprovider and others.

Property | Value
--- | ---
Label | CMT
Routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Consult ID | LITERAL | 16 | true | Internal entry number of the consult in file 123, REQUEST/CONSULT.
Comments | LIST | 80 | true | Array of comments in the form ARRAY(0)..ARRAY(n).
Alert | LITERAL | 5 | true | If &#x27;1&#x27;, send an alert to the requesting provider.  Otherwise, don&#x27;t.
Alert to | LITERAL | 80 | true | Contains pointers to NEW PERSON FILE (200) for those to receive alert forthis addition of a comment. 



### MUMPS Method Description

Property | Value
--- | ---
Method | [CMT^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Add comment to existing consult without changing status
Input Parameters | ORIEN, ORCOM, ORALRT, ORALTO, ORDATE
First Comment | {::nomarkdown}<pre><code>ORIEN - IEN of consult from File 123<br/>ORERR - return array for results/errors<br/>ORCOM is the comments array to be added<br/>     passed in as ORCOM(1)="Xxxx Xxxxx...",ORCOM(2)="Xxxx Xx Xxx...", ORCOM(3)="Xxxxx Xxx Xx...", etc.<br/>ORALRT - should alerts be sent to anyone?<br/>ORALTO - array of alert recipient IENs</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORAD,ORDUZ,ORNP,X<br/> S ORERR=0,ORAD=$S($D(ORDATE):ORDATE,1:$$NOW^XLFDT),ORNP=""<br/> I '$D(ORCOM) S ORERR="1^Comments required - no action taken" Q<br/> I '$D(^GMR(123,ORIEN)) S ORERR="1^No such consult" Q<br/> I $G(ORALRT)=1 D<br/> .F I=1:1  S X=$P(ORALTO,";",I) Q:X=""  S ORDUZ(X)=""<br/> D CMT^GMRCGUIB(ORIEN,.ORCOM,.ORDUZ,ORAD,DUZ)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}