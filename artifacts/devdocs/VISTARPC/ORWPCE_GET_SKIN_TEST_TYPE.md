---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE GET SKIN TEST TYPE<br/>
# ORWPCE GET SKIN TEST TYPE

Returns a list of the active skin test codes.

## Properties

Property | Value
--- | ---
Label | SKTYPE
MUMPS Implementation | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SKTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | get the list of active skin test
Input Parameters | ORDT
Code | {::nomarkdown}<pre><code> N IEN,CNT,BINDEX S (IEN,CNT,BINDEX)=0<br/> S:'$G(ORDT) ORDT=DT<br/> F  S BINDEX=$O(^AUTTSK("B",BINDEX)) Q:BINDEX']""  F  S IEN=$O(^(BINDEX,IEN)) Q:'+IEN  D<br/> . I $D(^AUTTSK(IEN,0))#2,+$P(^(0),"^",3)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")<br/> . ;I $D(^AUTTSK(IEN,0))#2,+$$SCREEN^XTID(9999999.28,,IEN,ORDT)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}