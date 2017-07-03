---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS5 ISVTP
# ORWDPS5 ISVTP



Property | Value
--- | ---
Label | ISVTP
Routine | [ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [ISVTP^ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
Method Comment | True: is verbal or telephoned or policy order
Input Parameters | ODIEN
Code | {::nomarkdown}<pre><code> S ORY=0<br/> Q:'$D(^OR(100,+ODIEN,0))<br/> N VERB,TEL,POL,LSTACT,NATR<br/> S (VERB,TEL,POL,LSTACT)=0,NATR=""<br/> S VERB=$O(^ORD(100.02,"B","VERBAL",0))<br/> S TEL=$O(^ORD(100.02,"B","TELEPHONED",0))<br/> S POL=$O(^ORD(100.02,"B","POLICY",0))<br/> S LSTACT=$O(^OR(100,+ODIEN,8,"?"),-1)<br/> S NATR=$P(^OR(100,+ODIEN,8,LSTACT,0),U,12)<br/> I (NATR=VERB)!(NATR=TEL)!(NATR=POL) S ORY=1<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}