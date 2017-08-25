---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN FORWARD<br/>
# ORQQCN FORWARD

Forwards a consult to a subservice of the forwarding service, as definedin file 123.5

## Properties

Property | Value
--- | ---
Label | FR
MUMPS Implementation | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CONSULT ID | LITERAL | 16 | true | Consult IEN from file 123
TO SERVICE | LITERAL | 16 | true | Service to which the consult is to be forwarded.  Pointer to file 123.5
FORWARDER | LITERAL | 16 | true | Person performing the forwarding action.  If null, defaults to user DUZ.Points to NEW PERSON file, #200.
ATTENTION OF | LITERAL | 16 |  | Person to whose attention the consult is being forwarded in thedestination service.  Pointer to NEW PERSON file, #200.
URGENCY | LITERAL | 16 |  | Urgency of the request, as defined in PROTOCOL file.
COMMENTS | LIST |  |  | Comments related to the forwarding action.



## MUMPS Method Description

Property | Value
--- | ---
Method | [FR^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | Forward consult/request to another service
Input Parameters | GMRCO, GMRCSS, GMRCORNP, GMRCATTN, GMRCURGI, ORDATE, ORCOM
First Comment | {::nomarkdown}<pre><code>GMRCO - IEN of consult from File 123<br/>GMRCSS - Service to which consult is being forwarded<br/>GMRCATTN - Provider whose attention consult is sent to. Can be "" or pointer to File 200<br/>GMRCURGI - Urgency of the request<br/>GMRCORNP - Person who is responsible for forwarding the consult<br/>ORCOM is the comments array explaining the forwarding action<br/>     passed in as ORCOM(1)="Xxxx Xxxxx...",ORCOM(2)="Xxxx Xx Xxx...", ORCOM(3)="Xxxxx Xxx Xx...", etc.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S:+$G(GMRCATTN)=0 GMRCATTN=""<br/> S Y=$$FR^GMRCGUIA(GMRCO,GMRCSS,GMRCORNP,GMRCATTN,GMRCURGI,.ORCOM,ORDATE)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}