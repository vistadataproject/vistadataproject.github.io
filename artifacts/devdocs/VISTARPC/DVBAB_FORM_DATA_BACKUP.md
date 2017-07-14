---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB FORM DATA BACKUP<br/>
# DVBAB FORM DATA BACKUP

Makes a backup copy of a CAPRI template in case of data loss.  The backup is restored through the CAPRI GUI.

## Properties

Property | Value
--- | ---
Label | BACKUP
Routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBIEN | LITERAL |  |  | The IEN of the template for which a backup is being created
LISTBOX TEXT | LITERAL | 50 | true | Option field to allow the user to enter custom text to be attached to the saved data.  Displayed in the listbox on the GUI side.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}