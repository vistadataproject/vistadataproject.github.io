---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM CON UNREADLIST LOCK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM CON UNREADLIST LOCK{:/}
 tag | {::nomarkdown}LOCK{:/}
 routine | [MAGDTR04](http://code.osehra.org/dox/Routine_MAGDTR04_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Per VHA Directive 2004-038, this RPC should not be modified.+---------------------------------------------------------------+ Property of the US Government.                                 No permission to copy or redistribute this software is given.  Use of unreleased versions of this software requires the user  to execute a written test agreement with the VistA Imaging     Development Office of the Department of Veterans Affairs,      telephone (301) 734-0100.                                      The Food and Drug Administration classifies this software as   a medical device.  As such, it may not be changed in any way.  Modifications to this software may result in an adulterated    medical device under 21CFR820, the use of which is considered  to be a violation of US Federal Statutes.                     +---------------------------------------------------------------+  Lock or unlock an entry in TELEREADER READ/UNREAD LIST file (#2006.5849).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}UNREAD LIST POINTER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A pointer to TELEREADER READ/UNREAD LIST file (#2006.5849){:/} | 
| {::nomarkdown}LOCK FLAG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}LOCK FLAG = 1 TO CREATE THE LOCKLOCK FLAG = 0 TO REMOVE THE LOCK{:/} | 
| {::nomarkdown}FULL NAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}FULL NAME OF READER (LAST,FIRST FORMAT){:/} | 
| {::nomarkdown}NAME ABBREVIATION{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}INITIALS FOR THE READER{:/} | 
| {::nomarkdown}REMOTE DUZ{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DUZ of the Reader at acquisition site{:/} | 
| {::nomarkdown}LOCAL DUZ{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DUZ of the Reader at reading site{:/} | 
| {::nomarkdown}READER SITE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Reading Site pointer to INSTITUTION file (#4){:/} | 
| {::nomarkdown}READER STATION{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Reading Site's Station Number{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}