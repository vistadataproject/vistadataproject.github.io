---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GENERATE DICOM UID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GENERATE DICOM UID{:/}
 tag | {::nomarkdown}GENNWUID{:/}
 routine | [MAGVUID2](http://code.osehra.org/dox/Routine_MAGVUID2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Per VHA Directive 2004-038, this RPC should not be modified.+---------------------------------------------------------------+ Property of the US Government.                                 No permission to copy or redistribute this software is given.  Use of unreleased versions of this software requires the user  to execute a written test agreement with the VistA Imaging     Development Office of the Department of Veterans Affairs,      telephone (301) 734-0100.                                      The Food and Drug Administration classifies this software as   a medical device.  As such, it may not be changed in any way.  Modifications to this software may result in an adulterated    medical device under 21CFR820, the use of which is considered  to be a violation of US Federal Statutes.                     +---------------------------------------------------------------+ This RPC generates a new DICOM UID that is not unique.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}MAGPARAM(\ACCESSION NUMBER\)MAGPARAM(\SITE\)MAGPARAM(\INSTRUMENT\)MAGPARAM(\TYPE\) = \STUDY\ or \SERIES\ or \SOP\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}