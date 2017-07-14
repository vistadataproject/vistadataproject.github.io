---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV UPDATE SUBFILE MULT<br/>
# DSIV UPDATE SUBFILE MULT

Allows editing of multiple entries in a FileMan multiple at one time.

## Properties

Property | Value
--- | ---
Label | ADDUPD
Routine | [DSIVIC2](http://code.osehra.org/dox/Routine_DSIVIC2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | Contains the file# to add/edit data.
IEN | LITERAL | 30 | true | Contains the IEN of the entry to add/edit.
DATA | LIST | 50 | true | Array holding entries for adding:   DATA(n)&#x3D;$START   DATA(n)&#x3D;field^value   DATA(n)&#x3D;field^value   DATA(n)&#x3D;$END  for updating:    DATA(n)&#x3D;$START    DATA(n)&#x3D;SubfieldIEN^field^value    DATA(n)&#x3D;SubfieldIEN^field^value    DATA(n)&#x3D;$END 
FLAG | LITERAL | 1 | true | FLAG&#x3D;0 to add entries to a multiple,FLAG&#x3D;1 to update entries in a multiple.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}