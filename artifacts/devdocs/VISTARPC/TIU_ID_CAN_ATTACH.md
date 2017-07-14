---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU ID CAN ATTACH<br/>
# TIU ID CAN ATTACH

This BOOLEAN RPC evaluates the question of whether a particular documentmay be attached as an entry to an Interdisciplinary Note (i.e., can thisdocument be an ID Child?).

## Properties

Property | Value
--- | ---
Label | CANATTCH
Routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the IEN of the prospective ID Child document in the TIU Documentfile.



## MUMPS Method Description

Property | Value
--- | ---
Method | [CANATTCH^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | Can this document be attached as an ID Child
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> N TITLEDA,PARENTDA<br/> S TITLEDA=+$G(^TIU(8925,TIUDA,0))<br/> I TITLEDA'>0 S TIUY="0^Document #"_TIUDA_" does not exist." Q<br/> S PARENTDA=+$G(^TIU(8925,TIUDA,21))<br/> S TIUY=$$POSSPRNT^TIULP(TITLEDA)<br/> I +TIUY S TIUY="-1"_U_$P(TIUY,U,2) Q<br/> I +$$ISCWAD^TIULX(TITLEDA) D  Q<br/> . S TIUY="0^ CWAD Documents may not be Attached as Interdisciplinary Entries."<br/> I +$$ISA^TIULX(TITLEDA,+$$CLASS^TIUCNSLT) D  Q<br/> . S TIUY="0^ Consult Results may not be Attached as Interdisciplinary Entries."<br/> S TIUY=$$CANDO^TIULP(TIUDA,"ATTACH TO ID NOTE")<br/> I PARENTDA D  ; action must be "detach"<br/> . I 'TIUY S TIUY="0^ You may not detach this note from an interdisciplinary note." Q<br/> . S TIUY=$$CANDO^TIULP(PARENTDA,"ATTACH ID ENTRY")<br/> . I 'TIUY S TIUY="0^ You may not detach this note from its interdisciplinary note."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}