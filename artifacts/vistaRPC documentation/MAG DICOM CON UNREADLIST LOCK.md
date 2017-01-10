---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM CON UNREADLIST LOCK 

 property | value 
--- | --- 
 label | MAG DICOM CON UNREADLIST LOCK
 tag | LOCK
 routine | [MAGDTR04](http://code.osehra.org/dox/Routine_MAGDTR04_source.html)
 return value type | SINGLE VALUE
 description | Per VHA Directive 2004-038, this RPC should not be modified.+---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     || The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+  Lock or unlock an entry in TELEREADER READ/UNREAD LIST file (#2006.5849).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | UNREAD LIST POINTER | LITERAL |  | true | A pointer to TELEREADER READ/UNREAD LIST file (#2006.5849) | 
| vs:Input_Parameter-8994_02 | LOCK FLAG | LITERAL |  | true | LOCK FLAG = 1 TO CREATE THE LOCKLOCK FLAG = 0 TO REMOVE THE LOCK | 
| vs:Input_Parameter-8994_02 | FULL NAME | LITERAL |  | true | FULL NAME OF READER (LAST,FIRST FORMAT) | 
| vs:Input_Parameter-8994_02 | NAME ABBREVIATION | LITERAL |  | true | INITIALS FOR THE READER | 
| vs:Input_Parameter-8994_02 | REMOTE DUZ | LITERAL |  | true | DUZ of the Reader at acquisition site | 
| vs:Input_Parameter-8994_02 | LOCAL DUZ | LITERAL |  | true | DUZ of the Reader at reading site | 
| vs:Input_Parameter-8994_02 | READER SITE | LITERAL |  | true | Reading Site pointer to INSTITUTION file (#4) | 
| vs:Input_Parameter-8994_02 | READER STATION | LITERAL |  |  | Reading Site's Station Number | 