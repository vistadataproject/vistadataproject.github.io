---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG UTIL GETNETLOC<br/>
# MAG UTIL GETNETLOC

Returns a list of entries in the NETWORK LOCATION file(#2005.2).The RPC will return each NETWORK LOCATION data along with its OPERATIONAL STATUS (offline/online), PHYSICAL REFERENCE, HASH SUBDIRECTORY,SITE, PLACE info ...etc.

## Properties

Property | Value
--- | ---
Label | SHARE
MUMPS Implementation | [MAGSDEL5](http://code.osehra.org/dox/Routine_MAGSDEL5_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYPE | LITERAL | 32 |  | ALL or select storage type &quot;MAG&quot; or &quot;WORM&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}