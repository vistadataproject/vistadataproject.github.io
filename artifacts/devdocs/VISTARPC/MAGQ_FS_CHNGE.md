---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ FS CHNGE<br/>
# MAGQ FS CHNGE

Finds the available network file server with the most space, changes the current write space pointer and returns the IEN.The candidate list requires the following criteria:ONLINEtype: MAGpath does not contain: ":"NON-ROUTER

## Properties

Property | Value
--- | ---
Label | CHGSERV
MUMPS Implementation | [MAGQBUT](http://code.osehra.org/dox/Routine_MAGQBUT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
null |  |  |  | No input parameter required.
NOTIFY | LITERAL | 2 | true | A message will be sent to the G.MAG_SERVER mail group if this value is set to &#x27;1&#x27; and if the share space does not meet the lower limit as establishedby the PERCENT SERVER RESERVE (#11) in the SITE PARAMETER FILE (#2006.1).
BP OS | LITERAL | 99 | true | This is the Microsoft Windows operating system name and version.
BPWS | LITERAL | 99 | true | This is the Background Processor network computer name.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}