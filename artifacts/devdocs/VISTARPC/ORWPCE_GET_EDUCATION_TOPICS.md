---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE GET EDUCATION TOPICS<br/>
# ORWPCE GET EDUCATION TOPICS

Returns a list of active education topics.

## Properties

Property | Value
--- | ---
Label | EDTTYPE
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [EDTTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | get the list of active education topics
Code | {::nomarkdown}<pre><code> N IEN,CNT,BINDEX S (IEN,CNT,BINDEX)=0<br/> F  S BINDEX=$O(^AUTTEDT("B",BINDEX)) Q:BINDEX']""  F  S IEN=$O(^(BINDEX,IEN)) Q:'+IEN  I $D(^AUTTEDT(IEN,0))#2,+$P(^(0),"^",3)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}