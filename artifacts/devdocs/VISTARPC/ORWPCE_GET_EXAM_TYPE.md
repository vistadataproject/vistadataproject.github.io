---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE GET EXAM TYPE
# ORWPCE GET EXAM TYPE

Returns the list of active exam types.

Property | Value
--- | ---
Label | EXAMTYPE
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [EXAMTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | get the list of active exams
Code | {::nomarkdown}<pre><code> N IEN,CNT,BINDEX S (IEN,CNT,BINDEX)=0<br/> F  S BINDEX=$O(^AUTTEXAM("B",BINDEX)) Q:BINDEX']""  F  S IEN=$O(^(BINDEX,IEN)) Q:'+IEN  I $D(^AUTTEXAM(IEN,0))#2,+$P(^(0),"^",4)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}