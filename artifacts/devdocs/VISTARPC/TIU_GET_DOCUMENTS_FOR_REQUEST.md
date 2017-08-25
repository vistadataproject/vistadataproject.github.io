---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU GET DOCUMENTS FOR REQUEST<br/>
# TIU GET DOCUMENTS FOR REQUEST

This Remote Procedure returns the list of documents associated with agiven Request (e.g., Consult Request, or Surgical Case).

## Properties

Property | Value
--- | ---
Label | GETDOCS
MUMPS Implementation | [TIUSRVLR](http://code.osehra.org/dox/Routine_TIUSRVLR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OVP | LITERAL |  | true | This is the variable pointer (e.g., &quot;12745;GMR(123,&quot; or &quot;14672;SRF(&quot;) thatidentifies the record in the requesting application.



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETDOCS^TIUSRVLR](http://code.osehra.org/dox/Routine_TIUSRVLR_source.html)
Method Comment | Get TIU Documents for a given Consult or
Input Parameters | OVP, SEQUENCE
First Comment | {::nomarkdown}<pre><code> Surgical Case</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUDA,TIUI<br/> S (TIUDA,TIUI)=0,TIUY=$NA(^TMP("TIULIST",$J)) K @TIUY<br/> S SEQUENCE=$S($G(SEQUENCE)]"":$G(SEQUENCE),1:"D")<br/> F  S TIUDA=$O(^TIU(8925,"G",OVP,TIUDA)) Q:+TIUDA'>0  D<br/> . S TIUI=TIUI+1<br/> . ; Cross-check value of field 1405 with x-ref value<br/> . I OVP'=$P($G(^TIU(8925,TIUDA,14)),U,5) Q<br/> . ; If a document is an ID Entry, get its parent<br/> . ; I +$G(^TIU(8925,TIUDA,21)) S TIUDA=+$G(^TIU(8925,TIUDA,21))<br/> . ; Don't include entry in list more than once<br/> . I +$O(@TIUY@("INDX",TIUDA,0)) Q<br/> . ; Don't include entry in list if RETRACTED<br/> . I $P($G(^TIU(8925,TIUDA,0)),U,5)=15 Q<br/> . S @TIUY@(TIUI)=TIUDA_U_$$RESOLVE^TIUSRVLO(TIUDA)<br/> . S @TIUY@("INDX",TIUDA,TIUI)=""<br/> . I +$$HASDAD^TIUSRVLI(TIUDA) D SETDAD^TIUSRVLI(.TIUY,TIUDA,.TIUI)<br/> . I +$$HASKIDS^TIUSRVLI(TIUDA) D SETKIDS^TIUSRVLI(.TIUY,TIUDA,.TIUI)<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}