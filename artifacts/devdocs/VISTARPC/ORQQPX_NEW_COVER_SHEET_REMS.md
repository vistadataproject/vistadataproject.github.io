---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPX NEW COVER SHEET REMS<br/>
# ORQQPX NEW COVER SHEET REMS

Returns a list of reminders for cover sheet evaluation.

## Properties

Property | Value
--- | ---
Label | REMLIST
MUMPS Implementation | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOC | LITERAL |  |  | Location



## MUMPS Method Description

Property | Value
--- | ---
Method | [REMLIST^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | Returns a list of all cover sheet reminders
Input Parameters | LOC
Code | {::nomarkdown}<pre><code> N SRV,I,J,ORLST,CODE,IDX,IEN,NEWP<br/> S SRV=$$GET1^DIQ(200,DUZ,29,"I")<br/> D NEWCVOK(.NEWP)<br/> I 'NEWP D GETLST^XPAR(.ORY,"USR^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX SEARCH ITEMS","Q",.ORERR) Q<br/> D REMACCUM(.ORLST,"PKG","Q",1000)<br/> D REMACCUM(.ORLST,"SYS","Q",2000)<br/> D REMACCUM(.ORLST,"DIV","Q",3000)<br/> I +SRV D REMACCUM(.ORLST,"SRV.`"_+$G(SRV),"Q",4000)<br/> I +LOC D REMACCUM(.ORLST,"LOC.`"_+$G(LOC),"Q",5000)<br/> D REMACCUM(.ORLST,"CLASS","Q",6000)<br/> D REMACCUM(.ORLST,"USR","Q",7000)<br/> S I=0<br/> F  S I=$O(ORLST(I)) Q:'I  D<br/> .S IDX=$P(ORLST(I),U,1)<br/> .F  Q:'$D(ORY(IDX))  S IDX=IDX+1<br/> .S CODE=$E($P(ORLST(I),U,2),2)<br/> .S IEN=$E($P(ORLST(I),U,2),3,999)<br/> .I CODE="R" D ADDREM(.ORY,IDX,IEN)<br/> .I CODE="C" D ADDCAT(.ORY,IDX,IEN)<br/> K ORY("B")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}