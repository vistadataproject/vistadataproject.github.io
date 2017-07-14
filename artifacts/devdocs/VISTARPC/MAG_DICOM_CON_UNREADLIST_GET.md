---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM CON UNREADLIST GET<br/>
# MAG DICOM CON UNREADLIST GET

Per VHA Directive 2004-038, this RPC should not be modified.+---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     || The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+ Retrieve records in TELEREADER READ/UNREAD LIST file (#2006.5849).

## Properties

Property | Value
--- | ---
Label | LOOKUP
Routine | [MAGDTR05](http://code.osehra.org/dox/Routine_MAGDTR05_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ACQSITE | LITERAL |  | true | Acquisition Station Number
SPECIALITY INDEX | LITERAL |  | true | A pointer to IMAGE INDEX FOR SPECIALTY/SUBSPECIALTY file (#2005.84)
PROCEDURE INDEX | LITERAL |  | true | A pointer to IMAGE INDEX FOR PROCEDURE/EVENT file (2005.85) - this is a comma-delimited list
TIMESTAMP | LITERAL |  | true | Fileman date/time to begin sequential search
DUZ | LITERAL |  | true | User&#x27;s DUZ at the Reading Site
READER SITE | LITERAL |  | true | Reading Site pointer to INSTITUTION file (#4)
LOCKTIME | LITERAL |  | true | AMOUNT OF TIME A READ LOCK CAN BE HELD BEFORE TIMING OUT.
STATLIST | LITERAL |  |  | Status of entry to be retrieve (C, L, R, U, or W, in any combination)
READER STATION | LITERAL |  |  | Reading Site&#x27;s Station Number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}