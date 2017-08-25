---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ USER DATA<br/>
# MAGJ USER DATA

  +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+ Store/retrieve Vistarad USer preferences, including hanging protocols, etc.

## Properties

Property | Value
--- | ---
Label | RPCIN
MUMPS Implementation | [MAGJPRF1](http://code.osehra.org/dox/Routine_MAGJPRF1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMS | LITERAL | 100 | true | TXID ^ SYSUPDAT ^ TXDUZ ^ TXDIVTXID: Transaction ID--identifies the type of transaction being requested;TXDUZ: Optional; DUZ value for retrieving another users stored data.  E.g., allow User X to see User Y&#x27;s Hanging ProtocolsTXDIV: Optional; DIVision value for viewing data stored from other divisions.
DATA | WORD PROCESSING | 240 |  | Optional Block of text sent from the client side; has structure as follows *LABEL Label Value 0:N lines of text associated with Label Value *ENDNote: multiple sequences of the above may be included.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}