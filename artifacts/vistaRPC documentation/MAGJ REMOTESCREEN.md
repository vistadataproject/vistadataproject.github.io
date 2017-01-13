---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGJ REMOTESCREEN 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ REMOTESCREEN{:/}
 tag | {::nomarkdown}REMSCRN{:/}
 routine | [MAGJUTL4](http://code.osehra.org/dox/Routine_MAGJUTL4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ VistARad client calls this to set/clear flag to show/not show remoteexams only when displaying exam lists for a routing/remote read user.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input is 1 or 0;  1=screen for remote only; 0=no screen applied{:/} | 




 Generated on January 13th 2017, 5:52:13 am