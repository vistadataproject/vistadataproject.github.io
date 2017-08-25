---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU TEMPLATE DELETE<br/>
# TIU TEMPLATE DELETE

This RPC will delete orphan entries in the Template file (i.e., onlythose entries that have been removed from any Groups, Classes, Personalor Shared Root entries).

## Properties

Property | Value
--- | ---
Label | DELETE
MUMPS Implementation | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LIST |  | true | This is a list of records which are to be deleted.



## MUMPS Method Description

Property | Value
--- | ---
Method | [DELETE^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Method Comment | Delete TEMPLATES
Input Parameters | TIUDA
First Comment | {::nomarkdown}<pre><code> Pass TIUDA as array of record numbers to be deleted by reference<br/> SUCCESS will be returned as the actual number of templates deleted</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUI S (SUCCESS,TIUI)=0<br/> F  S TIUI=$O(TIUDA(TIUI)) Q:+TIUI'>0  D<br/> . N DA<br/> . S DA=+TIUDA(TIUI)<br/> . I 'DA Q<br/> . L -^TIU(8927,DA,0):1 ; Unlock before deleting<br/> . ; Quit if the Template is NOT an ORPHAN<br/> . I +$O(^TIU(8927,"AD",DA,0)) Q<br/> . ; Otherwise, call FileMan to DELETE the record<br/> . D ZAP(DA) S SUCCESS=SUCCESS+1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}