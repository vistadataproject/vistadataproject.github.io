---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DIRHASH<br/>
# MAG DIRHASH

+---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     ||                  | The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+ This function returns the current hash schema.

## Properties

Property | Value
--- | ---
Label | DHRPC
Routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Filenamd | LITERAL | 30 | true | Name of the Image file to be evaluated hashing.
Network location file pointer. | LITERAL | 999 | true | This reference is used to determine whether hashing is enabledon the target network location.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}