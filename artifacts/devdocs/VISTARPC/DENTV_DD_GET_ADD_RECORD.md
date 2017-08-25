---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV DD GET ADD RECORD<br/>
# DENTV DD GET ADD RECORD

This rpc returns the internal entry number to file 228 for a cpt code.

## Properties

Property | Value
--- | ---
Label | ADD
MUMPS Implementation | [DENTVRP3](http://code.osehra.org/dox/Routine_DENTVRP3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 10 | true | Format:  data &#x3D; p1 ^ p2  where  p1 &#x3D; cpt code name (or ien to file 81)  p2 &#x3D; optional - if p2&#x3D;1 then add cpt code to file 228       if p2 is undefined or is 0, then lookup ien to file 228,       but do not add if cpt is not in file 228
KEY | LITERAL | 1 | true | Check which security key this user has. The default value is &#x27;L&#x27;, or youmay pass &#x27;M&#x27;  If L, then see if user owns the local edit security key toedit entries in the local number space (&gt;100,000).  If you pass &#x27;M&#x27; thenthis will check to see if the user owns the VACO security key and if sothen the user can edit any entry in the file.  Regardless of the keyowned, if the record being edited has an ien&gt;100,000 then only fields.01,1,5,6 may be edited.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}