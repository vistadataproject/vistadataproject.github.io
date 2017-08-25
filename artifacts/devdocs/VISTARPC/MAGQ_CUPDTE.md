---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ CUPDTE<br/>
# MAGQ CUPDTE

This RPC is used by the purge routine to update the magnetic references inthe image file(#2005) for images have migrated to heretofore unmappednetwork locations.

## Properties

Property | Value
--- | ---
Label | CUPD
MUMPS Implementation | [MAGQBPRG](http://code.osehra.org/dox/Routine_MAGQBPRG_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILEPATH | LITERAL |  | true | This is the network path on which the image file was found.
FNAME | LITERAL |  | true | This is the filename, including extension, which requires its locationupdated. 
IEN | LITERAL |  | true | This is the internal entry number of the image file (#2005) which requiresupdating.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}