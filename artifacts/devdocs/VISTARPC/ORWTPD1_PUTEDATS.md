---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPD1 PUTEDATS<br/>
# ORWTPD1 PUTEDATS



## Properties

Property | Value
--- | ---
Label | PUTEDATS
Routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [PUTEDATS^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Method Comment | Save Encounter app&#x27;t date range params at user level.
Input Parameters | Y
Code | {::nomarkdown}<pre><code> N ORSTART,ORSTOP,ORUSER<br/> S OK=1,ORUSER=DUZ<br/> S ORSTART=$P(Y,U,1)<br/> S ORSTOP=$P(Y,U,2)<br/> I ORSTART="" S ORSTART=0<br/> I ORSTOP="" S ORSTOP=0<br/> I ORSTART>999 S ORSTART=999<br/> I ORSTOP>999 S ORSTART=999<br/> D EN^XPAR(ORUSER_";VA(200,","ORQQEAPT ENC APPT START",1,ORSTART)<br/> D EN^XPAR(ORUSER_";VA(200,","ORQQEAPT ENC APPT STOP",1,ORSTOP)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}