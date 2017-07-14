---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU DELETE RECORD<br/>
# TIU DELETE RECORD

Deletes TIU Document records...Evaluates authorization.

## Properties

Property | Value
--- | ---
Label | DELETE
Routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | Record number of TIU Document to be deleted.
TIURSN | LITERAL |  | true | This optional parameter specifies the reason for deletion (i.e., PrivacyAct, or Administrative Action). It only needs to be passed if the document has already been signed, and the user is still authorized to delete therecord.



## MUMPS Method Description

Property | Value
--- | ---
Method | [DELETE^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Method Comment | delete document
Input Parameters | TIUDA, TIURSN, OVRRIDE
Code | {::nomarkdown}<pre><code> N TIUDEL,TIUD0 S ERR=0<br/> I '+$G(OVRRIDE) D  Q:+$G(TIUDEL)'>0<br/> . S TIUDEL=$$CANDO^TIULP(TIUDA,"DELETE RECORD")<br/> . I TIUDEL'>0 S ERR="89250003^"_$$EZBLD^DIALOG(89250003)<br/> S TIUD0=$G(^TIU(8925,+TIUDA,0))<br/> I +$P(TIUD0,U,5)'<6 D  Q<br/> . S TIURSN=$G(TIURSN,"A")<br/> . D DELTEXT^TIURB2(TIUDA,TIURSN)<br/> D DIK^TIURB2(TIUDA)<br/> D DELAUDIT^TIUEDI1(TIUDA)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}