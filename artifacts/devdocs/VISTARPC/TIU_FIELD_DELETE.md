---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU FIELD DELETE
# TIU FIELD DELETE

Deletes an entry in the Template Field (8927.1) file.

Property | Value
--- | ---
Label | DELETE
Routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | IEN of record to delete.



### MUMPS Method Description

Property | Value
--- | ---
Method | [DELETE^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Method Comment | Call ^DIK to remove a Template Field
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> N DIK,DA<br/> S DA=+TIUDA<br/> D UNLOCK(.TIUY,.TIUDA)<br/> S DIK="^TIU(8927.1," D ^DIK<br/> S TIUY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}