---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGJ HISTORYLIST 

 property | value 
--- | --- 
 label | MAGJ HISTORYLIST
 tag | HIST
 routine | [MAGJLS4](http://code.osehra.org/dox/Routine_MAGJLS4_source.html)
 return value type | GLOBAL ARRAY
 description |   +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+ Functions for maintaining and displaying the Vistarad Exam History List

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAMS | LITERAL | 1 | true | TXID ^ TXDUZ ^ TXDIVTXID: Required; designates action to take: 1--Add entries; 2--Update/refresh data; 3--Delete entriesTXDUZ: Optional; if supplied, get data for another user (Read Only)TXDIV: Optional; if supplied, get data for another division (Read Only) | 
| DATA | LIST | 30 |  | Exam ID \|\ Display data | 