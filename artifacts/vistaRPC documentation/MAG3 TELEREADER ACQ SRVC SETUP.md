---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG3 TELEREADER ACQ SRVC SETUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG3 TELEREADER ACQ SRVC SETUP{:/}
 tag | {::nomarkdown}UASRVC{:/}
 routine | [MAGNTLR6](http://code.osehra.org/dox/Routine_MAGNTLR6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Per VHA Directive 2004-038, this RPC should not be modified.+---------------------------------------------------------------+ Property of the US Government.                                 No permission to copy or redistribute this software is given.  Use of unreleased versions of this software requires the user  to execute a written test agreement with the VistA Imaging     Development Office of the Department of Veterans Affairs,      telephone (301) 734-0100.                                      The Food and Drug Administration classifies this software as   a medical device.  As such, it may not be changed in any way.  Modifications to this software may result in an adulterated    medical device under 21CFR820, the use of which is considered  to be a violation of US Federal Statutes.                     +---------------------------------------------------------------+ UPDATES TELEREADER ACQUISITION SERVICE file (#2006.5841){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Delete action: MAGPARAM(\ACTION\)           = \DELETE\ MAGPARAM(\IEN\)              = IEN of the record that will be deletedAdd or Update action: MAGPARAM(\ACTION\)           = \ADD\ or \UPDATE\ MAGPARAM(\NAME\)             = A pointer to REQUEST SERVICES file (#123.5) MAGPARAM(\PROCEDURE\)        = A pointer to GMRC PROCEDURE file (#123.3) MAGPARAM(\SPECIALTY INDEX\)  = A pointer to the SPECIALTY file (#2005.84) MAGPARAM(\PROCEDURE INDEX\)  = A pointer to the PROCEDURE/EVENT file (#2005.85) MAGPARAM(\ACQUISITION SITE\) = A pointer to the INSTITUTION file (#4)  MAGPARAM(\UNREAD LIST CREATION TRIGGER\) = I/O/F MAGPARAM(\TIU NOTE FILE\)    = A pointer to TIU DOCUMENT file (#8925.1){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}