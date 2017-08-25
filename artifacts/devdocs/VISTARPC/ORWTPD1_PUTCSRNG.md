---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPD1 PUTCSRNG<br/>
# ORWTPD1 PUTCSRNG



## Properties

Property | Value
--- | ---
Label | PUTCSRNG
MUMPS Implementation | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [PUTCSRNG^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Method Comment | Save user&#x27;s Cover Sheet data range defaults.
Input Parameters | INFO
Code | {::nomarkdown}<pre><code> N ORINPT,OROUTPT,ORSTART,ORSTOP,ORUSER<br/> S OK=1,ORUSER=DUZ<br/> S ORSTART=+$P(INFO,U,3) S:ORSTART>999 ORSTART=999 S ORSTART=$S(ORSTART=0:"T",ORSTART<0:"T"_ORSTART,1:"T+"_ORSTART)<br/> S ORSTOP=+$P(INFO,U,4) S:ORSTOP>999 ORSTART=999 S ORSTOP=$S(ORSTOP=0:"T",ORSTOP<0:"T"_ORSTOP,1:"T+"_ORSTOP)<br/> S ORINPT=+$P(INFO,U,1),ORINPT=$S('ORINPT:"@",1:ORINPT)<br/> S OROUTPT=+$P(INFO,U,2),OROUTPT=$S('OROUTPT:"@",1:OROUTPT)<br/> D EN^XPAR(ORUSER_";VA(200,","ORQQCSDR CS RANGE START",1,ORSTART)<br/> D EN^XPAR(ORUSER_";VA(200,","ORQQCSDR CS RANGE STOP",1,ORSTOP)<br/> D EN^XPAR(ORUSER_";VA(200,","ORQQLR DATE RANGE INPT",1,ORINPT)<br/> D EN^XPAR(ORUSER_";VA(200,","ORQQLR DATE RANGE OUTPT",1,OROUTPT)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}