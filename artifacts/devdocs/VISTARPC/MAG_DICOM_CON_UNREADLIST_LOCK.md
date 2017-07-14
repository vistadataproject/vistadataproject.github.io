---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM CON UNREADLIST LOCK<br/>
# MAG DICOM CON UNREADLIST LOCK

Per VHA Directive 2004-038, this RPC should not be modified.+---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     || The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+  Lock or unlock an entry in TELEREADER READ/UNREAD LIST file (#2006.5849).

## Properties

Property | Value
--- | ---
Label | LOCK
Routine | [MAGDTR04](http://code.osehra.org/dox/Routine_MAGDTR04_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
UNREAD LIST POINTER | LITERAL |  | true | A pointer to TELEREADER READ/UNREAD LIST file (#2006.5849)
LOCK FLAG | LITERAL |  | true | LOCK FLAG &#x3D; 1 TO CREATE THE LOCKLOCK FLAG &#x3D; 0 TO REMOVE THE LOCK
FULL NAME | LITERAL |  | true | FULL NAME OF READER (LAST,FIRST FORMAT)
NAME ABBREVIATION | LITERAL |  | true | INITIALS FOR THE READER
REMOTE DUZ | LITERAL |  | true | DUZ of the Reader at acquisition site
LOCAL DUZ | LITERAL |  | true | DUZ of the Reader at reading site
READER SITE | LITERAL |  | true | Reading Site pointer to INSTITUTION file (#4)
READER STATION | LITERAL |  |  | Reading Site&#x27;s Station Number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}