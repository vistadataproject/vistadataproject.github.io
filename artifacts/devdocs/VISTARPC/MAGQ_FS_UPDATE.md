---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ FS UPDATE<br/>
# MAGQ FS UPDATE

Updates the online file server entries in the Network location filewith the disk size and the space available.

## Properties

Property | Value
--- | ---
Label | FSUPDT
Routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | The network location file (#2005.2) internal entry number of the recordto be updated. 
SPACE | LITERAL |  | true | The amount of space available for copying images.
SIZE | LITERAL |  | true | The disk capacity of the network share.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}