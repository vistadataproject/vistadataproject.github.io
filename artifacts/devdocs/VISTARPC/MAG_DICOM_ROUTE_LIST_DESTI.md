---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM ROUTE LIST DESTI<br/>
# MAG DICOM ROUTE LIST DESTI

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ A routing transmitter will send files to any one out of a list ofpossible destinations. A site can decide to set up onetransmitter to transmit to all their destinations, or set upmultiple transmitters that each send to a (non-overlapping)subset of these destinations. When a transmitter is started, itwill ask the end-user for the destination or list of destinationsto which it will transmit files. In order to be able to ask thisquestion, the transmitter will call this RPCto obtain a list of valid destinations from the VistA system.

## Properties

Property | Value
--- | ---
Label | LISTDEST
Routine | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}