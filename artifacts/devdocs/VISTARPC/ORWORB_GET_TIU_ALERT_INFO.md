---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORB GET TIU ALERT INFO<br/>
# ORWORB GET TIU ALERT INFO

Given a TIU XQAID, return the patient and document type for the item beingalerted.

## Properties

Property | Value
--- | ---
Label | GETALRT
Routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XQAID | LITERAL | 60 | true | The XQAID of the alert.



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETALRT^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
Method Comment | Retrieve DFN and document type for a TIU alert
Input Parameters | XQAID
Code | {::nomarkdown}<pre><code> N X,TIUDA,TIUDFN,ORTAB,TIUDAD,GMRCO<br/> S TIUDA=$TR($P(XQAID,";",1),"ABCDEFGHIJKLMNOPQRSTUVWXYZ") ; Strip Text<br/> I '+TIUDA!('$D(^TIU(8925,+TIUDA,0))) S TIUY="-1" Q<br/> S X=$P($G(^TIU(8925,TIUDA,0)),U)<br/> S TIUDFN=$P(^TIU(8925,TIUDA,0),U,2)<br/> I $P(^TIU(8925,TIUDA,0),U,6)'="" D<br/> . S TIUDAD=$P(^TIU(8925,TIUDA,0),U,6)<br/> . S X=$P($G(^TIU(8925,TIUDAD,0)),U)<br/> I ('+X)!('+TIUDFN) S TIUY="-1" Q<br/> S ORTAB=903    ;DEFAULT TO PN<br/> I +$$ISDS^TIULX(X) S ORTAB=901<br/> I +$$ISA^TIULX(X,$$CLASS^TIUSROI("SURGICAL REPORTS")) S ORTAB=904<br/> I +$$ISA^TIULX(X,$$CLASS^TIUCNSLT)!(+$$ISA^TIULX(X,+$$CLASS^TIUCP)) D<br/> . S GMRCO=$P(^TIU(8925,$S(+$G(TIUDAD):TIUDAD,1:TIUDA),14),U,5)<br/> . S ORTAB=902_";"_GMRCO<br/> S TIUY=TIUDA_U_TIUDFN_U_ORTAB</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}