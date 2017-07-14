---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ ADD RAID GROUP<br/>
# MAGQ ADD RAID GROUP

This is used to create the next RAID group for the Network Locationfile (#2005.2).  It will generate a group name that includes the sites namespace and the next logical sequence number.

## Properties

Property | Value
--- | ---
Label | ADDRG
Routine | [MAGQBUT5](http://code.osehra.org/dox/Routine_MAGQBUT5_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NUMBER | LITERAL | 99 | true | This value determines the number of RAID groups to be added to the sitesNetwork Location file (#2005.2).
PLACE | LITERAL | 99 |  | This is the place value, an entry in the IMAGING SITE PARAMETER (#2006.1)file, for the RAID group entry being defined.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}