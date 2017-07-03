---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU TEMPLATE SET ITEMS
# TIU TEMPLATE SET ITEMS

This RPC will create or update the items for a Group, Class, or Root.

Property | Value
--- | ---
Label | SETITEMS
Routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record number of the Group, Class or Root to which the itemsare to be added or modified.
TIUX | LIST |  | true | This is the list of items to be filed for the entry. It should beformatted as follows: TIUX(SEQ)&#x3D;IEN of the ITEM in the TEMPLATE file (#8927) e.g., TIUX(1)&#x3D;172TIUX(2)&#x3D;173TIUX(3)&#x3D;174 where the values 172, 173, and 174 are valid pointers to Template fileentries.



### MUMPS Method Description

Property | Value
--- | ---
Method | [SETITEMS^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Method Comment | Change ITEMs of a group, class, or root
Input Parameters | TIUDA, TIUX
First Comment | {::nomarkdown}<pre><code> Receives:<br/>   TIUDA=IEN of TEMPLATE record<br/>   TIUX(SEQ)=IEN of item<br/> Returns:<br/>   SUCCESS(SEQ)=IEN of item if successful, or<br/>                0^ Explanatory message if not</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUI S TIUI=0<br/> D CLRITMS(TIUDA) ; Remove ITEMS<br/> F  S TIUI=$O(TIUX(TIUI)) Q:+TIUI'>0  D<br/> . N TIUITEM,TIUSUCC<br/> . S TIUITEM(.01)=TIUI,TIUITEM(.02)=TIUX(TIUI),TIUSUCC=TIUI<br/> . D UPDATE^TIUSRVT1(.TIUSUCC,"""+"_TIUI_","_TIUDA_",""",.TIUITEM)<br/> . S SUCCESS(TIUI)=TIUSUCC</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}