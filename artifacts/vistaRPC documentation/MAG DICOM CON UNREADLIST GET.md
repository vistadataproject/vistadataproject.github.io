---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM CON UNREADLIST GET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM CON UNREADLIST GET{:/}
 tag | {::nomarkdown}LOOKUP{:/}
 routine | [MAGDTR05](http://code.osehra.org/dox/Routine_MAGDTR05_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Per VHA Directive 2004-038, this RPC should not be modified.+---------------------------------------------------------------+ Property of the US Government.                                 No permission to copy or redistribute this software is given.  Use of unreleased versions of this software requires the user  to execute a written test agreement with the VistA Imaging     Development Office of the Department of Veterans Affairs,      telephone (301) 734-0100.                                      The Food and Drug Administration classifies this software as   a medical device.  As such, it may not be changed in any way.  Modifications to this software may result in an adulterated    medical device under 21CFR820, the use of which is considered  to be a violation of US Federal Statutes.                     +---------------------------------------------------------------+ Retrieve records in TELEREADER READ/UNREAD LIST file (#2006.5849).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ACQSITE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Acquisition Station Number{:/} | 
| {::nomarkdown}SPECIALITY INDEX{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A pointer to IMAGE INDEX FOR SPECIALTY/SUBSPECIALTY file (#2005.84){:/} | 
| {::nomarkdown}PROCEDURE INDEX{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A pointer to IMAGE INDEX FOR PROCEDURE/EVENT file (2005.85) - this is a comma-delimited list{:/} | 
| {::nomarkdown}TIMESTAMP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Fileman date/time to begin sequential search{:/} | 
| {::nomarkdown}DUZ{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}User's DUZ at the Reading Site{:/} | 
| {::nomarkdown}READER SITE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Reading Site pointer to INSTITUTION file (#4){:/} | 
| {::nomarkdown}LOCKTIME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}AMOUNT OF TIME A READ LOCK CAN BE HELD BEFORE TIMING OUT.{:/} | 
| {::nomarkdown}STATLIST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Status of entry to be retrieve (C, L, R, U, or W, in any combination){:/} | 
| {::nomarkdown}READER STATION{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Reading Site's Station Number{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}