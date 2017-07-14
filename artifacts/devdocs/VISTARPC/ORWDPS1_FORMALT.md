---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS1 FORMALT<br/>
# ORWDPS1 FORMALT



## Properties

Property | Value
--- | ---
Label | FORMALT
Routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [FORMALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Method Comment | return a list of formulary alternatives
Input Parameters | ORIEN, PSTYPE
Code | {::nomarkdown}<pre><code> N PSID,I<br/> S ORIEN=+$P(^ORD(101.43,ORIEN,0),U,2)<br/> D EN1^PSSUTIL1(.ORIEN,PSTYPE)<br/> S PSID=0,I=0<br/> F  S PSID=$O(ORIEN(PSID)) Q:'PSID  D<br/> . S OI=+$O(^ORD(101.43,"ID",PSID_";99PSP",0))<br/> . I OI S I=I+1,ORLST(I)=OI,$P(ORLST(I),U,2)=$P(^ORD(101.43,OI,0),U)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}