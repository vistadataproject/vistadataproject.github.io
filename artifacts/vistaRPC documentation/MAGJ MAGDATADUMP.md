---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGJ MAGDATADUMP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ MAGDATADUMP{:/}
 tag | {::nomarkdown}DATADUMP{:/}
 routine | [MAGJUTL4](http://code.osehra.org/dox/Routine_MAGJUTL4_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}  +---------------------------------------------------------------+   Property of the US Government.                                   No permission to copy or redistribute this software is given.    Use of unreleased versions of this software requires the user    to execute a written test agreement with the VistA Imaging       Development Office of the Department of Veterans Affairs,        telephone (301) 734-0100.                                                                                                         The Food and Drug Administration classifies this software as     a medical device.  As such, it may not be changed in any way.    Modifications to this software may result in an adulterated      medical device under 21CFR820, the use of which is considered    to be a violation of US Federal Statutes.                       +---------------------------------------------------------------+Imaging Vistarad RPC for displaying internal Imaging data{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}'DATA' HAS THE FOLLOWING STRUCTURE: \REQUEST^PARAM1PARAM2\   'REQUEST' IS REQUIRED AND MUST BE A MEMBER OF \CPT,FLDS,GLB\.      'PARAM1' IS REQUIRED TO HOLD A CPT CODE IFF 'REQUEST'=\CPT\.      'PARAM1' IS OPTIONAL TO HOLD FILEMAN FLAGS IFF 'REQUEST'=\FLDS\.      'PARAM2' IS NOT USED IFF 'REQUEST'=\CPT\.      'PARAM2' IS REQUIRED IF 'REQUEST'=\FLDS\ OR 'REQUEST'=\GLB\.         IN EITHER CASE, 'PARAM2' MAY HOLD:           AN INTEGER REPRESENTING THE IMAGE IEN, OR           A CARET-DELIMITED 3 PIECE PARTIAL CASE/EXAM ID STRING, OR           A CARET-DELIMITED 4 PIECE COMPLETE CASE/EXAM ID STRING.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}